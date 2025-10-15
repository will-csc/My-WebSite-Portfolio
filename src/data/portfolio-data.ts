export interface ContactInfo {
  type: 'email' | 'linkedin' | 'github' | 'whatssap' | 'instagram';
  icon: string;
  label: string;
  url: string;
  backgroundColor?: string;
}

export interface Experience {
  title: string;
  company: string;
  description: string;
  period: string;
  startDate: string;
  endDate: string;
  current: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
}

export interface Skill {
  name: string;
  category: 'hard' | 'soft';
  icon?: string;
  color?: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    location: string;
    bio: string;
    profileImage?: string;
    year: string;
  };
  hashtags: string[];
  aboutMe: {
    greeting: string;
    description: string;
    backgroundImage?: string;
  };
  introduction: {
    title: string;
    subtitle: string;
    description: string;
    illustration?: string;
  };
  experience: Experience[];
  education: Education[];
  expertise: string[];
  hardSkills: Skill[];
  softSkills: Skill[];
  contacts: ContactInfo[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "William",
    title: "Database Analytics developer",
    location: "São Paulo, Brazil",
    bio: "I'm currently enrolled in the Analysis and Systems Development course at UNIFECAF, where I'm expanding my skills and knowledge in the field. On top of that, I work as a Database Analysis Developer at Segula technologies in the finance area. \nWith a deep passion for technologies, programming and foreign languagesI'm dedicated to staying up-to-date with the latest advancements and contributing to the tech industry.",
    year: "2025",
    profileImage: "public/foto_perfil.jpeg"
  },
  hashtags: [
    "#Database",
    "#Backend", 
    "#Dashboard",
    "#PowerBI",
    "#SQL",
    "#Excel",
    "#MachineLearning"
  ],
  aboutMe: {
    greeting: "Hello, my name is William",
    description: "I'm 21 years old and I work as a Database Analytics Developer in São Paulo, Brazil. And in my free time I study about some deep passions of mine: which is technology, geopolitics, history, and BJJ.",
    backgroundImage: "public/foto_perfil.jpeg"
  },
  introduction: {
    title: "Introduction",
    subtitle: "A Database Analytics developer based in São Paulo, Brazil",
    description: "I'm 21 years old and I work as a Database Analytics Developer in São Paulo, Brazil. And in my free time I study about some deep passions of mine: which is technology, geopolitics, history, and BJJ.",
    illustration: "public/introduction.png"
  },
  experience: [
    {
      title: "Database Analytics Developer",
      company: "Segula Technology",
      description: "Database Analytics (PowerBI, Power Query, Excel, SQL, etc)",
      period: "2025-Present",
      startDate: "Out",
      endDate: "Present",
      current: true
    },
    {
      title: "Comercial Assistant",
      company: "Bufalo Cleaning Products",
      description: "Helped the company with the sales of their products and services",
      period: "2022-2025",
      startDate: "Fev",
      endDate: "Mar",
      current: false
    }
  ],
  education: [
    {
      institution: "UniFECAF",
      degree: "Systems analysis and development",
      period: "2024 - 2026"
    },
    {
      institution: "Wizard",
      degree: "English Course B2 Level",
      period: "2025 - Present"
    },
    {
      institution: "Prepara Cursos",
      degree: "Advanced Excel",
      period: "2023 - 2024"
    }
  ],
  expertise: [
    "Dashboard Development",
    "Backend Development", 
    "API Development",
    "Database Design",
    "Mobile Development",
    "DevOps & Deployment"
  ],
  hardSkills: [
    { name: "JavaScript", category: "hard", icon: "JS", color: "#F7DF1E" },
    { name: "TypeScript", category: "hard", icon: "TS", color: "#3178C6" },
    { name: "React", category: "hard", icon: "⚛", color: "#61DAFB" },
    { name: "Node.js", category: "hard", icon: "🟢", color: "#339933" },
    { name: "Python", category: "hard", icon: "🐍", color: "#3776AB" }
  ],
  softSkills: [
    { name: "Creativity", category: "soft" },
    { name: "Teamwork", category: "soft" },
    { name: "Time Management", category: "soft" },
    { name: "Flexibility", category: "soft" },
    { name: "Communication", category: "soft" }
  ],
  contacts: [
    {
      type: "email",
      icon: "✉",
      label: "william.cesarbds2016@gmail.com",
      url: "mailto:william.cesarbds2016@gmail.com",
      backgroundColor: "#000000"
    },
    {
      type: "linkedin",
      icon: "in",
      label: "linkedin.com/in/william-cesar-7b7b89202",
      url: "https://www.linkedin.com/in/william-cesar-7b7b89202",
      backgroundColor: "#0077B5"
    },
    {
      type: "github",
      icon: "🐙",
      label: "github.com/will-csc",
      url: "https://github.com/will-csc",
      backgroundColor: "#FFFFFF"
    }
  ]
};
