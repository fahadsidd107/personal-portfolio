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
  carrent,
  jobit,
  tripguide,
  threejs,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project9,
  project10,
  project11,
  noimage,
  gitpro
} from "../assets";
import core from "../assets/company/core.png";
import binary from "../assets/company/binary.jpg";
import sidat from "../assets/company/sidat.png";
import ashtar from "../assets/company/ashtar.png";
import mse from "../assets/company/mse.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "cv",
    name: "Muhammad Fahad Siddiqui - Resume.pdf",
    title: "Download CV",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Mobile App Frontend Developer",
    icon: mobile,
  },
  {
    title: "Web App Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5 & CSS 3",
    icon: one,
  },
  {
    name: "Git",
    icon: two,
  },
  {
    name: "Firebase",
    icon: three,
  },
  {
    name: "TypeScript",
    icon: four,
  },
  {
    name: "React JS & Next JS",
    icon: five,
  },
  {
    name: "Node JS",
    icon: six,
  },
  {
    name: "Express JS & Nest JS",
    icon: seven,
  },
  {
    name: "Prisma & Type ORM",
    icon: eight,
  },
  {
    name: "MongoDB & PostgreSQL",
    icon: nine,
  },
  {
    name: "Tailwind CSS, Ant Design & Material UI ",
    icon: ten,
  },
  {
    name: "Docker & Kubernetes",
    icon: eleven,
  },
  {
    name: "Redis & Jenkins",
    icon: twelve,
  },
  {
    name: "Azure DevOps & AWS",
    icon: thirteen,
  },
];




