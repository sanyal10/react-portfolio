import img1  from "./src_files/img_1.png";
import img2  from "./src_files/img2.jpg";
import img3  from "./src_files/img3.jpg";
import img4  from "./src_files/img4.jpg";
import img5  from "./src_files/img5.jpg";
import img6  from "./src_files/img6.png";
import img7  from "./src_files/img7.png";
import img8  from "./src_files/img8.png";
import img9  from "./src_files/img_9.jpg";


const logotext = "sanyal_10";

const meta = {
    title: "Debajyoti Sanyal",
    description: "Front-end Developer",
};

const introdata = {
    title: "I’m Debajyoti Sanyal",
    animated: {
        first: "I code cool websites",
        second: "I develop Front-end of a web applications",
        third: "Love to build Computer Vision applications",
        fourth:"Love to build Computer Vision applications"
    },
    description: "Great to see you here. Check out my projects in the portfolio section.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "Introduction",
    aboutme: "Hey !! this is Debajyoti, a recent engineering graduate. I am a Software Developer with a diverse range of interests in technology, this includes web development, machine learning, and IoT technologies. I have  two years of experience in frontend development. I have expertise in Python and JavaScript, and I’ve contributed to several open-source projects. My portfolio showcases my ability to build scalable web applications, and I pride myself on writing clean, efficient code.My eagerness to learn and my versatile skillset demonstrate my ability to adapt to new challenges and my desire to expand my knowledge and expertise in various areas of technology.",
};
const worktimeline = [{
        jobtitle: "Front-end Developer Intern",
        where: "Foodlabs",
        date: "2023",
    },
    {
        jobtitle: "Machine learning Intern",
        where: "Cognizant",
        date: "2023",
    },
    {
        jobtitle: "Open-source-Contributer",
        where: "Face-x (GSSOC)",
        date: "2022",
    },

];

const skills = [
    {
        name: "HTML",
        value: 80,
    },
    {
        name: "CSS",
        value: 80,
    },
    {
        name: "Python",
        value: 90,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React.Js",
        value: 60,
    },
    {
        name: "Node.js",
        value: 50,
    },
    {
        name: "MySql",
        value: 85,
    },
    {
        name: "AWS Cloud",
        value: 60,
    },
];

const services = [
    {
        title: "Frontend-Development",
        description: "I build exceptional and accesible digital web experiences with stunning visual appeal and responsive.",
    },
];

const dataportfolio = [{
        img: img1,
        description: "Landing page for Trekking Agency",
        link: "https://github.com/sanyal10/Loss-Angeles-Mountain",
    },
    {
        img: img2,
        description: "Space Invader game using HTML, CSS and Javascript",
        link: "https://github.com/sanyal10/Space-Invader-Game",
    },
    {
        img: img3,
        description: "Tic Tac Toe game using HTML, CSS and Javascript.",
        link: "https://github.com/sanyal10/TIC-TAC-TOE-Game-",
    },
    {
        img: img4,
        description: "Calculator App using React.js ",
        link: "https://github.com/sanyal10/Simple-Calculator",
    },
    {
        img: img5,
        description: "Air Bnb landing page using React.js",
        link: "https://github.com/sanyal10/AirBnb-clone-",
    },
    {
        img:img6,
        description: "Foodlabs: A food ordering landing page",
        link: "https://github.com/sanyal10/Foodlabs",
    },

    {
        img: img7,
        description: "Attendance registration application",
        link: "https://github.com/sanyal10/Attendance-registration-",
    },
    {
        img: img8,
        description: "Background Generator ",
        link: "https://github.com/sanyal10/Bg-generator",
    },
    {
        img: img9,
        description: "Digital-Inspection-System",
        link: "https://github.com/sanyal10/Digital-Inspection-System-using-Yolo-v8",
    }
];

const contactConfig = {
    YOUR_EMAIL: "sanyaldebajyoti2003@gmail.com",
    YOUR_FONE: "",
    description: "Fill this form to send message directly to me.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/sanyal10",
    linkedin: "https://www.linkedin.com/in/debajyoti-sanyal-21023021a/",
    twitter: "https://twitter.com/_pegasus_03",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};