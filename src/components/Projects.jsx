import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "HyperGAN-Pytorch",
      description: "This is a slightly modified implementation of the paper HyperGAN - A Generative Model for Diverse, Performant Neural Networks by Ratzlaff et. al.",
      image: "/assets/projects/project1.png",
      tags: ["Python", "PyTorch", "Deep Learning"],
      category: "flagship-projects-paper",
      link: "https://github.com/simeetnayan81/hypergan-pytorch",
    },
    {
      id: 2,
      title: "Contribution to pytorch/ignite",
      description: "Contributed to pytorch/ignite",
      image: "/assets/projects/project2.png",
      tags: ["Pytorch", "Ignite", "Open Source"],
      category: "open-source",
      link: "https://github.com/pytorch/ignite/commits/master/?author=simeetnayan81",
    },
    {
      id: 3,
      title: "Finbot",
      description: "Finance News Aggregator using Agentic AI (Gemini + AutoGen)",
      image: "📈📰🤖",
      tags: ["React", "API", "CSS"],
      category: "mini-projects",
      link: "https://github.com/simeetnayan81/finbot",
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="project-categories">
          <button 
            className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All
          </button>
          <button 
            className={`category-btn ${activeCategory === 'open-source' ? 'active' : ''}`}
            onClick={() => setActiveCategory('open-source')}
          >
            Open Source Contributions
          </button>
          <button 
            className={`category-btn ${activeCategory === 'mini-projects' ? 'active' : ''}`}
            onClick={() => setActiveCategory('mini-projects')}
          >
            Mini Projects/Experiments/Prototypes
          </button>
          <button 
            className={`category-btn ${activeCategory === 'flagship-projects-paper' ? 'active' : ''}`}
            onClick={() => setActiveCategory('flagship-projects-paper')}
          >
            🚀 Flagship Projects/Paper Implementations
          </button>
        </div>
        
        <div className="project-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;