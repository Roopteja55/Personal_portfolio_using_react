/* eslint-disable no-irregular-whitespace */
import styles from "./hero.module.css";
import user from "../../assets/user.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Resume from '../../assets/PRAVEEN RESUME LATEST.pdf'


const Hero = () => {
  return (
    <>
      <div id="home" className={styles.hero}>
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
          <div className={styles.hero_connect}>
            <AnchorLink
              className={styles.hero_anchor_link}
              offset={50}
              href="#contact"
            >
              Connect with me
            </AnchorLink>
          </div>
          <div className={styles.hero_resume}>
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;