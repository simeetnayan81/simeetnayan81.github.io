import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home">
      <div className="container">
        <div className="profile">
          <div className="profile-image">
            <img src="/assets/profile.jpg" alt="Simeet Nayan" />
          </div>
          <div className="profile-content">
            <h2 className="title">Hello, I'm Simeet</h2>
            <h3 className="subtitle">Software Engineer @ Wells Fargo</h3>
            <p className="description">
            <section id="about" style={{ fontFamily: 'sans-serif', lineHeight: 1.6 }}>
                <h2>About Me</h2>
                  <p>
                    I’m Simeet Nayan, a software engineer at <strong>Wells Fargo, India</strong>, and a graduate in Information Technology from the
                    <strong> Indian Institute of Engineering Science and Technology, Shibpur</strong> (Class of 2024) with a CGPA of <strong>9.33/10</strong>.
                  </p>
                  <p>
                    I enjoy building scalable systems and writing efficient code that solves real-world problems. Outside of my day job, I spend time on:
                  </p>
                  <ul>
                    <li>Contributing to open-source projects and experimenting with deep neural networks</li>
                    <li>Reading and implementing cutting-edge ML/AI research papers</li>
                    <li>Exploring the foundations of intelligence and designing algorithms that make intelligent decisions</li>
                    <li>Diving into the principles that govern our universe, driven by a love for physics and curiosity</li>
                  </ul>
                  <blockquote style={{
                                        fontStyle: 'italic',
                                        margin: '1em 0',
                                        borderLeft: '4px solid #ccc',
                                        paddingLeft: '1em'
                                      }}>
                    “Here I stand, atoms with consciousness, matter with curiosity. A universe of atoms, an atom in the universe.”<br></br>
                    — <strong>Richard Feynman</strong>
                  </blockquote>

                  <h3>Skills</h3>
                  <ul>
                    <li><strong>Languages:</strong> Python, C, C++, Java, JavaScript, MySQL</li>
                    <li><strong>Frameworks & Libraries:</strong> PyTorch, TensorFlow, scikit-learn, Keras, NumPy, Pandas, Flask</li>
                    <li><strong>DevOps & Tools:</strong> Docker, Kubernetes, Linux, Git</li>
                    <li><strong>Areas of Expertise:</strong> Data Structures & Algorithms, SDLC, Machine Learning, Deep Learning</li>
                  </ul>
              </section>
            </p>
            <div className="cta-buttons">
              <Link to="/projects" className="btn primary">View Projects</Link>
              <a href="/assets/resume.pdf" className="btn secondary" target="_blank" rel="noopener noreferrer" download = "SimeetNayanResume.pdf">Download Resume</a>
            </div>
          </div>
        </div>
        
        <div className="skills">
          <h3>Skills & Technologies</h3>
          <div className="skill-tags">
            <span className="tag">Python++</span>
            <span className="tag">C++</span>
            <span className="tag">PyTorch</span>
            <span className="tag">Python</span>
            <span className="tag">ML/DL/RL</span>
            <span className="tag">Java</span>
            <span className="tag">Javascript</span>
            <span className="tag">Git</span>
            <span className="tag">Linux</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;