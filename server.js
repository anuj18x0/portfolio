// server.js
const express = require('express');
const cors = require('cors');
const express = require('express');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const multer = require('multer');
const os = require('os');
const app = express();
const PORT = 8080;
require('dotenv').config()

app.use(cors());

// Set up uploads folder on Desktop
const desktopDir = path.join(os.homedir(), 'Desktop');
const uploadsDir = path.join(desktopDir, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});
const upload = multer({ storage });

app.use(express.json());

// Configure nodemailer (example uses Gmail SMTP)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS
  }
});

const csvFile = path.join(desktopDir, 'submissions.csv');

// Ensure CSV file has headers
if (!fs.existsSync(csvFile)) {
  fs.writeFileSync(csvFile, 'Name,Email,Message,File,Date\n');
}

app.post('/api/contact', upload.single('file'), async (req, res) => {
  const { name, email, message } = req.body;
  const file = req.file;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Append to CSV file
  const now = new Date().toISOString();
  const fileName = file ? file.filename : '';
  const row = `"${name.replace(/"/g, '""')}","${email.replace(/"/g, '""')}","${message.replace(/"/g, '""')}","${fileName}","${now}"\n`;
  fs.appendFile(csvFile, row, err => {
    if (err) console.error('Error writing to CSV:', err);
  });

  // Send email
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nFile: ${fileName}`,
      attachments: file ? [{
        filename: file.originalname,
        path: file.path
      }] : []
    });
  } catch (err) {
    console.error('Error sending email:', err);
    // Don't fail the request if email fails
  }

  res.status(200).json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