const experiences = [
  {
    title: "Web Developer (Intern)",
    company_name: "Core 2 Plus",
    icon: core,
    iconBg: "#E6DEDD",
    date: "June 2021 - August 2021",
    points: [
      "Collaborated with professionals, designed and developed web projects.",
      "Optimized website, fixed bugs & excelled in communication & problem- solving",
      "Gained first hand experience of working in a software company.",
    ],
  },
  {
    title: "Binary Div",
    company_name: "Junior Software Engineer",
    icon: binary,
    iconBg: "#E6DEDD",
    date: "Sept 2022 - Jan 2023",
    points: [
      "Working with NestJS, React.js, TypeScript, Prisma, and PostgresSQL for web apps.",
      "Experienced in full software lifecycle, building scalable solutions with efficient APIs and user-friendly interfaces.",
      "Collaborates effectively, continuously learns, delivers high-quality solutions aligned with Binary Div's standards.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Sidat Technologies",
    icon: sidat,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - May 2023",
    points: [
      "Led MERN Stack development, designing, and maintaining web applications at Sidat Technologies.",
      "Expertise in React.js, Node.js, Express.js for responsive UIs and efficient APIs. ",
      "Utilized MongoDB for data storage, embracing agile methodologies for collaborative development. ",
    ],
  },
  {
    title: "MERN stack Developer",
    company_name: "Ashtar Global Solution",
    icon: ashtar,
    iconBg: "#E6DEDD",
    date: "June 2023 - August 2023",
    points: [
      "Transitioned MERN Stack Developer to Web3 Engineer, specializing in Solana blockchain ecosystem.",
      "Gaining proficiency in Solidity, Rust, and Web3.js, developing DApps and smart contracts on Solana. ",
      "Driving innovation in decentralized technologies, contributing to the company's Web3 initiatives",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "MSE Technology",
    icon: mse,
    iconBg: "#E6DEDD",
    date: "June 2023 - August 2023",
    points: [
      "Utilizing NestJS, TypeScript, TypeORM, PostgreSQL, and Azure for web app development",
      "Skilled in full-cycle development, crafting scalable solutions with efficient APIs and user-friendly interfaces. ",
      "Proficient in collaboration, learning, and delivering high-quality solutions meeting MSET's rigorous standards.",
    ],
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

const projects = [
  {
    name: "Explore More Projects on GitHub!",
    description:
    `To see more of my projects , Feel free to explore my GitHub repositories for a wider view of my projects and their code. Click the any of the icon on top right of this card to visit my GitHub profile and discover more! `,
    tags: [],
    image: gitpro,
    source_code_link: "https://github.com/fahadsidd107",
    deployed_link:"https://github.com/fahadsidd107"
  },
  {
    name: "Express node Node Login/SignUp",
    description:
    "Using Node.js and Express along with MongoDB, I've developed a secure user authentication system featuring sign-up and login functionalities. This powerful stack ensures data persistence, allowing users to securely create accounts, log in, and access personalized features. Leveraging MongoDB's flexibility, Express's routing, and Node.js's event-driven architecture, this system provides a robust and scalable solution for user authentication within web applications.",
    tags: [
      {
        name: "Node",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: project11,
    source_code_link: "https://github.com/fahadsidd107/fahadlogin",
    deployed_link:"https://github.com/fahadsidd107/fahadlogin"
  },
  {
    name: "React & Express Js CRUD",
    description:
    "Leveraging React for the front end and Express.js for the back end, I've implemented a robust CRUD (Create, Read, Update, Delete) system. This dynamic synergy allows seamless user interactions—creating new data entries, reading existing ones, updating information, and deleting entries. The combination of React's efficient component-based architecture and Express.js's powerful API handling ensures a smooth and intuitive user experience while maintaining data integrity and flexibility.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: project10,
    source_code_link: "https://github.com/fahadsidd107/react-todo-node",
    deployed_link:"https://github.com/fahadsidd107/react-todo-node"
  },
  {
    name: "Tic Tac Toe",
    description:
    "Explore a classic with my Tic Tac Toe game on my portfolio site. Crafted using HTML, CSS, and JavaScript, it delivers timeless entertainment and showcases sleek design. Engage in strategic battles, whether against a friend or the computer, highlighting my front-end skills in a fun, interactive way",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: project9,
    source_code_link: "https://github.com/fahadsidd107/Tic-Tac-Toe",
    deployed_link:"https://fahadsidd107.github.io/Tic-Tac-Toe/"
  },
  {
    name: "Quiz App",
    description:
    "The Quiz App, meticulously crafted with HTML, CSS, and JavaScript, offers an engaging platform for interactive quizzes. Its user-friendly interface allows for seamless navigation between questions, providing an enjoyable experience for quiz-takers. With dynamic elements and responsive design, this application enables the creation and completion of quizzes effortlessly. This project exemplifies the fusion of HTML, CSS, and JavaScript to create an engaging and educational tool, showcasing a versatile and accessible platform for conducting quizzes and enhancing learning experiences.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: noimage,
    source_code_link: "https://github.com/fahadsidd107/Quiz-Application",
    deployed_link:"https://fahadsidd107.github.io/Quiz-Application/"
  },
  {
    name: "To Do Application",
    description:
    "The Todo List Application, developed using HTML, CSS, and JavaScript, provides a seamless platform for organizing tasks. Its intuitive interface allows users to add, delete, and manage tasks efficiently. This application empowers users to create personalized to-do lists, enhancing productivity and task management. Through the harmonious integration of HTML, CSS, and JavaScript, this project showcases a practical and user-centric approach to organizing daily tasks, exemplifying a functional and accessible solution for task management needs.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "yellow-text-gradient",
      },
    ],
    image: noimage,
    source_code_link: "https://github.com/fahadsidd107/To-Do-Appplication",
    deployed_link:"https://fahadsidd107.github.io/To-Do-Appplication/"
  },
  {
    name: "Count Down Clock",
    description:
    "The Countdown Clock Project, created through HTML, CSS, and JavaScript, delivers an intuitive digital countdown timer. It allows users to set specific countdown durations and offers a clear visual representation of the remaining time. With a user-friendly interface, this project serves as a practical tool for various countdown needs, demonstrating the effective synergy of HTML, CSS, and JavaScript to produce a functional and easily configurable countdown solution.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "yellow-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/fahadsidd107/Assignment-14",
    deployed_link:"https://fahadsidd107.github.io/Assignment-14/"
  },
  {
    name: "Stop Watch",
    description:
    "The Stopwatch Project, developed using HTML, CSS, and JavaScript, is a user-friendly digital stopwatch accessible on the web. It offers precise time tracking in a straightforward interface, providing a practical solution for timing needs. This project highlights the integration of these web technologies to create a functional and easily accessible stopwatch tool.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "yellow-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/fahadsidd107/Assignment13",
    deployed_link:"https://fahadsidd107.github.io/Assignment13/"
  },
  {
    name: "Apple Landing Page",
    description:
    "The Apple Landing Page, built using HTML and CSS, presents Dawn's news material in an interactive online platform. Through its dynamic features and easy-to-navigate layout, it offers users an immersive way to stay updated with the latest news. This carefully designed page demonstrates Apple's dedication to presenting information in an attractive and easily accessible format.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/fahadsidd107/Assignment7",
    deployed_link:"https://www.apple.com"
  },
  {
    name: "Dawn News Landing Page",
    description:
    "The Dawn News Landing Page, constructed with HTML and CSS is an engaging web interface showcasing Dawn's news content. With dynamic elements and a user-friendly design, it provides visitors with an immersive experience while accessing the latest news updates. This meticulously crafted landing page reflects Dawn's commitment to delivering information in a visually appealing and accessible manner.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/fahadsidd107/Assignment6/tree/gh-pages",
    deployed_link:"https://fahadsidd107.github.io/Assignment6/"
  },
  {
    name: "Saylani Form",
    description:
    "Crafted using HTML and CSS, the Saylani Mass IT Training Form is an intuitive web page facilitating easy enrollment for aspiring candidates. With a clean and responsive layout, this form offers a seamless user experience while gathering crucial information. Tailored specifically for Saylani Mass IT Training, it reflects a commitment to accessible and efficient application procedures, enhancing the accessibility and reach of the training program.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/fahadsidd107/Assignment5",
    deployed_link:"https://fahadsidd107.github.io/Assignment5/"
  },
  {
    name: "AnchorMate",
    description:
      "AnchorSail is an HTML-based application crafted to showcase the practical implementation of anchor tags. With seamless navigation, users can explore linked sections within pages, experiencing the effortless movement facilitated by anchor tags. This interactive tool offers a hands-on understanding of anchor tag functionality within HTML, making it an ideal resource for beginners learning about web navigation.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/fahadsidd107/Assignment4",
    deployed_link:"https://fahadsidd107.github.io/Assignment4/"
  },
];



export { services, technologies, experiences, testimonials, projects,};
