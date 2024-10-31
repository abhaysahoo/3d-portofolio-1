import { meta, shopify, starbucks, tesla, amazon, answersai, siemens, olcademy, twitter } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    java,   
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    dalle,
    ticket,
    stars,
    tshirt,
    book,
    anime,
    quiz,
    typescript,
    cplusplus,
    ai
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Framer Motion",
        type: "Animation",
    },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: cplusplus,
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    }
];

export const experiences = [
    {
        title: "Software Development Engineer",
        company_name: "AnswersAi.com",
        icon: answersai,
        iconBg: "#FFFFFF",
        date: "Oct 2024 - Present",
        points: [
            "Working on B2B 'ProfPilot' project which is like a Google Classroom with fined-tuned AI assistants & rich features",
        ],
    },
    {
        title: "Software Development Engineer",
        company_name: "Amazon.com",
        icon: amazon,
        iconBg: "#F1F5F9",
        date: "July 2022 - Dec 2022",
        points: [
            "Designed low-level functionality of a Microservice and developed it end-to-end with Java, Typescript, Node, AWS Lambda, AWS API gateway, etc",
            "Authored detailed Technical Documentation for a Microservice, improving developer onboarding time from 10 days to 7 days",
            "Accelerated team productivity by driving down average code review time from 5 days to 3 days through consistent initiatives"
        ],
    },
    {
        title: "Software Development Engineer Intern",
        company_name: "Amazon.com",
        icon: amazon,
        iconBg: "#F1F5F9",
        date: "Jan 2022 - Jun 2022",
        points: [
            "Migrated critical Microservices from on-premise prod servers to AWS, achieving project completion one month ahead of deadline",
            "Delivered a Proof of Concept for automating Integration Tests in the Product Development Pipeline",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Siemens Digital Industries Software",
        icon: siemens,
        iconBg: "#F0FDFA",
        date: "Jun 2021 - Nov 2021",
        points: [
            "Wrote Verilog and System Verilog test cases for API testing, identifying 6 functional bugs",
            "Implemented code modifications in existing C++ files, helping the team in resolving 3 critical bugs",
        ],
    },
    {
        title: "Frontend Developer Intern",
        company_name: "Olcademy",
        icon: olcademy,
        iconBg: "#fff",
        date: "Apr 2020 - June 2020",
        points: [
            "Coded interactive & responsive web pages",
            "Resolved frontend UI bugs",
        ],
    },
];

export const socialLinks = [
    // {
    //     name: 'X',
    //     iconUrl: twitter,
    //     link: 'https://twitter.com/icodefrfun',
    // },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/abhaysahoo',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/abhay-sahoo/',
    }
];

export const projects = [
    {
        iconUrl: ai,
        theme: 'btn-back-black',
        name: 'CheckMate',
        description: 'Real-time AI-Powered Plagiarism Detection for academic integrity and originality',
        github: 'https://github.com/abhaysahoo/Abhay-Sahoo-AIPlagiarismDetector',
        weblink: 'https://ai-checkmate.vercel.app/',
    },
    {
        iconUrl: stars,
        theme: 'btn-back-blue',
        name: 'Metaverse',
        description: 'A modern landing page with eye-catching animations using Framer Motion.',
        github: 'https://github.com/abhaysahoo/metaverse',
        weblink: 'https://metaverse-absahoo.vercel.app/',
    },
    {
        iconUrl: ticket,
        theme: 'btn-back-orange',
        name: 'Evently',
        description: 'A Next.js application to create, manage or book an event along with the option to collect payments.',
        github: 'https://github.com/abhaysahoo/evently',
        weblink: 'https://evently-absahoo.vercel.app/',
    },
    {
        iconUrl: dalle,
        theme: 'btn-back-black',
        name: 'Dalle Clone',
        description: 'Developed a clone of Dalle image generation application using MERN stack along with Tailwind CSS and Cloudinary to store the images in the cloud.',
        github: 'https://github.com/abhaysahoo/dalle-clone',
        weblink: 'https://dalle-delta-clone.netlify.app/',
    },
    {
        iconUrl: tshirt,
        theme: 'btn-back-moss',
        name: 'AI-Powered 3D T-shirt Design',
        description: 'Load your image on the 3D t-shirt or ask AI to generate a logo or a pattern to apply on the 3D t-shirt model. Once you are happy, download the 3D t-shirt model image.',
        github: 'https://github.com/abhaysahoo/ywt',
        weblink: 'https://ywt-absahoo.netlify.app/',
    },
    {
        iconUrl: book,
        theme: 'btn-back-blue',
        name: 'Book Store',
        description: 'A full-stack MERN application where user can create, update & delete books.',
        github: 'https://github.com/abhaysahoo/bookstore-MERN-stack',
        weblink: 'https://bookstore-absahoo.netlify.app/',
    },
    {
        iconUrl: anime,
        theme: 'btn-back-blood-red',
        name: 'Anime Vault',
        description: 'A Next.js application with modern server actions feature, it renders a list of most popular animes with eye-catching animation.',
        github: 'https://github.com/abhaysahoo/anime-vault',
        weblink: 'https://anime-vault-absahoo.netlify.app/',
    },
    {
        iconUrl: quiz,
        theme: 'btn-back-pink',
        name: 'Quizzical Game',
        description: 'A React quiz app, powered by Open Trivia DB APIs, for an interactive and knowledge-driven user experience.',
        github: 'https://github.com/abhaysahoo/quizzical--solo-project',
        weblink: 'https://quizzical-game-abhay.netlify.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Article Summarizer',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        github: 'https://github.com/abhaysahoo/ai-summarizer',
        weblink: 'https://article-summarizer-abhay.netlify.app/',
    }
];