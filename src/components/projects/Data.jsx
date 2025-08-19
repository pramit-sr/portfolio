import Project1 from "../../assets/project1.webp";
import Project2 from "../../assets/project2.png";
import Project3 from "../../assets/project3.png";
import Project4 from "../../assets/project4.png";
export const projectsData = [
    {
        id: 1,
        image: Project1,
        title: "AlgoVision",
        category: "A",
        description: "AlgoVision is an interactive web app that visualizes and explains algorithms step-by-step.",
        link: "https://algovision-five.vercel.app/", // Add your specific link here
        technologies: ["React", "JavaScript", "CSS", "DSA", "Algorithms", "Vercel"]
    },
    {
        id: 2,
        image: Project2,
        title: "knowledgePlus",
        category: "B",
        description: "knowledgePlus is an online learning platform with expert-led courses across diverse subjects.",
        link: "https://github.com/pramit-sr/lms", // Add your specific link here
        technologies: ["React", "Node.js", "MongoDB", "Express", "CSS", "JavaScript"]
    },
    {
        id: 3,
        image: Project3,
        title: "TaskVault",
        category: "C",
        description: "TaskVault is a personalized task tracker for efficiently managing daily to-dos.",
        link: "https://todo-app-rho-murex-36.vercel.app/", // Add your specific link here
        technologies: ["React", "CSS", "JavaScript", "LocalStorage", "Vercel"]
    },
    {
        id: 4,
        image: Project4,
        title: "Coupon Distribution",
        category: "D",
        description: "A web app that distributes coupons to users in a round-robin manner, preventing abuse.",
        link: "https://round-robin-coupons-frontend.vercel.app/", // Add your specific link here
        technologies: ["React", "Node.js", "Express", "MongoDB", "Vercel", "TailwindCSS"]
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
