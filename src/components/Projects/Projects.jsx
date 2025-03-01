import styles from './projects.module.css'

const Projects = () => {
  return (
    <>
      <div className={styles.projects}>
        <div className={styles.proTitle}>
          <h1>Projects</h1>
        </div>

        <div className={styles.proContent}>
          <div className={styles.project}>
            <img src="" alt="" />
            <h2>
              End-to-End Dockerized Application Deployment with CI/CD(continuous
              integration and deployment) and Kubernetes
            </h2>
            <div className={styles.button}>
              <button>GitHub</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects