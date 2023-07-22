import {
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
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
    Ajio,
    BB,
    Zoomcar,
    ET,
    AD,
    livedemo
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
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Full-Stack Developer",
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
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];



const projects = [
    {
        name: "Admin Dashboard",
        description:
            "Admin dashboard application designed to provide a user-friendly interface for managing various aspects of your business. It offers several pages with different functionalities, including Ecommerce, Calendar, Kanban, Color Picker, Employee Data, Customer Data, and Orders Data. it also supports features pagination, sorting, search, edit, and delete operations.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "syncfusion",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: AD,
        source_code_link: "https://github.com/adilrana03/admin_dashboard",
        live_demo_link: "https://adilrana-admin-dashboard.netlify.app/",
    },
    {
        name: "Expense Tracker",
        description:
            " The Expense Tracker with Speechly Integration is a web application designed to help users manage their finances by tracking their income and expenses. This application utilizes the Speechly API for voice recognition, allowing users to add income and expenses by speaking their inputs. It also provides charts to visualize the income and expenses data for better analysis.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "speechly",
                color: "green-text-gradient",
            },
            {
                name: "chart js",
                color: "pink-text-gradient",
            },
            {
                name: "Material Ui",
                color: "dark-green-text-gradient",
            },
        ],
        image: ET,
        source_code_link: "https://github.com/adilrana03/expense_tracker/",
        live_demo_link: "https://adilrana03-expense-tracker.netlify.app/"
    },
    {
        name: "Zoom Car",
        description:
            "India’s first personal mobility platform, with the introduction of car- sharing services in 2012. Zoomcar allows users to rent cars by the hour, day, week, or month.it is currently the market leader in the personal mobility space with over 10,000 cars in its fleet.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
            {
                name: "redux",
                color: "pink-text-gradient",
            },
        ],
        image: Zoomcar,
        source_code_link: "https://github.com/abhishekkhanna2710/ZoomCar",
        live_demo_link: "https://zoomcarpro.netlify.app//"
    },
    {
        name: "Ajio Clone",
        description:
            "An Online Shopping Website where users can login to the site add their favorite Fashion items to cart and User can also and filter his favorite Fashion item and pay payment and the items get delivered to their Residentail Home Address provided in the site",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "JSON Server",
                color: "green-text-gradient",
            },
            {
                name: "Chakra Ui",
                color: "pink-text-gradient",
            },
        ],
        image: Ajio,
        source_code_link: "https://github.com/adilrana03/Ajio_clone_",
        live_demo_link: "https://ajio-clone-masaiproject.netlify.app/"
    },
    {
        name: "Big Basket (Clone)",
        description: "This is an Grocery Ordering Web Application where the customers can login and go through all the items i.e veget staples, cosmetic so on & then they can add the items according to their cart and pay for the above items via card or cash, the items get delivered.Thank You for ordering ",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
        ],
        image: BB,
        source_code_link: "https://github.com/adilrana03/BigBasket_Clone",
        live_demo_link: "https://bigbasket-cloned-masai.netlify.app/"
    },
];

export { services, technologies, experiences, projects };
