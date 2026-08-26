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
            <p className="lede">
              I ship machine learning in production, and I build the systems around it: feature pipelines, scoring services, RL environments, and vector search.
            </p>
            <div className="focus-tags">
              <span className="tag">Production ML</span>
              <span className="tag">Reinforcement Learning</span>
              <span className="tag">ML Systems</span>
            </div>
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
            At <strong>Wells Fargo</strong> I work on everyday banking product recommendations
            (checking, savings, autopay, overdraft, cards) for <strong>32M+</strong> customers,
            and on the transactions fraud prevention team. As an intern I trained a deep
            learning model for mortgage prepayment risk.
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
              <strong>Machine Learning:</strong> PyTorch, scikit-learn, NumPy, Pandas, Reinforcement Learning
            </li>
            <li>
              <strong>Languages:</strong> Python, C++, Java, Swift, SQL
            </li>
            <li>
              <strong>Production &amp; serving:</strong> FastAPI, Kafka, Redis, PostgreSQL, Docker, Linux
            </li>
          </ul>
          <div className="skill-tags">
            <span className="tag">Python</span>
            <span className="tag">PyTorch</span>
            <span className="tag">Reinforcement Learning</span>
            <span className="tag">scikit-learn</span>
            <span className="tag">Kafka</span>
            <span className="tag">FastAPI</span>
            <span className="tag">Docker</span>
            <span className="tag">SQL</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
