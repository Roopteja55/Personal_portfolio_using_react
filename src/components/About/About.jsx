import styles from "./about.module.css";
import user from "../../assets/user.png";
import Resume from "../../assets/PRAVEEN RESUME LATEST.pdf";


const About = () => {
  return (
    <>
      <div id="about" className={styles.about}>
        <div className={styles.aboutTitle}>
          <h1>About Me</h1>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.about_left}>
            <img src={user} alt="User" />
          </div>

          <div className={styles.about_right}>
            <div className={styles.about_right1}>
              <h2>
                <span>I&apos;m Praveen Chinthala, </span>DevOps Engineer
              </h2>
              <div className={styles.hero_resume}>
                <a href={Resume} target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </div>
            </div>

            <div className={styles.about_right2}>
              <div className={styles.skill}>
                <p>Docker</p>
                <hr style={{ width: "90%" }} />
              </div>

              <div className={styles.skill}>
                <p>Kubernetes</p>
                <hr style={{ width: "95%" }} />
              </div>

              <div className={styles.skill}>
                <p>Jenkins</p>
                <hr style={{ width: "80%" }} />
              </div>

              <div className={styles.skill}>
                <p>AWS</p>
                <hr style={{ width: "90%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
