import React, { useState } from 'react';

function Articles() {
  const [activeCategory, setActiveCategory] = useState('blogs');

  const articles = {
    blogs: [
      {
        id: 1,
        title: "Deriving Naive Bayes from scratch",
        description: "Mathematically building Naive Bayes from the scratch.",
        date: "July 17, 2021",
        link: "https://medium.com/@simeetnayan81/deriving-naive-bayes-from-scratch-945004ce5053",
      }
    ],
    papers: [
      {
        id: 1,
        title: "MRI Insights: Classification of Brain Tumor Using Intelligent Feature Extraction Techniques",
        description: "This study addresses the critical challenge of early brain tumor detection and classification from 2D MRI images by employing a comprehensive approach. It utilizes feature extraction techniques, including GLCM, 2D-DWT, and histogram analysis, to capture essential image characteristics, followed by Principal Component Analysis (PCA) for dimensionality reduction and noise mitigation. The research explores various classical machine learning algorithms, notably Gaussian Naïve Bayes, Random Forest, XGBoost, and Support Vector Classifier (SVC), ultimately achieving a 98% accuracy score with SVC.",
        journal: "IEEE",
        date: "January 2025",
        link: "https://ieeexplore.ieee.org/abstract/document/10829434",
      },
    ],
  };

  return (
    <section className="articles">
      <div className="container">
        <h2 className="section-title">Articles & Publications</h2>
        
        <div className="article-categories">
          <button 
            className={`category-btn ${activeCategory === 'blogs' ? 'active' : ''}`}
            onClick={() => setActiveCategory('blogs')}
          >
            Blogs
          </button>
          <button 
            className={`category-btn ${activeCategory === 'papers' ? 'active' : ''}`}
            onClick={() => setActiveCategory('papers')}
          >
            Papers
          </button>
        </div>
        
        <div className="article-list">
          {activeCategory === 'blogs' && (
            <div className="blogs">
              {articles.blogs.map(blog => (
                <div key={blog.id} className="article-card">
                  <h3 className="article-title">{blog.title}</h3>
                  <p className="article-description">{blog.description}</p>
                  <p className="article-date">Published on {blog.date}</p>
                  <a href={blog.link} className="article-link">Read More</a>
                </div>
              ))}
            </div>
          )}
          
          {activeCategory === 'papers' && (
            <div className="papers">
              {articles.papers.map(paper => (
                <div key={paper.id} className="article-card paper-card">
                  <h3 className="article-title">{paper.title}</h3>
                  <p className="article-description">{paper.description}</p>
                  <p className="article-journal">Published in {paper.journal}, {paper.date}</p>
                  <a href={paper.link} className="article-link">Read Paper</a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Articles;
