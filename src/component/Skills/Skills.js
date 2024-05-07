import React from "react";
import './Skills.css'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import useWindowDimensions from '../../HelperFunctions'

//image logo imports go here
import html5 from "../../skill_icons/html5.png";

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
      <Button className="rounded-circle" id="left-btn" onClick={slideLeft}>left</Button>
      <Button className="rounded-circle" id="right-btn" onClick={slideRight}>right</Button>
    </div>
  );
}

const SkillCard = ({props}) => {
  const { skill, description, logo } = props;

  const cardStyle = {
    position: 'relative',
    width: '425px',
    height: '470px',
    margin: 'auto 15px'
  }
  const cardImageStyle = {
    width: '20%',
    height: 'auto'
  }

  return (
    <Card className="skill-card" style={cardStyle}>
      <Card.Img variant="top" src={logo} style={cardImageStyle} ></Card.Img>
      <Card.Body>
        <Card.Title>{skill}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

const Skills = () => {
  const { height, width } = useWindowDimensions();
  const skillsData = [
    {skill: 'HTML & CSS', description: 'temporry words', logo: html5},
    {skill: 'Javascript', description: 'temporry words'},
    {skill: 'React JS', description: 'temporry words'},
    {skill: 'Python', description: 'temporry words'},
    {skill: 'Flask', description: 'temporry words'},
    {skill: 'SQL', description: 'temporry words'}
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
      <h1 className="page-title">/ MY SKILLS</h1>
      <p>My list of techincal skills</p>
      <ScrollButtons />

      <table className="skills-table">
        <tr>{skillsMap}</tr>
      </table>
    </div>
  );
}

export default Skills;