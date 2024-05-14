import React from "react";
import "./Projects.css"

import useWindowDimensions from "../../HelperFunctions";

const ProjectsTitle = ({props}) => {
  const gitHubProfileLink = "https://github.com/j0rdanbruce?tab=repositories";

  return (
    <div className="projects-title">
      <p className="projects-subtitle"> <span style={{color: 'rgb(0,122,255)'}}>/ </span>MY PROJECTS</p>
      <h2 className="projects-header">Take a look at some of my latest projects</h2>
      <a className="projects-subheader" href={gitHubProfileLink}>Checkout my GitHub Repo<span className="arrow-link">&#8594;</span></a>
    </div>
  );
}

const ProjectCard = ({props}) => {
  const { cardNumber, title, navLink, description, techStackArray } = props;

  const techSkills = techStackArray.map((skill) => {
    return(
      <p className="tech-skill">{skill}</p>
    );
  });

  function handleMouseHover() {
    const projectCards = document.getElementsByClassName("project-card");

    for (const card in projectCards) {
      card.style.height = '700px';
    }
  }

  return (
    <div className="project-card" id={cardNumber}>
      <a href={navLink}>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="tech-skill-container">
          {techSkills}
        </div>
      </a>
    </div>
  );
}

const Projects = () => {

  const { height, width } = useWindowDimensions();
  const projectsStyle = {
    position: 'absolute',
    height: height,
    width: width,
    backgroundColor: 'rgb(12,15,26)'
  }

  const projectData = [
    {cardNumber: "card-1",
    title: "Movie Ranker",
     navLink: "https://movieranker-7upc.onrender.com/",
     description: "A entertainment media app that allows movie lovers to rank his/her favorite movies and communicate with other movie lovers via forums.",
     techStackArray: ["Python", "Flask", "MySQL", "JavaScript", "HTML", "CSS"]
    },
    {cardNumber: "card-2",
    title: "React Weather App",
    navLink: "https://prod.d22vrjavkdl5lk.amplifyapp.com/!%5Bimage%5D(https://github.com/j0rdanbruce/React-Weather-App/assets/95323815/7816a851-17ac-42fd-9aa6-30223cac5e25)",
    description: "A weather forecast app designed to display weather data based on geographical location inputs.",
    techStackArray: ["React JS", "JavaScript", "HTML", "CSS"]
    }
  ];

  return (
    <div style={projectsStyle}>
       <ProjectsTitle />
       <div className="project-container">
        {projectData.map((project) => {
          return(<ProjectCard props={project} />);
        })}
       </div>
       
    </div>
  );
}

export default Projects;