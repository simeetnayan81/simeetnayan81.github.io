import React from 'react';

function initialsFromTitle(title) {
  if (!title) return 'ML';
  const words = title.replace(/[^A-Za-z0-9\s-]/g, '').split(/[\s-]+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

function ProjectCard({ title, description, image, tags, link, linkLabel }) {
  return (
    <div className="project-card">
      <div className="project-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="project-placeholder" aria-hidden="true">
            <span>{initialsFromTitle(title)}</span>
          </div>
        )}
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <a href={link} className="btn small" target="_blank" rel="noopener noreferrer">
          {linkLabel || 'View Project'}
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
