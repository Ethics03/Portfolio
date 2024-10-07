import project1 from '../assets/Tody.jpg';
import project2 from '../assets/Currency.jpg'
 import project3 from '../assets/imdb.jpg'
 export const HERO_CONTENT = "I am a 2nd-Year CSE student from CMRIT Bangalore. I am a passionate full stack developer and love to make scalable web applications. I have made multiple mini-projects and also am working on big ones that help the society and solve real-world problems."

 export const ABOUT_CONTENT = 'I am a dedicated full stack developer and i have a knack for making user-friendly web applications and. I have worked with variety of technologies, including React.js,Golang,Node.js,PostgreSQL and MySQL. I started coding when i was 13 years old.I started my journey to web development through my interest in making creative designs and also cybersecurity. I started with Competitive Programming as my journey into coding. I got inspired by multiple people to make up my mindset as a coder. I love to learn new tech-stacks and implement them to make efficient applications that solve real-world problems. Outside of coding,I enjoy working out , meditatation playing Chess and contributing to Open-source Projects.'

 export const PROJECTS= [
    {

        title:"IMDb Clone",
        image: project3,
        description:
                "A Movie Database Clone using TypeScript, Nextjs and TMDB API.",
        technologies: ["TypeScript","TailwindCSS","React","Nextjs"],
        links: "https://imdb-clone-liard-nu.vercel.app/",
    },

    {

        title: "TODY",
        image: project1,
        description: 
            "A TodoList App for putting in a note you want to remember.I made this project for learning Sidebar-Implementation",
        technologies: ["HTML","TailwindCSS","React"],
        links: "https://todo-list-1tmy.vercel.app/",
    },
    {
        title:"Currency Converter",
        image: project2,
        description:
                "An app that converts currency from one to another. Its user-friendly and was made for learning purposes.",
        technologies: ["HTML","TailwindCSS","React"],
        links: 'https://currency-converter-cyan-omega.vercel.app/',

        
    }
 ]

 export const CONTACT = {
    address: "CMRIT Bangalore, AECS Layout ,560037",
    phoneNo: "+91 8957993738",
    email: "honey032004@gmail.com",
 }

 export default CONTACT
