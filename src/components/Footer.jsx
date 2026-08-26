import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Simeet Nayan. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/simeetnayan81" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/simeetnayan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://x.com/SimeetNayan" target="_blank" rel="noopener noreferrer" aria-label="X">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://medium.com/@simeetnayan81" target="_blank" rel="noopener noreferrer" aria-label="Medium">
            <i className="fab fa-medium"></i>
          </a>
          <a href="https://huggingface.co/simeetnayan" target="_blank" rel="noopener noreferrer" aria-label="Hugging Face">
            <i className="fas fa-brain"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;