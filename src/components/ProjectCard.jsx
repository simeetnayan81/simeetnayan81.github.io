import React from 'react';

function ProjectCard({ title, description, image, tags, link }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <a href={link} className="btn small" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;