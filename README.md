# Arth Arvind Portfolio

A modern, interactive portfolio built with React, Vite, and Tailwind CSS. Features a 3D animated hero, timeline, and a contact form with file upload and secure email notifications.

## Features

- ⚡ Beautiful, glassmorphic UI with Tailwind CSS
- 🎨 Animated 3D elements using Three.js and Framer Motion
- 🗂️ Timeline and project showcase
- 📬 Contact form with:
  - Name, email, and message fields
  - Optional file upload (e.g., job description, company profile)
  - Submissions saved to a CSV file on your Desktop
  - Uploaded files saved to a Desktop `uploads` folder
  - Email notification with form details and file attachment
- 🔒 Secure: Email credentials are stored in a `.env` file (never committed to git)

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/anuj18x0/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the project root:
```
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your-app-password
```
> **Note:** Use a Gmail App Password, not your main password. `.env` is already in `.gitignore`.

### 4. Start the Express backend
```bash
node server.js
```

### 5. Start the frontend (in a new terminal)
```bash
npm run dev
```

### 6. Open your browser
Go to [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Deployment
- For Vercel/Netlify: Use serverless functions or a backend service for the contact form.
- Never commit your `.env` file or credentials.

## License
MIT

---

> Built and designed by Arth Arvind. Inspired by modern web and UI trends.
