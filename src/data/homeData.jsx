import profilePic from "../assets/GATO-removebg-preview.png";

const homeData = {
  title: "Hi, I’m Gudmer Edu ",
  typingTexts: [
    "Student",
    "Scientific Computing",
    "Full Stack Developer",
    "Nonconformist",
  ],
  description:
    "Student of Scientific Computing focused on backend development and software architecture, experienced in building RESTful APIs, scalable systems, and using modern frameworks and databases.",

  // 👇 usamos la imagen importada
  img: profilePic,

  buttons: [
    {
      label: "Explore My Project",
      href: "#",
      type: "primary",
    },
    {
      label: "Download My CV",
      href: "#",
      type: "secondary",
    },
  ],

  floatingIcons: [
    { icon: "bx bxl-html5", color: "#e34c26", label: "HTML" },
    { icon: "bx bxl-java", color: "#264de4", label: "CSS" },
    { icon: "bx bxl-javascript", color: "#f0db4f", label: "JavaScript" },
    { icon: "bx bxl-react", color: "#61dbfb", label: "React" },
  ],

  socialMedia: [
    {
      platform: "GitHub",
      icon: "bx bxl-github",
      href: "https://github.com/gudmeer",
    },
    {
      platform: "Instagram",
      icon: "bx bxl-instagram",
      href: "https://www.instagram.com/duskgud_",
    },
    {
      platform: "WhatsApp",
      icon: "bx bxl-whatsapp",
      href: "https://wa.me/62XXXXXXXXXX",
    },
  ],

  stats: [
    {
      label: "Experience",
      value: "2+ Years",
      icon: "bx bx-briefcase",
    },
    {
      label: "Main Language",
      value: "Java",
      icon: "bx bxl-java",
    },
    {
      label: "Total Projects",
      value: "1 Projects",
      icon: "bx bx-code-alt",
    },

  ],
};

export default homeData;
