// ============================================================
// Portfolio Data — Single source of truth for all content.
// Edit this file to update projects, skills, education, etc.
// ============================================================

export const personalInfo = {
  name: "Raju Ahammed",
  headline: "Aspiring AI/ML Engineer",
  tagline: "Building intelligent systems through data-driven engineering",
  introduction:
    "I'm a Computer Science and Engineering student passionate about Machine Learning and Artificial Intelligence. I build practical ML projects, explore data science methodologies, and work toward developing useful AI-powered applications that solve real problems.",
  email: "rajuahammed.dev@gmail.com",
  github: "https://github.com/RajuAhammed01",
  linkedin: "https://linkedin.com/in/rajuahammed86",
  location: "Dhaka, Bangladesh",
};

export const aboutMe = {
  paragraphs: [
    "I'm a Computer Science and Engineering student at the University of Liberal Arts Bangladesh, building a strong foundation in software engineering while actively exploring the fields of Machine Learning and Artificial Intelligence.",
    "My approach combines theoretical understanding with practical implementation. I develop end-to-end ML projects — from data preprocessing and feature engineering to model training, evaluation, and deployment — to deepen my understanding of how data-driven systems work in practice.",
    "I'm particularly interested in supervised learning, classification problems, computer vision, and building AI-powered tools that address real-world challenges. I believe in learning by doing, and each project I build strengthens both my technical skills and my engineering discipline.",
  ],
  focusAreas: [
    "Machine Learning & Deep Learning",
    "Data Science & Analysis",
    "Computer Vision",
    "AI-Powered Applications",
    "Python Engineering",
    "Applied ML Research",
  ],
};

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages for software engineering and ML development",
    skills: [
      { name: "Python" },
      { name: "Java" },
      { name: "C" },
      { name: "SQL" },
    ],
  },
  {
    title: "Machine Learning & Data Science",
    description: "Frameworks and libraries for building ML models",
    skills: [
      { name: "scikit-learn" },
      { name: "XGBoost" },
      { name: "TensorFlow" },
      { name: "Pandas" },
      { name: "NumPy" },
    ],
  },
  {
    title: "Backend Development",
    description: "Server-side frameworks and API development",
    skills: [
      { name: "Django" },
      { name: "Django REST Framework" },
      { name: "REST APIs" },
    ],
  },
  {
    title: "Data Visualization & Tools",
    description: "Visualization libraries and development tools",
    skills: [
      { name: "Matplotlib" },
      { name: "Seaborn" },
      { name: "Excel" },
      { name: "Git" },
      { name: "GitHub" },
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  problem: string;
  description: string;
  technologies: string[];
  contribution: string;
  github: string;
  liveDemo?: string;
  category: "ml" | "web" | "data" | "ai";
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "car-price-prediction",
    title: "Car Price Prediction",
    problem: "Estimating fair market prices for used cars based on multiple features",
    description:
      "A machine learning regression project that predicts car prices using features like mileage, engine size, brand, and year. Built with XGBoost and optimized through hyperparameter tuning to improve prediction accuracy.",
    technologies: ["Python", "XGBoost", "scikit-learn", "Pandas", "NumPy"],
    contribution:
      "Developed the full ML pipeline including data cleaning, feature engineering, model selection, hyperparameter tuning, and evaluation.",
    github: "https://github.com/RajuAhammed01",
    category: "ml",
    featured: true,
  },
  {
    id: "disease-prediction",
    title: "Disease Prediction System",
    problem: "Predicting potential diseases from patient symptom inputs",
    description:
      "A classification project that takes symptom inputs and predicts possible diseases using multiple machine learning algorithms. Compares model performance to select the most accurate classifier.",
    technologies: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    contribution:
      "Built the classification pipeline, implemented multiple ML algorithms, and performed comparative model evaluation.",
    github: "https://github.com/RajuAhammed01",
    category: "ml",
    featured: true,
  },
  {
    id: "exam-result-predictor",
    title: "Exam Result Predictor",
    problem: "Predicting student pass/fail outcomes based on defined thresholds",
    description:
      "A predictive model that determines whether students will pass or fail based on a defined percentile threshold. Uses classification algorithms to analyze student performance data.",
    technologies: ["Python", "scikit-learn", "Pandas", "NumPy"],
    contribution:
      "Designed the prediction logic, implemented threshold-based classification, and validated model accuracy.",
    github: "https://github.com/RajuAhammed01",
    category: "ml",
    featured: true,
  },
  {
    id: "banknote-classification",
    title: "Banknote Classification",
    problem: "Distinguishing authentic banknotes from counterfeit ones",
    description:
      "A classification project that uses feature scaling and machine learning algorithms to classify banknotes as authentic or forged based on extracted image features.",
    technologies: ["Python", "scikit-learn", "Pandas", "NumPy"],
    contribution:
      "Implemented feature scaling, trained multiple classifiers, and evaluated model performance on banknote authentication data.",
    github: "https://github.com/RajuAhammed01",
    category: "ml",
    featured: false,
  },
  {
    id: "jobsnap",
    title: "JobSnap",
    problem: "Matching job seekers with relevant opportunities based on their resume",
    description:
      "An intelligent job recommendation system that analyzes resumes and matches candidates with suitable job listings. Combines NLP-based resume parsing with recommendation algorithms.",
    technologies: ["Python", "Django", "scikit-learn", "NLP", "REST API"],
    contribution:
      "Built the resume analysis pipeline and job recommendation engine, integrating backend APIs with ML-based matching logic.",
    github: "https://github.com/RajuAhammed01",
    category: "ai",
    featured: true,
  },
];

export const education = {
  degree: "BSc in Computer Science and Engineering",
  institution: "University of Liberal Arts Bangladesh (ULAB)",
  location: "Dhaka, Bangladesh",
  // Update this with your actual dates
  period: "Currently Pursuing",
  highlights: [
    "Core coursework in Data Structures, Algorithms, and Software Engineering",
    "Focus on Machine Learning, AI, and Data Science",
    "Practical projects in ML classification, regression, and NLP",
  ],
};

export const researchInterests = [
  {
    title: "Machine Learning Experimentation",
    description:
      "Exploring supervised and unsupervised learning algorithms, comparing model performance, and understanding the trade-offs between different approaches for tabular and structured data.",
  },
  {
    title: "Deep Learning & Computer Vision",
    description:
      "Studying convolutional neural networks, image classification, and object detection. Building foundational knowledge in neural network architectures and training methodologies.",
  },
  {
    title: "Model Evaluation & Optimization",
    description:
      "Investigating hyperparameter tuning strategies, cross-validation techniques, and performance metrics to build more reliable and accurate machine learning models.",
  },
  {
    title: "Data Quality & Feature Engineering",
    description:
      "Researching best practices for data preprocessing, handling missing values, feature selection, and creating meaningful features that improve model performance.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];
