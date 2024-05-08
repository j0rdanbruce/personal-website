import React from "react";
import './Skills.css'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import useWindowDimensions from '../../HelperFunctions'

//image logo imports go here
import html5 from "../../skill_icons/html5.png";
import aws from "../../skill_icons/aws.png";
import bootstrap from "../../skill_icons/bootstrap.png";
import c from "../../skill_icons/c.png";
import flask from "../../skill_icons/flask.png";
import java from "../../skill_icons/java.png";
import js from "../../skill_icons/js.png";
import react from "../../skill_icons/react.png";
import sql from "../../skill_icons/sql.png";
import python from "../../skill_icons/python.png";

const PageTitle = () => {

  return (
    <div className="page-title">
      <p className="skills-subtitle"> <span style={{color: 'rgb(0,122,255)'}}>/ </span>MY SKILLS</p>
      <div className="bottom-container">
        <h2 className="skills-header">Programming Technologies</h2>
        <ScrollButtons />
      </div>
    </div>
  );
}

const ScrollButtons = () => {

  /**
   * Slides the skill cards to the RIGHT.
   * Gets the translate attribute value. removes the '%' measurement unit, and then adds 100.
   * 
   * @param None
   * @returns None
   */
  function slideRight() {
    const skillCards = document.getElementsByClassName("skill-card");

    for (const skillCard of skillCards) {
      let translateX = skillCard.style.translate;
      translateX = Number(translateX.substring(0, translateX.length - 1));
      translateX += -130;
      skillCard.style.translate = translateX + '%';
    }
  }

  /**
   * Slides the skill cards to the LEFT.
   * Gets the translate attribute value. removes the '%' measurement unit, and then adds 100.
   * 
   * @param None
   * @returns None
   */
  function slideLeft() {
    const skillCards = document.getElementsByClassName("skill-card");

    for (const skillCard of skillCards) {
      let translateX = skillCard.style.translate;
      translateX = Number(translateX.substring(0, translateX.length - 1));
      translateX += 130;
      skillCard.style.translate = translateX + '%';
    }
  }

  return (
    <div className="button-container">
      <Button className="rounded-circle" id="left-btn" onClick={slideLeft}>&#8592;</Button>
      <Button className="rounded-circle" id="right-btn" onClick={slideRight}>&#8594;</Button>
    </div>
  );
}

const SkillCard = ({props}) => {
  const { skill, description, logo } = props;

  const cardImageStyle = {
    width: '20%',
    height: 'auto'
  }

  return (
    <Card className="skill-card">
      <Card.Img variant="top" src={logo} style={cardImageStyle} ></Card.Img>
      <Card.Body>
        <Card.Title className="skill-card-title">{skill}</Card.Title>
        <Card.Text className="skill-card-description">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

const Skills = () => {

  const { height, width } = useWindowDimensions();
  const skillsData = [
    {skill: 'HTML & CSS', description: 'Industry standard markup language for documents displayed in a web browser.', logo: html5},
    {skill: 'JavaScript', description: 'Programming language typically used alongside HTML and CSS on the client side for web appplications.', logo: js},
    {skill: 'React JS', description: 'Popular frontend JavaScript library used to develop mobile and web applications.', logo: react},
    {skill: 'React Bootstrap', description: 'Dynamic frontend framework that combines the power of React with the creativity of Bootstrap (CSS framework).', logo: bootstrap},
    {skill: 'Flask', description: 'Microservice framework for Python that provides versatility for server-side functionality.', logo: flask},
    {skill: 'Python', description: 'High-level programming language known for usability in software applications, cybersecuirty, etc.', logo: python},
    {skill: 'Java', description: 'A programming language used widely for object oriented programming and server-side functionality.', logo: java},
    {skill: 'C++', description: 'Programming language commonly used in developing embedded systems and operating systems.', logo: c},
    {skill: 'SQL', description: 'The standard language for relational database creation and manipulation.', logo: sql},
    {skill: 'Amazon Web Services', description: 'Cloud computing platform for web hosting and other cloud service needs.', logo: aws}
  ];
  const skillsMap = skillsData.map((skill) => {
    return (
      <td><SkillCard props={skill} /></td>
    );
  });

  const style = {
    backgroundColor: 'rgb(35,41,68)',
    height: height,
    width: width,
    marginTop: '-22px'
  }

  return (
    <div className="skills-page" style={style}>
      <PageTitle />
      <table className="skills-table" style={{width: 'auto'}}>
        <tr>{skillsMap}</tr>
      </table>
    </div>
  );
}

export default Skills;