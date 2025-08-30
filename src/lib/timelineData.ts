export interface TimelineProject {
  id: string;
  title: string;
  caption: string; // ≤40 words
  description: string;
  category: "AI/ML" | "Web Development" | "Data Science" | "Software";
  techStack: string[];
  year: string;
  status: "completed" | "in-progress" | "planned";
  metrics?: {
    users?: string;
    performance?: string;
    impact?: string;
  };
  links?: {
    demo?: string;
    github?: string;
    article?: string;
  };
  highlights: string[];
  image?: string;
}

export const timelineProjects: TimelineProject[] = [
  {
    id: "3d-therapist",
    title: "3D Talking Avatar as a Therapist",
    caption: "Interactive 3D AI therapist providing real-time emotional support through natural conversations powered by advanced AI.",
    description: "Revolutionary mental health platform combining React Three Fiber with Google Cloud AI and Gemini for immersive therapeutic experiences. Features real-time emotion detection, personalized response generation, and 3D avatar interactions.",
    category: "AI/ML",
    techStack: ["React", "Three.js", "Google Cloud Platforms", "Gemini", "Python", "WebSockets", "Fast API"],
    year: "2024",
    status: "completed",
    metrics: {
      users: "100+ sessions",
      performance: "98% accuracy",
      impact: "85% user satisfaction"
    },
    links: {
      demo: "#",
      github: "#"
    },
    highlights: [
      "Real-time 3D avatar animation",
      "Advanced NLP for therapy sessions",
      "Health Advices",
      "Breathing / Journaling Practices"
    ]
  },
  {
    id: "vital-verse",
    title: "Vital Verse - Healthcare Platform",
    caption: "Comprehensive healthcare management system with AI diagnostics, patient monitoring, and seamless telemedicine integration.",
    description: "Full-stack healthcare platform revolutionizing patient care through AI-powered diagnostics, real-time monitoring, and integrated telemedicine. Built with React, FastAPI, and TensorFlow for scalable healthcare solutions.",
    category: "AI/ML",
    techStack: ["React Vite", "FastAPI", "MongoDB", "Python", "WebSocket", "Folium", "Scikit-learn"],
    year: "2024",
    status: "completed",
    metrics: {
      users: "60% faster application transfer",
      performance: "86% smart search accuracy",
      impact: "30% faster consultations"
    },
    links: {
      demo: "#",
      github: "#"
    },
    highlights: [
      "AI-powered smart distance measurement",
      "Real-time patient monitoring",
      "Main Website , Admin Portal & Hospital Portal",
      "Emergency Requests"
    ]
  },
  {
    id: "paynexa",
    title: "PayNexa - Payroll & Attendance",
    caption: "Advanced payroll management with facial recognition attendance tracking and automated salary calculations for modern workplaces.",
    description: "Enterprise-grade payroll and attendance management system featuring facial recognition technology, automated calculations, and comprehensive reporting. Streamlines HR processes with cutting-edge biometric integration.",
    category: "Web Development",
    techStack: ["React Vite", "Python", "MongoDB", "OpenCV", "FastAPI", "Docker", "Face Recognition"],
    year: "2023",
    status: "completed",
    metrics: {
      users: "30+ employees",
      performance: "92.5% accuracy",
      impact: "70% time savings"
    },
    links: {
      demo: "#",
      github: "#"
    },
    highlights: [
      "Facial recognition attendance",
      "Automated payroll calculations",
      "Real-time reporting dashboard",
      "Employee & Manager Portal"
    ]
  },
  {
    id: "ipl-analysis",
    title: "IPL Analysis & Prediction",
    caption: "Cricket analytics platform delivering future match predictions using machine learning models and comprehensive data visualization.",
    description: "Sports analytics platform utilizing Random Forest Regressor and advanced ML models to predict IPL match outcomes. Features interactive dashboards, player performance analysis, and real-time prediction updates.",
    category: "Data Science",
    techStack: ["Streamlit", "Random Forest Regressor", "Pandas", "Matplotlib", "Python", "Scikit-learn", "Numpy", "Seaborn"],
    year: "2023",
    status: "completed",
    metrics: {
      performance: "85% prediction accuracy",
      impact: "300+ predictions made"
    },
    links: {
      demo: "#",
      github: "#"
    },
    highlights: [
      "Match outcome predictions",
      "Player performance analytics",
      "Interactive data visualizations",
      "Real-time match updates"
    ]
  },
  {
    id: "would-you-rather",
    title: "Would You Rather Game",
    caption: "Interactive social polling game with real-time voting, user profiles, and engaging question categories.",
    description: "Social gaming platform built with React featuring user authentication, real-time polling, and interactive question categories. Includes leaderboards and social sharing capabilities.",
    category: "Web Development",
    techStack: ["HTML", "CSS", "Bootstrap", "MySQL", "Flask"],
    year: "2023",
    status: "completed",
    highlights: [
      "Choose one from two questions",
      "User authentication",
      "Social sharing features",
      "Responsive design"
    ]
  },
  {
    id: "invensync",
    title: "InvenSync - Inventory Management",
    caption: "Smart inventory tracking system with barcode scanning, predictive analytics, and automated reorder notifications.",
    description: "Enterprise inventory management solution featuring QR & barcode scanning, stock analytics, and automated supplier notifications. Built for scalability and real-time inventory tracking.",
    category: "Software",
    techStack: ["Python", "Tkinter", "MySQL", "Matplotlib", "Numpy"],
    year: "2023",
    status: "completed",
    highlights: [
      "QR & Barcode scanning integration",
      "Stock Management",
      "User and Employee Satisfaction",
      "Multi-warehouse support"
    ]
  },
  {
    id: "her",
    title: `Other Cute Projects for "Her"`,
    caption: "Animated , Lovely and Cute next.js projects",
    description: "She will be happy and impressed.",
    category: "Web Development",
    techStack: ["Next.js", "Animations"],
    year: "202x",
    status: "completed",
    highlights: [
      "Nice Impression",
      "She will love you more",
      "She will smile",
      "She will cook you nice food!"
    ]
  },
  {
    id: "auction",
      title: "Auction Management System (Java)",
      caption: "Fun CLI based automatic bidding system",
      description: "A CLI-based system built to manage auction entries and bidding, featuring an automatic bidding capability implemented using Java Threads.",
      techStack: ["Java", "Java Threads", "CLI"],
      category: "Software",
      year: "2023",
      status: "completed",
      highlights: [
        "CLI based automatic bidding system"
      ]
    },
    {
      id: "flappy",
      title: "Flappy Bird Game (Java)",
      caption: "Interactive CLI based game",
      description: "Developed a basic, command-line version of the classic Flappy Bird game, focusing on fundamental Java programming concepts and game loop logic.",
      techStack: ["Java", "CLI"],
      category: "Software",
      year: "2024",
      status: "completed",
      highlights: [
        "Interactive CLI based game"
      ]
    },
];

export const categories = ["All", "AI/ML", "Web Development", "Software", "Data Science"];
export const techFilters = [
  "React", "Python", "TypeScript", "Node.js", "MongoDB", "TensorFlow", 
  "FastAPI", "Three.js", "Docker", "Express", "PostgreSQL", "Streamlit", "Scikit-learn"
];