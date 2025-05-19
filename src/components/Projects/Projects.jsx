import React, { useState, useEffect, useRef } from "react";
import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
// import { ProjectCard } from "./ProjectCard";
import { getImageUrl } from "../../utils";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [visibleProjects, setVisibleProjects] = useState(4);
  const projectsRef = useRef(null);
  
  // Extract unique categories from all projects
  const categories = ["All", ...new Set(projects.flatMap(project => project.category || []))];
  
  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => 
        project.category && project.category.includes(activeFilter)
      ));
    }
    // Reset visible count when filter changes
    setVisibleProjects(3);
  }, [activeFilter]);
  
  const loadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 4, filteredProjects.length));
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.container} id="projects" ref={projectsRef}>
      <div className={styles.header}>
        <h2 className={styles.title}>Projects</h2>
        
      </div>
      
      
      
      <div className={styles.projectsGrid}>
        {filteredProjects.slice(0, visibleProjects).map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
      
      {visibleProjects < filteredProjects.length && (
        <button className={styles.loadMoreButton} onClick={loadMore}>
          Load More Projects
        </button>
      )}
      
      <button className={styles.scrollButton} onClick={scrollToProjects}>
        <span className={styles.arrowUp}></span>
      </button>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const { 
    title, 
    imageSrc, 
    description, 
    skills, 
    demo, 
    source, 
    featured = false 
  } = project;
  
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`${styles.card} ${featured ? styles.featured : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.imageContainer}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Preview of ${title}`}
          className={styles.image}
        />
        <div className={`${styles.overlay} ${isHovered ? styles.visible : ""}`}>
          <div className={styles.links}>
            {demo && (
              <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
                <span className={styles.linkIcon}>🔗</span>
                Live Demo
              </a>
            )}
            {source && (
              <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
                <span className={styles.linkIcon}>💻</span>
                Source Code
              </a>
            )}
          </div>
        </div>
        {featured && <div className={styles.featuredBadge}>Featured</div>}
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <span key={id} className={styles.skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};