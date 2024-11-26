import React from 'react';
import Heading from './Heading';
// Replace with the correct path to your Card component
import Card from './Card'; 
import Image from 'next/image';

const data = [
    {
        id: 0,
        title: "Multiplepages-foodwebsite",
        desc:"Developed a multi-page food website showcasing menus, recipes, and services with an appealing design.",
        img: "/img01.jpg",  // Updated path
        tags: ["React", "Node", "CSS", "Typescript"],
      },
      {
        id: 1,
        title: "Ecommerce-website-next-js",
        desc:"Built a dynamic eCommerce website with Next.js for fast performance, scalability, and seamless user experience.",
        img: "/img02.jpg",  
        tags: ["React", "Node", "CSS", "Typescript"],
      },
      {
        id: 3,
        title: "Dynamic-resumebuilder",
        desc:"Created a dynamic resume builder to generate personalized, interactive resumes effortlessly.",
        img: "/img03.jpg",  // Updated path
        tags: ["React", "Node", "CSS", "Typescript"],
      },
      {
        id: 4,
        title: "Tic-tac-toe-game-using-html-css",
        desc: "Developed a Tic-Tac-Toe game using HTML and CSS for an interactive and responsive user experience.",
        img: "/img04.jpg",  // Updated path
        tags: ["React", "Node", "CSS", "Typescript"],
      },
      {
        id: 5,
        title: "Google-chrome-extension",
        desc: "I build custom Chrome extensions to enhance productivity, streamline workflows, and improve functionality.",
        img: "/img05.jpg",  // Updated path
        tags: ["React", "Node", "CSS", "Typescript"],
      },
      {
        id: 6,
        title: "Firebase-auth-signup",
        desc: "Integrated Firebase Authentication for secure, efficient, and scalable user sign-up functionality.",
        img: "/img06.jpg",  // Updated path
        tags: ["React", "Node", "CSS", "Typescript"],
      },
];

const Projects = () => {
  return (
    <div id="projects" className="container pt-32 ">
      <Heading title="My Projects" />
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title} 
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
