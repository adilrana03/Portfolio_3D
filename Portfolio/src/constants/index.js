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
    livedemo,
    car_showcase,
    libertum, cicc, Hamster, growwin
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

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const experiences = [
    {
        title: "Senior Developer",
        company_name: "Tron Aqua India Pvt Ltd",
        icon: starbucks,
        iconBg: "#383E56",
        date: "Oct 23 - Present",
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
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Oct 2023",
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
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Helping Students to improve their coding skills and resolve their doubts"
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];





const projects = [
    {
        name: "CICC ",
        description:
            "This is a Mint & Burn application that allows users to request to become a developer or Invest in Pools created By Developers.",
        tags: [
            {
                name: "NEXTJS",
                color: "blue-text-gradient",
            },
            {
                name: "Node js",
                color: "green-text-gradient",
            },
            {
                name: "Express",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind css",
                color: "pink-text-gradient",
            },
        ],
        image: cicc,
        source_code_link: "https://github.com/applytorque/ciccapp",
        live_demo_link: "https://cicc.app",
    },
    {
        name: "Hamster",
        description:
            "Hamster is an app where user can swap cryptos, farm rewards, and embrace financial freedom on cutting-edge Hamster platform",
        tags: [
            {
                name: "NEXTJS",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind css",
                color: "pink-text-gradient",
            },
        ],
        image: Hamster,
        source_code_link: "https://github.com/adilrana03/hamster",
        live_demo_link: "hamster-amber.vercel.app",
    },

    {
        name: "Growwin Capital",
        description:
            "This is a Multi Level Marketing (MLM) App Where users can Invests in Various Plans. Users can also refer to  friends and family member and build a team that helps in earning some persentage from them",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Node js",
                color: "green-text-gradient",
            },
            {
                name: "Express",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind css",
                color: "pink-text-gradient",
            },
        ],
        image: growwin,
        source_code_link: "https://github.com/adilrana03/growwin",
        live_demo_link: "https://site.growwincapital.com",
    },
    {
        name: "Libertum",
        description:
            "This is a Property Investing website where user can invests in properties",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Node js",
                color: "green-text-gradient",
            },
            {
                name: "Express",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind css",
                color: "pink-text-gradient",
            },
        ],
        image: libertum,
        source_code_link: "https://github.com/adilrana03/Libertum",
        live_demo_link: "https://libertum.io",
    },
    {
        name: "Car Showcase",
        description:
            "This is a web application that allows users to explore a collection of cars along with their details. Whether you're a car enthusiast, a potential buyer, or just curious about different car models, this project is designed to provide you with a visually appealing and user-friendly platform to discover various cars and their specifications.",
        tags: [
            {
                name: "NEXTJS",
                color: "blue-text-gradient",
            },
            {
                name: "rapid api",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: car_showcase,
        source_code_link: "https://github.com/adilrana03/car_showcase",
        live_demo_link: "https://car-showcase-jd70yh72o-adilrana03.vercel.app/",
    },

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

export { services, technologies, experiences, projects, testimonials };
