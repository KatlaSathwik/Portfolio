// ===============================
// PROFILE
// ===============================
export const profileData = {
  name: "Katla Sathwik",
  title: "Machine Learning Engineer and Data Scientist",
  tagline: "Freelancer",

  email: "sathwikreddykatla@gmail.com",
  github: "github.com/KatlaSathwik",
  linkedin: "linkedin.com/in/katlasathwik/",
  resume: "/Katla_Sathwik_Resume.pdf",

  bio: `
Aspiring Data Scientist and Machine Learning Engineer with hands-on experience building end-to-end AI systems across data analysis, NLP, computer vision, and LLM-based applications. Seeking an opportunity to apply data-driven thinking, machine learning, and scalable AI solutions to solve real-world problems and drive measurable business impact.
`,
};

// ===============================
// COMMAND DESCRIPTIONS
// ===============================
export const commandDescriptions: Record<string, string> = {
  help: "List all available commands",
  about: "About me and my background",
  projects: "Showcase of featured projects",
  skills: "Technical skills and tools",
  experience: "Work and internship experience",
  education: "Academic background",
  certifications: "Professional certifications",
  leadership: "Leadership and community roles",
  contact: "Get my contact details",
  clear: "Clear the terminal",
};

// ===============================
// PROJECTS
// ===============================
export const projectsNote =
  "To explore my other projects, feel free to visit my GitHub profile.";

export const projectsData = [
  {
    id: "plantdoc",
    name: "PlantDoc",
    problem: "“PlantDoc is an AI-powered plant disease detection system that uses CNN-based deep learning on leaf images to deliver real-time, mobile-friendly diagnosis with 95%+ accuracy, enabling early intervention and reducing crop loss by 25%.”",
    techStack: ["TensorFlow", "CNN", "OpenCV", "Flask", "Flutter"],
    impact: "Achieved 95%+ accuracy for disease classification.",
    github: "https://github.com/Sathwikreddy018/Plant_Disease_Detection",
    demo: "",
  },
  {
    id: "careerforge",
    name: "CareerForge",
    problem: "“CareerForge is an AI-powered career platform that delivers personalized career roadmaps and automated job applications using transformer-based models, improving job search efficiency by 30% and increasing relevant job matches by 25% through scalable, optimized LLM pipelines.”.",
    techStack: ["PyTorch", "HuggingFace", "NLP","Transformers", "React", "MongoDB"],
    impact: "Generated AI-based learning paths for users.",
    github: "https://github.com/Sathwikreddy018/job-aplication-agent",
    demo: "",
  },
  {
    id: "bargainbot",
    name: "BargainBot",
    problem: "“Bargain Bot is an AI-powered e-commerce negotiation chatbot that uses fine-tuned GPT-style models and agentic workflows to conduct dynamic, multi-turn price bargaining, generating persuasive counteroffers and increasing user savings by 20%.”",
    techStack: ["Transformers", "SpaCy", "LangChain", "Docker", "Node.js"],
    impact: "Demonstrated real-time AI negotiation workflows.",
    github: "https://github.com/Sathwikreddy018/Bargain-Bot",
    demo: "",
  },
];


// ===============================
// SKILLS
// ===============================
export const skillsData: Record<string, string[]> = {
  "Programming Languages": ["Python","C","C++"],
  "Machine Learning": ["Scikit-learn", "XGBoost", "Feature Engineering", "EDA", "Hyperparameter Tuning", "Model Evaluation"],
  "Deep Learning": ["PyTorch", "TensorFlow", "CNN", "LSTM", "Transformers"],
  "NLP & LLMs": ["Hugging Face", "Transformers", "LangChain", "Prompt Engineering", "Tokenization", "Fine tuning"],
  "Generative AI & AI Agents": ["LanChain Agents", "Agent Orchestration", "Retrieval-Augmented Generation (RAG)"],
  "Computer Vision": ["Open CV", "Mediapipe", "Pose Estimation"],
  "Backend & APIs": ["FastAPI", "Flask","Node.js"],
  "Frontend": ["React", "Tailwind CSS","JavaScript","TypeScript"],
  "Tools & Platforms": ["Docker", "Git", "Linux","VS Code","Jupyter Notebook"],
};

// ===============================
// EXPERIENCE (FRESHER)
// ===============================
export const experienceData = [
  {
    id: "Fresher",
    role: "AI & ML Intern",
    company: "Brainwave Matrix ",
    period: "Mar 2025 - June 2025",
    responsibilities: [
      "Built an AI-powered fake news detection system using Python and NLP, achieving 90%+ classification accuracy.",
      "Drove model development and optimization using Logistic Regression and LSTM for text classification.",
      "Implemented TF-IDF and sentiment analysis to improve feature representation and prediction performance.",
      "Deployed a Flask-based web application for real-time news verification using scikit-learn and TensorFlow."
    ],
  },

  {
    id: "Freelancing",
    role: "Freelancing",
    period:"July 2025 - Present",
    responsibilities: [
      "Built various projects for institutions, Bussinesses and Contributed to open sources.",
      "Worked with startups like Creex, Carrerforge and Tech Strippers"
    ],
  },
  
];

// ===============================
// EDUCATION
// ===============================
export const educationData = [
  {
    id: "btech",
    degree: "Bachelors in Electronics and Communication Engineering",
    institution: "Vaagdevi Engineering College",
    year: "2021 – 2025",focus: "Machine Learning and AI"
    
  },
];

// ===============================
// CERTIFICATIONS (THIS FIXES YOUR ERROR)
// ===============================
export const certificationsData = [
  {
    id: "ml-cert",
    name: "Data Science",
    issuer: "Internshala Trainings",
    year: "2025",
  },
  {
    id: "1",
    name: "AI&ML Intern",
    issuer:"Brainwave Matrix",
    year: "2025"
  },
  {
    id: "dl-cert",
    name: "English Proficiency Test",
    issuer: "EFSET--  C2 Proficient (83/ 100)",
    year: "2026",
  },
  {
    id: "inter",
    name:"Cyber Security Awarness Intern",
    issuer:"Naksh Fundation",
    year: "2026",
  },
];

// ===============================
// LEADERSHIP
// ===============================
export const leadershipData = [
  {
    id:"sem",
    title:"Technical Seminar",
    description: [
      "Led our college team as captain of seminar team", 
      " and awarded Runner-up at a State-Level Technical Seminar on “Emerging Trends in Artificial Intelligence” (2022)"
    ],

  },
  {
    id: "project-lead",
    title: "AI Project Lead",
    description:
      "Led multiple AI/ML project implementations and peer collaborations.",
  },

];
