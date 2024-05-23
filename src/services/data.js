import {
  faGithub,
  faLinkedin,
  faTelegram,
  faCss3,
  faReact,
  faAngular,
  faNode,
  faSquareJs,
  faHtml5,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import marakiBlue from "../images/marakiLogBW.jpg";
import marakiWhite from "../images/marakiLogBW.jpg";
import portfolio from "../images/Logos/logo_small_icon_only.png";
import sunshine from "../images/card/sunshineHDish.jpg";
import Marki1 from "../images/Maraki/image1.jpeg";
import Marki2 from "../images/Maraki/image2.jpeg";
import Marki3 from "../images/Maraki/image3.jpeg";
import Marki4 from "../images/Maraki/image4.jpeg";
import Marki5 from "../images/Maraki/image5.jpeg";
import Marki6 from "../images/Maraki/image6.jpeg";
import Portfolio from "../images/Portfolio/pika-1.png";
import Portfolio2 from "../images/Portfolio/pika-2.png";
import Portfolio3 from "../images/Portfolio/pika-3.png";
import Portfolio4 from "../images/Portfolio/pika-4.png";
import Portfolio5 from "../images/Portfolio/pika-5.png";
import mess1 from "../images/messaging/pika-1716372695815-1x.png";
import mess2 from "../images/messaging/pika-1716373062327-1x.png";
import sunshine1 from "../images/sunshine/sunshine1.png";
import sunshine2 from "../images/sunshine/sunshine2.png";
import sunshine3 from "../images/sunshine/sunshine3.png";
import sunshine4 from "../images/sunshine/sunshine4.png";
import sunshine5 from "../images/sunshine/sunshine5.png";
import sunshine6 from "../images/sunshine/sunshine6.png";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const socials = [
  {
    name: "Email",
    icon: faEnvelope,
    url: "mailto: dagimeteshome@dagime.dev",
  },
  {
    name: "Linkedin",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/dagime-teshome",
  },
  {
    name: "Telegram",
    icon: faTelegram,
    url: "https://t.me/Vikdagi",
  },
  {
    name: "GitHub",
    icon: faGithub,
    url: "https://github.com/Dagime-Teshome",
  },
];

export const skills = [
  { name: "React", icons: faReact },
  { name: "Angular", icons: faAngular },
  { name: "Vue", icons: faVuejs },
  { name: "HTML", icons: faHtml5 },
  { name: "CSS", icons: faCss3 },
  { name: "JS", icons: faSquareJs },
  { name: "Node", icons: faNode },
];

export const navLinks = [
  {
    text: "About",
    href: "#About-section",
  },
  {
    text: "Projects",
    href: "#Projects-section",
  },
  {
    text: "Time Line",
    href: "#Education-section",
  },
  {
    text: "Contact Me",
    href: "#contactme-section",
  },
];

export const cardData = [
  {
    id: "MR",
    projectName: "Maraki Erp",
    image: marakiBlue,
    description: ` A Web based ERP Application used for the ethiopian market.
    `,
    skills: ["Angular", "SQL", ".Net"],
  },
  {
    id: "POS",
    projectName: "Sunshine Laundry",
    image: sunshine,
    description: ` An online Laundry management web site used to manage orders and process payment.`,
    skills: ["Angular", "Ionic", ".C#"],
  },
  {
    id: "PORT",
    projectName: "Portfolio Site",
    image: portfolio,
    description: ` A portfolio website to show case skills and Projects`,
    skills: ["React", "Tailwind"],
  },
  {
    id: "MESS",
    projectName: "Messaging API",
    image: marakiWhite,
    description: `An API for to enable an ERP system to send notifications easily`,
    skills: ["NextJs", "SQL", "Node"],
  },
];

export const projectData = [
  {
    id: "MR",
    images: [Marki1, Marki2, Marki3, Marki4, Marki5, Marki6],
    projectName: "Maraki ERP",
    projectYear: "2020",
    description: `I helped develop a web-based ERP system to improve efficiency for Ethiopian businesses. 
    This system automates accounting, manages employee data and payroll, and centralizes customer information.
     It also streamlines inventory management and helps with project planning.
      Working on this project allowed me to contribute to a tool
     that makes business operations smoother and more effective.`,

    projImpact: `Implementing this ERP system helps organizations save time and reduce errors by automating routine tasks. It improves data accuracy and accessibility, leading to better decision-making. The centralized system enhances coordination across departments, boosts productivity, and supports growth by making business processes more efficient and effective.`,
    projSkills: [{ name: "Angular", icons: faAngular }],
    sourceCodeLink: null,
    projectLink: "https://www.marakisoft.com/home",
  },
  {
    id: "POS",
    images: [sunshine1, sunshine2, sunshine3, sunshine4, sunshine5, sunshine6],
    projectName: "Sunshine Laundry",
    projectYear: "2020",
    description: `The Sunshine Laundry App, crafted for our client, simplifies laundry service tasks. It tracks orders 
    smoothly from drop-off to pick-up and plans efficient delivery routes. With easy inventory management, 
    it ensures supplies are never low. Customers enjoy hassle-free payments and timely updates. Personalized 
    service is made possible with detailed customer records. Plus, insightful analytics aid in smart decision-making.
     Overall, the Sunshine Laundry App helps laundry businesses save time,
     reduce mistakes, and satisfy customers better.`,
    projImpact: `The Sunshine Laundry App has empowered our client to revolutionize their laundry business operations. With streamlined order management, optimized delivery routes, and seamless inventory tracking, they've enhanced efficiency and customer satisfaction. The app's intuitive interface and personalized service features have strengthened customer relationships, driving loyalty. Plus, actionable insights from analytics have fueled informed decision-making, propelling our client's growth and success in the industry. In essence, the Sunshine Laundry App has transformed our client's operations, making them more efficient, profitable, and customer-centric.`,
    projSkills: [
      { name: "Angular", icons: faAngular },
      { name: "HTML", icons: faHtml5 },
      { name: "CSS", icons: faCss3 },
      { name: "JS", icons: faSquareJs },
    ],
    sourceCodeLink: null,
    projectLink: "https://www.marakisoft.com/home",
  },
  {
    id: "MESS",
    images: [mess1, mess2],
    projectName: "Messaging API",
    projectYear: "2020",
    description: `This project has significantly improved communication within the Marki ERP system. By developing a versatile messaging API, users can seamlessly receive crucial notifications through various channels such as email, Telegram, Slack, or SMS. This integration ensures that important updates regarding orders, payments, or inventory are promptly delivered to users wherever they are. This enhancement simplifies communication processes, making it easier for users to stay informed and connected with the system. Overall, this project has strengthened Marki ERP by providing a reliable and efficient means of communication for its users.`,
    projImpact: `The messaging API integration in Marki ERP has improved communication, ensuring users receive timely notifications via preferred channels like email, Telegram, Slack, or SMS. This has led to faster responses, better decisions, and increased productivity. With critical information readily available, operations run smoother and teamwork is better. Overall, the messaging API has transformed communication in Marki ERP, making work easier and more successful.`,
    projSkills: [
      { name: "JS", icons: faSquareJs },
      { name: "Node", icons: faNode },
    ],
    sourceCodeLink: "https://github.com/Dagime-Teshome/messagingAPI",
    projectLink: null,
  },
  {
    id: "PORT",
    images: [Portfolio, Portfolio2, Portfolio3, Portfolio4, Portfolio5],
    projectName: "Portfolio Site",
    projectYear: "2020",
    description: `This project serves as a showcase for my skills and the projects I've been involved in. It's a platform where you can explore my work and see the range of projects I've worked on. From web development to software projects, this website is a reflection of my expertise and dedication to creating meaningful solutions. `,
    projImpact: ` By showcasing my skills and projects on this portfolio website, I aim to increase my exposure and access better career opportunities. This platform serves as a window into my capabilities, allowing potential employers or collaborators to gain insights into my expertise and the value I can bring to their projects or teams. Through this increased visibility, I hope to connect with like-minded professionals, explore new career avenues, and ultimately advance my professional journey.`,
    projSkills: [
      { name: "React", icons: faReact },
      { name: "Tailwind", icons: faCss3 },
      { name: "JS", icons: faSquareJs },
    ],
    sourceCodeLink: "https://github.com/Dagime-Teshome/portfolio-site",
    projectLink: "https://dagime.dev",
  },
];
