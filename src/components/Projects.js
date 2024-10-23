import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Modern News Website',
      description: 'The news website project aims to provide a comprehensive online platform for delivering timely and reliable news to users.It features user-friendly navigation categorized content and responsive design',
      github: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Portfolio Website',
      description: 'A Comprehensive showcase of my projects, technical skills, experience and links to my professional platforms along with functionality of contacting me',
      github: 'https://github.com/yourusername/project2',
    },
    // Add more projects
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
