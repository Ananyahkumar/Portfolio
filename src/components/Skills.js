import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    {
      category: 'Programming Languages',
      items: ['C++', 'Java', 'Python'],
    },
    {
      category: 'Web Development',
      items: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    },
    {
      category: 'Databases',
      items: ['MySQL', 'MongoDB'],
    },
    {
      category: 'Tools & Platforms',
      items: ['Git', 'GitHub', 'VS Code'],
    },
  ];

  return (
    <section className="skills" id="skills">
      <h2>My <span>Skills</span></h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
