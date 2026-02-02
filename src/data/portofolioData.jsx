export const portfolioData = {
  sectionTitle: {
    title: "My Portfolio",
    subtitle: "Explore my works, certifications, and the technologies I use — all in one place."
  },

  tabs: {
    projects: [
      {
        id: 1,
        img: "/assets/deligo.png",
        title: "DELIGO Delivery App",
        subtitle: "A full delivery management system built from scratch.",
        desc: "DELIGO is a complete delivery web application designed to handle stores, products, and orders efficiently. Built with Django and React, it features authentication, real-time order tracking, and a modular structure ready for deployment on PythonAnywhere and Render. It integrates JWT-based authentication, dynamic role management, and RESTful APIs for seamless communication between frontend and backend.",
        demo: "#",
        tags: ["Django", "React", "Node.js", "JWT", "REST API", "PythonAnywhere"]
      },
      {
        id: 2,
        img: "/assets/project.png",
        title: "Personal Portfolio Website",
        subtitle: "Your work deserves a beautiful showcase.",
        desc: "A sleek and responsive personal portfolio built with Vite and Tailwind CSS. This site features categorized project sections, certificates, and a dynamic tech stack. Optimized for both desktop and mobile experiences, it reflects professional branding with clean code.",
        demo: "#",
        tags: ["Vite", "React", "Tailwind CSS", "JavaScript"]
      }
    ],

    certificates: [
      { id: 1, img: "/assets/cert.jpg" },
      { id: 2, img: "/assets/cert.jpg" },
      { id: 3, img: "/assets/cert.jpg" }
    ],

    techStacks: [
      { id: 1, icon: "bx bxl-react", label: "React", color: "#61DAFB" },
      { id: 2, icon: "bx bxl-tailwind-css", label: "Tailwind CSS", color: "#38BDF8" },
      { id: 3, icon: "bx bxl-nodejs", label: "Node.js", color: "#3C873A" },
      { id: 4, icon: "bx bxl-javascript", label: "JavaScript", color: "#F7DF1E" },
      { id: 5, icon: "bx bxl-python", label: "Python", color: "#3776AB" },
      { id: 6, icon: "bx bxl-git", label: "Git", color: "#F05032" }
    ],

    education: [
      {
        id: 1,
        title: "Bachelor in Systems Engineering",
        institution: "National University of San Marcos",
        period: "2021 – Present",
        description:
          "Currently pursuing a degree in Systems Engineering with focus on software development, data analysis, and artificial intelligence applications."
      },
      {
        id: 2,
        title: "Full-Stack Web Development Bootcamp",
        institution: "Udemy",
        period: "2024",
        description:
          "Learned to build full-stack web applications using Django, React, and Node.js, with strong emphasis on deployment and API integration."
      }
    ],

    experience: [
      {
        id: 1,
        role: "Full-Stack Developer (Freelance)",
        company: "Independent Projects",
        period: "2023 – Present",
        responsibilities: [
          "Designed and developed responsive web apps using React and Django.",
          "Implemented REST APIs with Express and Node.js.",
          "Deployed production-ready applications on PythonAnywhere and Render."
        ],
        link: "#"
      },
      {
        id: 2,
        role: "Backend Developer Intern",
        company: "Tech Innovators",
        period: "2022 – 2023",
        responsibilities: [
          "Contributed to backend logic for delivery and logistics apps.",
          "Managed database design and optimization using PostgreSQL.",
          "Collaborated with frontend teams to integrate RESTful APIs."
        ],
        link: "#"
      }
    ]
  }
};
