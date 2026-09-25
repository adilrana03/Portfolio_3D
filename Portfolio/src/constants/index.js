import javascript from "../assets/tech/javascript.png";
import typescript from "../assets/tech/typescript.png";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import reactjs from "../assets/tech/reactjs.png";
import redux from "../assets/tech/redux.png";
import tailwind from "../assets/tech/tailwind.png";
import nodejs from "../assets/tech/nodejs.png";
import mongodb from "../assets/tech/mongodb.png";
import git from "../assets/tech/git.png";
import threejs from "../assets/tech/threejs.svg";

import cicc from "../assets/opt/cicc.jpg";
import hamster from "../assets/opt/hamster.jpg";
import growwin from "../assets/opt/growwin.jpg";
import libertum from "../assets/opt/libertum.jpg";
import carShowcase from "../assets/opt/car.jpg";
import dashboard from "../assets/opt/dashboard.jpg";
import expense from "../assets/opt/expense.jpg";
import zoomcar from "../assets/opt/zoomcar.jpg";
import ajio from "../assets/opt/ajio.jpg";
import bigbasket from "../assets/opt/bigbasket.jpg";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const services = [
  {
    title: "Frontend",
    copy: "React and Next.js interfaces that stay clear on a phone and on a wide screen.",
  },
  {
    title: "Backend",
    copy: "Node, Express, and MongoDB for the parts of a product people never see.",
  },
  {
    title: "Full stack",
    copy: "From the first layout through to a live URL, kept in one line of work.",
  },
];

export const technologies = [
  { name: "Next.js" },
  { name: "React", icon: reactjs },
  { name: "TypeScript", icon: typescript },
  { name: "JavaScript", icon: javascript },
  { name: "Node.js", icon: nodejs },
  { name: "Express" },
  { name: "MongoDB", icon: mongodb },
  { name: "Redux", icon: redux },
  { name: "Tailwind", icon: tailwind },
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "Git", icon: git },
  { name: "Three.js", icon: threejs },
];

export const experiences = [
  {
    title: "Senior Developer",
    company_name: "Tron Aqua India Pvt Ltd",
    date: "Oct 2023 — Present",
    points: [
      "Developing and maintaining web applications using React.js, Next js, Node js, Express and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelancer",
    company_name: "",
    date: "Jan 2023 — Oct 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Senior Developer",
    company_name: "Masai School",
    date: "Jan 2022 — Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Helping students improve their coding skills and resolve their doubts.",
    ],
  },
];

export const projects = [
  {
    name: "CICC",
    description:
      "A mint-and-burn application where people request to become a developer, or invest in pools created by developers.",
    tags: ["Next.js", "Node.js", "Express", "Tailwind"],
    image: cicc,
    source_code_link: "https://github.com/applytorque/ciccapp",
    live_demo_link: "https://cicc.app",
  },
  {
    name: "Hamster",
    description:
      "Swap crypto, farm rewards, and move funds on the Hamster platform.",
    tags: ["Next.js", "Tailwind"],
    image: hamster,
    source_code_link: "https://github.com/adilrana03/hamster",
    live_demo_link: "https://hamster-amber.vercel.app",
  },
  {
    name: "Growwin Capital",
    description:
      "An MLM app where people invest in plans, refer friends and family, and earn a percentage as the team grows.",
    tags: ["React", "Node.js", "Express", "Tailwind"],
    image: growwin,
    source_code_link: "https://github.com/adilrana03/growwin",
    live_demo_link: "https://site.growwincapital.com",
  },
  {
    name: "Libertum",
    description: "A property investing site where people browse and invest in real estate.",
    tags: ["React", "Node.js", "Express", "Tailwind"],
    image: libertum,
    source_code_link: "https://github.com/adilrana03/Libertum",
    live_demo_link: "https://libertum.io",
  },
  {
    name: "Car Showcase",
    description:
      "A catalog for exploring car models, photos, and specifications in one place.",
    tags: ["Next.js", "RapidAPI", "Tailwind"],
    image: carShowcase,
    source_code_link: "https://github.com/adilrana03/car_showcase",
    live_demo_link: "https://car-showcase-jd70yh72o-adilrana03.vercel.app/",
  },
  {
    name: "Admin Dashboard",
    description:
      "A business admin for ecommerce, calendar, kanban, employees, customers, and orders, with search, sort, edit, and delete.",
    tags: ["React", "Syncfusion", "Tailwind"],
    image: dashboard,
    source_code_link: "https://github.com/adilrana03/admin_dashboard",
    live_demo_link: "https://adilrana-admin-dashboard.netlify.app/",
  },
  {
    name: "Expense Tracker",
    description:
      "Track income and expenses by voice with Speechly, and read the totals in charts.",
    tags: ["React", "Speechly", "Chart.js", "Material UI"],
    image: expense,
    source_code_link: "https://github.com/adilrana03/expense_tracker/",
    live_demo_link: "https://adilrana03-expense-tracker.netlify.app/",
  },
  {
    name: "Zoom Car",
    description:
      "A car-sharing interface where people rent vehicles by the hour, day, week, or month.",
    tags: ["React", "JavaScript", "Redux"],
    image: zoomcar,
    source_code_link: "https://github.com/abhishekkhanna2710/ZoomCar",
    live_demo_link: "https://zoomcarpro.netlify.app/",
  },
  {
    name: "Ajio",
    description:
      "A fashion shop with login, filters, a cart, and checkout to a home address.",
    tags: ["JavaScript", "JSON Server", "Chakra UI"],
    image: ajio,
    source_code_link: "https://github.com/adilrana03/Ajio_clone_",
    live_demo_link: "https://ajio-clone-masaiproject.netlify.app/",
  },
  {
    name: "Big Basket",
    description:
      "A grocery shop for browsing staples and cosmetics, then paying by card or cash.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: bigbasket,
    source_code_link: "https://github.com/adilrana03/BigBasket_Clone",
    live_demo_link: "https://bigbasket-cloned-masai.netlify.app/",
  },
];

export const testimonials = [];
