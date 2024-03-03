import {
  css,
  django,
  git,
  github,
  html,
  javascript,
  mongodb,
  nodejs,
  python,
  sass,
  react,
  redux,
  tailwind,
  threejs,
  mui,
  bootstrap,
  
} from "../assets/index.jsx";
// Technology

// Project 

import portfolio from '../assets/portfolio.png'
import hospital from '../assets/hospital.png'
import restaurent from '../assets/restaurent.png'
import mobile from '../assets/mobile.png'
import care from '../assets/care.png'

export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: react,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "GitHub",
    icon: github,
  },
];

// Projects

export const PROJECTS = [
  {
    name: "Personal PortFolio",
    description:
      "Develop a dynamic web application with React for frontend interactivity and Tailwind CSS for streamlined styling. Leverage React's component-based architecture for efficient UI management and Tailwind CSS's utility-first approach for rapid styling, ensuring a modern and visually appealing user experience.",
    tags: [
      {
        name: "reactJs",
        color: "text-blue-700",
      },
      {
        name: "tailwind",
        color: "text-rose-700",
      },
      {
        name: "tild",
        color: "text-green-600",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Ashishverma48/Portfolio-React",
    live_site_link: "https://ashishverma48.vercel.app/",
  },
  {
    name: "Custom Mobile Cover Maker",
    description:
      "Build a personalized mobile cover maker with React Fiber for optimized rendering and Tailwind CSS for responsive design. Empower users to customize their phone cases with ease, offering a seamless experience across various devices for creating unique designs.",
    tags: [
      {
        name: "reactJs",
        color: "text-green-700",
      },
      {
        name: "fibrejs",
        color: "text-blue-700",
      },
      {
        name: "tailwind",
        color: "text-rose-800",
      },
    ],
    image: mobile,
    source_code_link: 'https://github.com/Ashishverma48/Custom-Mobile-Cover-In-React',
    live_site_link: "https://frabjous-cucurucho-dee651.netlify.app/ ",
  },
  {
    name: "Hospital Management In Django",
    description:
      "Create a Hospital Management System in Django. Features include patient registration, appointment scheduling, medical records, and billing. Utilize Django's ORM and REST Framework for efficient development and robust functionality.",
    tags: [
      {
        name: "python",
        color: "text-blue-800",
      },
      {
        name: "django",
        color: "text-green-700",
      },
      {
        name: "django rest",
        color: "text-violet-800",
      },
      {
        name: "css",
        color: "text-rose-800",
      },
    ],
    image: hospital,
    source_code_link: "https://github.com/Ashishverma48/Hospital-Management-System-In--Django",
    live_site_link: "",
  },
  {
    name: "Care Ngo Clone",
    description:
      "Develop a Care NGO clone using HTML, CSS, and JS with animations. Implement transitions, fade-ins, or scroll effects for a dynamic user experience. Enhance engagement by incorporating subtle animations throughout the site's elements.",
    tags: [
      {
        name: "html",
        color: "text-red-700",
      },
      {
        name: "css",
        color: "text-green-700",
      },
      {
        name: "js",
        color: "text-gray-800",
      },
      {
        name: "aos",
        color: "text-pink-800",
      },
    ],
    image: care,
    source_code_link: "https://github.com/Ashishverma48/Care-India-Ngo-Website",
    live_site_link: "https://carengo.netlify.app/",
  },
  {
    name: "Restaurant Website",
    description:
      "Restaurant website with HTML, CSS, and JS. Incorporate menus, reservation forms, and location details. Ensure responsive design and intuitive navigation for seamless user interaction.",
    tags: [
      {
        name: "html",
        color: "text-green-700",
      },
      {
        name: "css",
        color: "text-blue-700",
      },
      {
        name: "javascript",
        color: "text-rose-800",
      },
    ],
    image: restaurent,
    source_code_link: "https://github.com/Ashishverma48/Restaurent",
    live_site_link: "https://myrestauren-01.netlify.app/",
  },
];
