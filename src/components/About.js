import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>About <span>Me</span></h2>
        <div className="about-box">
          <p>
            Hi! I’m <strong>Ananya</strong>, a curious and motivated Computer Science student.
            I’m passionate about building and experimenting with small projects that help me 
            understand programming, machine learning, and web development better.
          </p>
          <p>
            I believe learning by doing is the best way to grow. I enjoy applying concepts from class 
            into real mini-projects — whether it’s training a deep learning model, designing responsive 
            websites, or building logic for a Turing Machine in JFLAP.
          </p>
          <p>
            I'm still discovering what areas I love the most, but I'm always excited to explore new 
            technologies. This portfolio is my learning journey — and I’m just getting started!
          </p>
        </div>
        <button className="btn">Let’s Connect</button>
      </div>
    </section>
  );
};

export default About;
