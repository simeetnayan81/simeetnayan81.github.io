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
            <div className="cta-buttons">
              <Link to="/projects" className="btn primary">View Projects</Link>
              <a
                href="/assets/resume.pdf"
                className="btn secondary"
                target="_blank"
                rel="noopener noreferrer"
                download="SimeetNayanResume.pdf"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className="about">
          <h3>About</h3>
          <p>
            At <strong>Wells Fargo</strong> I build cryptocurrency trading for millions of
            mobile users: native iOS in Swift and SwiftUI, and low-latency Java and Spring Boot
            services for quote streaming, order execution, market data, and portfolios.
            I also built a recurring-payment recommendation engine in Python (pandas, scikit-learn)
            and serve the ranking model from Java, with p99 latency under <strong>200 ms</strong>.
            I wrote a client-side fuzzing framework that replays edge-case responses against the UI.
            As an intern I trained a deep learning model for mortgage prepayment risk prediction.
          </p>
          <p>
            Outside work I design ML infrastructure. <strong>ODSE</strong> is an OpenEnv-compatible RL sandbox
            where agents write Python to explore data, train models, and submit predictions.
            <strong> VectorSwift</strong> is an embedded vector database with WAL-backed persistence.
            I have an <Link to="/articles">IEEE publication</Link> on classical ML for MRI tumor classification,
            and I implement research papers in PyTorch.
          </p>
          <p>
            I graduated in Information Technology from the{' '}
            <strong>Indian Institute of Engineering Science and Technology, Shibpur</strong> (2024)
            with a CGPA of <strong>9.33/10</strong>.
          </p>
          <blockquote className="quote">
            “Here I stand, atoms with consciousness, matter with curiosity. A universe of atoms, an atom in the universe.”
            <cite>- Richard Feynman</cite>
          </blockquote>
        </div>

        <div className="skills">
          <h3>Skills &amp; Technologies</h3>
          <ul className="skill-groups">
            <li>
              <strong>Languages:</strong> Python, C++, Java, Swift, JavaScript, SQL
            </li>
            <li>
              <strong>Machine Learning:</strong> PyTorch, scikit-learn, NumPy, pandas, Reinforcement Learning
            </li>
            <li>
              <strong>Mobile and serving:</strong> SwiftUI, Spring Boot, FastAPI, Kafka, Redis, PostgreSQL, Docker, Git, Linux, CI/CD
            </li>
          </ul>
          <div className="skill-tags">
            <span className="tag">Swift</span>
            <span className="tag">SwiftUI</span>
            <span className="tag">Java</span>
            <span className="tag">Spring Boot</span>
            <span className="tag">Python</span>
            <span className="tag">scikit-learn</span>
            <span className="tag">PyTorch</span>
            <span className="tag">Docker</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
