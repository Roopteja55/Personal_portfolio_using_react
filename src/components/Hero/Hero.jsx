/* eslint-disable no-irregular-whitespace */
import styles from "./hero.module.css";
import user from "../../assets/user.png";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <img src={user} alt="" />
        <h1>
          <span>I&apos;m Praveen Chinthala, </span>Cloud Engineer
        </h1>
        <p>
          Enthusiastic and detail-oriented computer science graduate seeking an
          entry-level DevOps position. Eager to leverage strong technical skills
          in cloud computing, automation, and collaboration to enhance
          operational efficiency and contribute to innovative projects.
        </p>
        <div className={styles.action}>
          <div className={styles.hero_connect}>Connect with me</div>
          <div className={styles.hero_resume}>Resume</div>
        </div>
      </div>
    </>
  );
};

export default Hero;