import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Simeet Nayan</h1>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/articles" className="nav-link">Articles</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
