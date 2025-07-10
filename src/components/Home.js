import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home-left">
        <h2>Hello, It's Me</h2>
        <h1>Ananya Kumar</h1>
        <h3>and I'm a <span>Computer Science Student</span></h3>

        <div className="bio-details">
          <p><strong>Address:</strong> Hassan, Karnataka, India</p>
          <p><strong>Email:</strong> ananyakumar2506@gmail.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
        </div>

        <div className="social-icons">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
        </div>
      </div>

      <div className="home-right">
        <img src="/profile.jpg" alt="profile" className="profile-img" />
      </div>

      <div className="education-section">
        <h2>Education</h2>

        <div className="education-item">
          <h3>Malnad College of Engineering</h3>
          <p>
          Currently, I am pursuing a Bachelor's degree in Computer Science at Malnad College of Engineering. 
          Here, I have built a strong foundation in core concepts such as programming, algorithms, and software engineering. 
          The curriculum has offered hands-on experience with various programming languages, tools, and development environments, helping me grow both technically and professionally. 
          I have maintained a commendable CGPA of 9.0, reflecting my consistent academic performance and passion for the field.
          </p>
        </div>

        <div className="education-item">
          <h3>Masters PU College</h3>
          <p>
            I pursued my pre-university education at Masters PU College, specializing in science and mathematics. 
            During this time, I cultivated strong analytical and problem-solving skills, which have become instrumental in my software development journey. 
            I graduated with an outstanding score of 96.67%, reflecting my commitment to academic excellence.
          </p>
        </div>

        <div className="education-item">
          <h3>Christ School</h3>
          <p>
          I completed my early schooling at Christ School with a solid academic foundation, securing an impressive 89%.
          </p>
        </div>

        
      </div>
    </section>
  );
};

export default Home;
