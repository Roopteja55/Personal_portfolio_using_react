import { useState, useRef } from "react";
import styles from "./projects.module.css";
import EC2 from "../../assets/EC2.png";
import Git from "../../assets/icons8-git-48.png";
import GitHub from "../../assets/icons8-github-48.png";
import Kubernetes from "../../assets/icons8-kubernetes-48.png";


const projectsData = [
  {
    id: 1,
    title: "End-to-End Deployment with CI/CD",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQFHNo6Z5StWLQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1698605966217?e=2147483647&v=beta&t=l1sCPZ9UX6XFHOJLAvJA4T7G43EuB8HCfc1us_aXQwQ",
    tools: [EC2, Git, GitHub, Kubernetes],
    description: "Automated CI/CD pipeline using cloud infrastructure.",
    github: "https://github.com/your-repo/project-1",
  },
  {
    id: 2,
    title: "Cloud Infrastructure Automation",
    image: "https://via.placeholder.com/300",
    tools: [EC2],
    description: "Automating cloud deployments using Terraform and AWS.",
    github: "https://github.com/your-repo/project-2",
  },
  {
    id: 3,
    title: "Microservices Architecture",
    image: "https://via.placeholder.com/300",
    tools: [EC2],
    description: "Building and managing microservices efficiently.",
    github: "https://github.com/your-repo/project-3",
  },
  {
    id: 4,
    title: "Serverless API Deployment",
    image: "https://via.placeholder.com/300",
    tools: [EC2],
    description: "Deploying serverless APIs with AWS Lambda and API Gateway.",
    github: "https://github.com/your-repo/project-4",
  },
  {
    id: 5,
    title: "Monitoring and Logging",
    image: "https://via.placeholder.com/300",
    tools: [EC2],
    description: "Implementing cloud monitoring and logging solutions.",
    github: "https://github.com/your-repo/project-5",
  },
  {
    id: 6,
    title: "Secure DevOps Pipeline",
    image: "https://via.placeholder.com/300",
    tools: [EC2],
    description: "Ensuring security in DevOps using SonarQube and Trivy.",
    github: "https://github.com/your-repo/project-6",
  },
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const projectsRef = useRef(null);

  const smoothScroll = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const showMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projectsData.length));
    smoothScroll();
  };

  const showPreviousProjects = () => {
    setVisibleProjects((prev) => Math.max(prev - 3, 3));
    smoothScroll();
  };

  return (
    <div id="projects" className={styles.projects} ref={projectsRef}>
      <div className={styles.title}>
        <h1>Projects</h1>
      </div>
      

      <div className={styles.projectsGrid}>
        {projectsData.slice(0, visibleProjects).map((project) => (
          <div
            key={project.id}
            className={`${styles.project} ${styles.fadeIn}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImg}
            />
            <h3>{project.title}</h3>
            <div className={styles.tools}>
              {project.tools.map((tool, index) => (
                <img key={index} src={tool} alt="Tool icon" />
              ))}
            </div>
            <p>{project.description}</p>
            <div className={styles.projectFooter}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubBtn}
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.buttonsContainer}>
        {visibleProjects > 3 && (
          <button onClick={showPreviousProjects} className={styles.previousBtn}>
            Previous
          </button>
        )}
        {visibleProjects < projectsData.length && (
          <button onClick={showMoreProjects} className={styles.showMoreBtn}>
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;