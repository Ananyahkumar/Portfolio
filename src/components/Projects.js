import React from 'react';
import './Projects.css';

const projectData = [
  {
    title: 'UNet++ for White Blood Cell Segmentation',
    description: `Built a deep learning model using UNet++ to segment white blood cells from ALL_IDB1 dataset using Dice loss and augmentation techniques.`,
  },
  {
    title: 'Personal Finance Tracker with ML',
    description: `Streamlit-based app that classifies user expenses using TF-IDF and Logistic Regression and visualizes spending with charts.`,
  },
  {
    title: 'Jewelry Website (React)',
    description: `Designed an elegant homepage for a jewelry brand using React and Tailwind CSS, focusing on layout, responsiveness, and UI aesthetics.`,
  },
  {
    title: 'Automata Theory Projects',
    description: `Created DFA, PDA, and TM in JFLAP for various language problems, including parenthesis balancing, binary increment, and pattern matching.`,
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Latest <span>Projects</span></h2>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
