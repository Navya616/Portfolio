import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const experiences = [
    {
      title: "IT Assistant",
      points: [
        "Developed an academic management system using React and Spring Boot that improved the student record system.",
        "Built an intuitive interface with real-time CRUD functionality for tracking attendance and GPA metrics, while implementing optimized JPA repositories that enhanced data retrieval speeds and maintained integrity across operations.",
        "This streamlined solution reduced administrative overhead, allowing faculty to focus more on student success while supporting hundreds of student profiles with seamless scalability."
      ]
    },
    {
      title: "Web Development Intern",
      points: [
        "Designed and developed a responsive educational platform using HTML5, CSS3, and modern JavaScript, creating an intuitive interface that dramatically increased user engagement while ensuring seamless cross-device compatibility.",
        "Implemented sophisticated React-based frontend features including real-time validation, dynamic content rendering, and efficient state management through Hooks and Context API, significantly improving navigation flow and overall user experience.",
        "Collaborated with backend engineers to integrate RESTful APIs, enabling seamless data synchronization for user profiles, event schedules, and course enrollments that created a cohesive ecosystem between content delivery and student interaction."
      ]
    }
  ];

  return (
    <section className={styles.container} id="experience">
      {/* Added spacer div to create separation from previous section */}
      <div className={styles.sectionSpacer}></div>
      
      <div className={styles.headerContainer}>
        <h2 className={styles.title}>Experience</h2>
        
      </div>
      
      <div className={styles.contentWrapper}>
        <div className={styles.imageContainer}>
          <img
            src={getImageUrl("about/small_navya.jpg")}
            alt="Professional headshot"
            className={styles.profileImage}
          />
          <div className={styles.imageBorder}></div>
        </div>
        
        <div className={styles.experienceContainer}>
          {experiences.map((experience, index) => (
            <div className={styles.experienceCard} key={index}>
              <div className={styles.cardHeader}>
                <h3 className={styles.roleTitle}>{experience.title}</h3>
                <div className={styles.roleIndicator}></div>
              </div>
              
              <div className={styles.experienceContent}>
                {experience.points.map((point, pointIndex) => (
                  <div className={styles.pointContainer} key={pointIndex}>
                    <div className={styles.pointBullet}></div>
                    <p className={styles.pointText}>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};