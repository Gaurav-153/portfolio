// Skills Section Logo's
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import cLogo from './assets/tech_logo/c.png';
import PHP from './assets/tech_logo/PHP.png';
import cssLogo from './assets/tech_logo/css.png';
import expressjsLogo from './assets/tech_logo/express.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import htmlLogo from './assets/tech_logo/html.png';
import javaLogo from './assets/tech_logo/java.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import Vuejs from './assets/tech_logo/Vuejs.png';
import laravel from './assets/tech_logo/laravel.png';
import WordPress from './assets/tech_logo/WordPress.png';
import AWS from './assets/tech_logo/AWS.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import postmanLogo from './assets/tech_logo/postman.png';
import pythonLogo from './assets/tech_logo/python.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import sassLogo from './assets/tech_logo/sass.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import vscodeLogo from './assets/tech_logo/vscode.png';


// Project Section Logo's
import Bank from './assets/work_logo/Bank.png';
import TNT from './assets/work_logo/TNT.png';
import RC from './assets/work_logo/RC.png';
import JobQuest from './assets/work_logo/JobQuest.png';
import Ecom from './assets/work_logo/Ecom.jpg';
import Trello from './assets/work_logo/Trello.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Vue JS', logo: Vuejs },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Laravel', logo: laravel },
    
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'PHP', logo: PHP },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'WordPress', logo: WordPress },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'AWS', logo: AWS },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      role: "Web Developer",
      company: "IBM SkillsBuild",
      date: "July 2024 - Sep 2024",
      desc: "Built 4+ responsive web applications using HTML, CSS, JavaScript, React, and Angular, improving user experience across devices.Collaborated with a cross-functional team, delivering features 10% ahead of deadlines with a focus on user-centric design.Debugged and optimized applications, reducing load times by 15% and resolving 10+ complex issues to enhance performance.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",,
        "Tailwind CSS",
      ],
    },
    {
      id: 1,
      role: "Junior Software Engineer",
      company: "BGM Technologies",
      date: "August 2021 - July 2022",
      desc: "Contributed to MERN stack development (MongoDB, Express.js, React, Node.js), ensuring cross-browser compatibility,seamless API integration, and optimized system performance.Designed and deployed 4+ WordPress websites, integrating custom themes and plugins to deliver responsive and userfriendly designs.Developed frontend and backend features using JavaScript and PHP, improving application scalability and reducing page load times by 20%.",
      skills: [
        "ReactJS",
        "WordPress",
        "PHP",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
      ],
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      school: "MIT ADT University",
      date: "July 2024 - August 2025",
      grade: "8.28 CGPA",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from MIT ADT University, Pune. During my time at MIT, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at MIT ADT University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA(Data Science)",
    },
    {
      id: 1,
      school: "Savitribai Phule Pune University",
      date: "July 2019 - Apr 2022",
      grade: "8.47 CGPA",
      desc: "I completed my Bachelor's degree in Computer Science from AM College, Pune. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at AM College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor in Computer Science - Bsc(CS)",
    },
    
  ];
  
  export const projects = [
    {
      id: 0,
      title: "JobQuest-Job Portal WebApp",
      description:
        "A full-stack job portal platform built with MongoDB, Express.js, React.js, and Node.js (MERN stack). The application allows users to browse job listings, apply for positions, and customize their profiles. It features secure JWT-based authentication for login/session handling and RESTful API integration for seamless frontend-backend communication. Database queries were optimized to improve performance, resulting in a 25% reduction in latency and a smoother user experience..",
      image: JobQuest,
      tags: ["React JS", "Tailwind", "Mongodb", "Nodejs", "RestAPI","Express.JS"],
      github: "https://github.com/Gaurav-153/JobQuest.git",
    },
    {
      id: 1,
      title: "RealTime Chat Application",
      description:
        "A real-time messaging application developed with the MERN stack (MongoDB, Express.js, React.js, Node.js). It supports private conversations with live online/offline status indicators. The backend integrates WebSocket technology for instant bidirectional communication and provides robust APIs for chat management and message persistence. Optimized MongoDB data models and queries ensure fast message storage and retrieval, delivering a smooth chat experience.",
      image: RC,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Gaurav-153/ChatApp.git",
    },
    
    {
      id: 2,
      title: "Trello-Lite Project Management App",
      description:"A beginner-friendly project management application inspired by Trello, built to help users organize tasks efficiently. The app allows users to create boards, lists, and tasks with drag-and-drop functionality, track activities through activity logs, and securely manage accounts with authentication.",
      image: Trello,
      tags: ["Next.js", "React", "React DnD", "TailwindCSS", "Express.js", "MongoDB"],
      github: "https://github.com/Gaurav-153/Trello-Lite.git",
    },

    {
      id: 3,
      title: "Banking Management System",
      description:
        "A fully functional web-based banking application built using PHP, MySQL, PhpMyAdmin, HTML, CSS, and JavaScript. The system allows users to create accounts, manage balances, and perform secure transactions. It includes complete CRUD functionality for customer records, transaction histories, and account management. The project emphasizes data security and integrity through input validation and a well-structured database design.",
      image: Bank,
      tags: ["PHP", "PhpMyAdmin", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Gaurav-153/Banking-Management-System.git",
    },

    {
      id: 4,
      title: "Tours N Travels Website",
      description:
        "A responsive and user-friendly tour and travel website developed using WordPress, Elementor, HTML, and CSS. The website showcases travel packages, provides booking information, and includes contact features, offering an engaging experience for visitors while maintaining a clean and modern design.",
      image: TNT,
      tags: ["WordPress", "Elementor", "HTML", "CSS"],
      github: "https://github.com/Gaurav-153/toursntravels.git",
    },
    {
      id: 5,
      title: "E-commerce WebApp",
      description:
        " A full-featured e-commerce platform developed using PHP, MySQL, HTML, CSS, and Bootstrap. The website enables users to browse, search, and purchase products through a responsive, user-friendly interface. Dynamic PHP templates were used to render content, while MySQL handled product listings, user accounts, and order history. Additional features include product filtering, shopping cart management, and user sessions to ensure a seamless shopping experience.",
      image: Ecom,
      tags: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
      github: "https://github.com/Gaurav-153/Ecommerce-App.git",
    },

    

    
    
  ];  