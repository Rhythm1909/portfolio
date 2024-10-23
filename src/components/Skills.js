import React from 'react';
import './Skills.css';

function Skills() {
  const skills = ['DSA','C++','JavaScript', 'React', 'Node.js', 'CSS','ASP.NET Core'];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map(skill => (
          <div key={skill} className="skill">
            <p>{skill}</p>
            <div className="skill-bar">
              <div className={`bar ${skill.toLowerCase()}`}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
