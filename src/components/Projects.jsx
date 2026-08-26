import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'ODSE: Open Data Science Environment',
      description:
        'OpenEnv-compatible RL environment where agents write and execute Python to explore data, impute missing values, train models, and submit predictions on a hidden test set. Dense reward shaping, sandboxed execution, and a live Hugging Face Space.',
      image: '/assets/projects/odse.png',
      tags: ['Reinforcement Learning', 'Agents', 'scikit-learn', 'OpenEnv', 'Hugging Face'],
      category: 'flagship',
      link: 'https://simeetnayan-odse.hf.space/web/',
      linkLabel: 'Open Demo',
    },
    {
      id: 2,
      title: 'VectorSwift',
      description:
        'In-process vector database in Swift: multi-collection API, exact nearest-neighbor search (L2, inner product, cosine), WAL-backed durability, and sealed segments. Built for embedding search in apps and Swift services.',
      tags: ['Vector Search', 'Embeddings', 'Swift', 'Systems'],
      category: 'flagship',
      link: 'https://github.com/simeetnayan81/VectorSwift',
    },
    {
      id: 4,
      title: 'Training Deep Q-Networks for Breakout',
      description:
        'PyTorch implementation of Mnih et al., Playing Atari with Deep Reinforcement Learning. Trains a DQN agent on Breakout, with a write-up of the training setup and policy convergence.',
      image: '/assets/projects/Dqn_breakout.gif',
      tags: ['DQN', 'PyTorch', 'Deep RL'],
      category: 'flagship',
      link: 'https://github.com/simeetnayan81/dqn-breakout',
    },
    {
      id: 5,
      title: 'HyperGAN-PyTorch',
      description:
        'Implementation of Ratzlaff et al., HyperGAN: A Generative Model for Diverse, Performant Neural Networks, with an ensemble-of-LeNets modification. Generator-based ensembles reached ~0.60 test accuracy on CIFAR-10 vs ~0.55 for a single LeNet.',
      image: '/assets/projects/project1.png',
      tags: ['PyTorch', 'Generative Models', 'Ensembles'],
      category: 'flagship',
      link: 'https://github.com/simeetnayan81/hypergan-pytorch',
    },
    {
      id: 6,
      title: 'Ray (Anyscale)',
      description:
        'Contributions to Ray, the distributed runtime and AI libraries used to scale Python and machine learning workloads. Bug fixes and new features.',
      tags: ['Distributed ML', 'Ray', 'Open Source'],
      category: 'open-source',
      link: 'https://github.com/ray-project/ray/pulls?q=is%3Apr+author%3Asimeetnayan81',
      linkLabel: 'View Contributions',
    },
    {
      id: 7,
      title: 'PyTorch Ignite',
      description:
        'Contributions to pytorch/ignite, a high-level library for training and evaluating neural networks in PyTorch. Work included metric handling and CI stability.',
      image: '/assets/projects/project2.png',
      tags: ['PyTorch', 'Ignite', 'Open Source'],
      category: 'open-source',
      link: 'https://github.com/pytorch/ignite/commits/master/?author=simeetnayan81',
      linkLabel: 'View Contributions',
    },
    {
      id: 8,
      title: 'Finbot',
      description:
        'Multi-agent finance news system: search, scrape, and summarize coverage of a ticker from Yahoo Finance, Bloomberg, and Reuters using Gemini 2.0 Flash and AutoGen.',
      image: '/assets/projects/project3.png',
      tags: ['Agentic AI', 'AutoGen', 'Gemini', 'Python'],
      category: 'experiments',
      link: 'https://github.com/simeetnayan81/finbot',
    },
    {
      id: 9,
      title: 'RL Algorithms',
      description:
        'From-scratch implementations of reinforcement learning algorithms, starting with tabular Q-learning on FrozenLake, as a working notebook of the fundamentals.',
      image: '/assets/projects/project4.png',
      tags: ['Reinforcement Learning', 'NumPy', 'PyTorch'],
      category: 'experiments',
      link: 'https://github.com/simeetnayan81/RL-Algorithms',
    },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'flagship', label: 'Flagship' },
    { id: 'open-source', label: 'Open Source' },
    { id: 'experiments', label: 'Experiments' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-intro">
          Research implementations, RL infrastructure, and production-shaped ML systems.
        </p>

        <div className="project-categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              type="button"
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
