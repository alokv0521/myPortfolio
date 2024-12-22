import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "Web Designer",
    icon: mobile,
  },
  {
    title: "Competitive Programmer",
    icon: backend,
  },
  {
    title: "Game Developer",
    icon: creator,
  },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Interview-Genie",
    company_name: "AI Mock Interview App 🤖",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Nov 2024 - Dec 2024",
    points: [
      
      "Creating an AI-driven mock interview platform with Next.js that offers personalized interview practice and feedback.",
"Integrating Claude authentication for secure and efficient user login and session management.",
      "Still working on this project 😅....... ",

    ],
  },
  {
    title: "multiplayer snowball Game",
    company_name: "A fun game 🤗",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2024 - August 2024",
    points: [
      "Designed a real-time multiplayer snow fighting game using HTML, CSS, JavaScript, Node.js, and Express.js, supporting seamless interactions for up to 20 players",
      "Leveraged Socket.io to achieve sub-100ms latency, ensuring smooth gameplay with instant responses to player actions and minimal delays.",
      "Conducted user testing with 50 players, achieving a 95% satisfaction rate, and iteratively refined gameplay features based on feedback.",
      "Implemented features such as player statistics tracking, interactive graphics, and responsive design for an engaging user experience.",
    ],
  },
  {
    title: "Atmos Alert",
    company_name: "A chrome extension for weather forecasting ☁️",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2024 - Feb 2024",
    points: [
      "Built a browser extension providing real-time weather updates and forecasts, supporting 1,000+ users simultaneously with location-based tracking.",
      "Integrated APIs to fetch weather data from 15,000+ locations, ensuring highly accurate and up-to-date information for users.",
      "Optimized the extension’s performance, reducing load times by 30% and minimizing memory usage to stay under 50MB for smooth operation.",
      "Ensured compatibility across 10+ browsers and devices by employing responsive design principles and rigorous cross-platform testing.",
    ],
  },
  {
    title: "Online Food Ordering Platform",
    company_name: "A food odering website 😋",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Jan 2024",
    points: [
      "Developed a food ordering platform featuring real-time updates and optimized performance, reducing reload times to just 2 seconds.",
      "Scaled the backend to handle 1,000 concurrent users with a response time under 200ms by optimizing API endpoints and database queries.",
      "Managed a database of over 1,000 food items and orders using efficient indexing and caching, ensuring data integrity and fast retrieval.",
      "Enhanced user experience with a mobile-friendly design, responsive layouts, and integrated user feedback mechanisms for continuous improvement.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    name: "Garv Divya",
    designation: "Founder",
    company: "D-bro",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    name: "Shubham Raj",
    designation: "Co-founder",
    company: "D-bro",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  }
];

const projects = [
  {
    name: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },

];

export { services, technologies, experiences, testimonials, projects };
