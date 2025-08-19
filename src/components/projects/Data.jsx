import Project1 from "../../assets/project1.webp";
import Project2 from "../../assets/project2.png";
import Project3 from "../../assets/project3.png";
import Project4 from "../../assets/project4.png";
import Project5 from "../../assets/project5.png";
export const projectsData = [
    {
        id: 1,
        image: Project1,
        title: "AlgoVision",
        category: "A",
        description: "Interactive web app that visualizes algorithms step-by-step.",
        link: "https://algovision-five.vercel.app/", // Add your specific link here
        technologies: ["React", "JavaScript", "CSS", "DSA"]
    },
    {
        id: 2,
        image: Project2,
        title: "knowledgePlus",
        category: "B",
        description: "Online learning platform with expert-led courses.",
        link: "https://github.com/pramit-sr/lms", // Add your specific link here
        technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
        id: 3,
        image: Project3,
        title: "TaskVault",
        category: "C",
        description: "Personalized task tracker for managing daily to-dos.",
        link: "https://todo-app-rho-murex-36.vercel.app/", // Add your specific link here
        technologies: ["React", "CSS", "JavaScript", "LocalStorage"]
    },
    {
        id: 4,
        image: Project4,
        title: "Coupon Distribution",
        category: "D",
        description: "Web app that distributes coupons in round-robin manner.",
        link: "https://round-robin-coupons-frontend.vercel.app/", // Add your specific link here
        technologies: ["React", "Node.js", "Express", "MongoDB"]
    },
    {
        id: 5,
        image: Project5,
        title: "Syfe Savings Planner",
        category: "E",
        description: "Shows savings growth over time with easy charts, custom inputs, and a feature to save progress.",
        link: "https://syfe-savings-planner-nine.vercel.app/", // Add your specific link here
        technologies: ["React","JavcScript","LocalStorage", "Vercel", "TailwindCSS"]
    },
];

export const projectsNav = [
    {
        name: "All",
    },
    {
        name: "A",
    },
    {
        name: "B",
    },
    {
        name: "C",
    },
];
