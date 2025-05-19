import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Navya</h1>
        <p className={styles.description}>
        I'm a Computer Science graduate student at Texas Tech University with a focus on 
        full stack development. My academic journey has equipped me with a strong foundation 
        in building comprehensive web applications from front-end interfaces to back-end systems.
         I'm passionate about leveraging modern frameworks and technologies to build seamless digital 
         experiences that prioritize user needs while maintaining code quality and performance.
        </p>
        <p className={styles.description}>
          Please reach out to learn more about me!
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/navya_main.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
