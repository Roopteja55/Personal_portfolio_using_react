import styles from './Skills.module.css'
import Docker from '../../assets/social.png'
import Ansible from "../../assets/icons8-ansible-48.png";
import Git from "../../assets/icons8-git-48.png";
import GitHub from "../../assets/icons8-github-48.png";
import Jenkins from "../../assets/icons8-jenkins-48.png";
import Python from "../../assets/icons8-python-48.png";
import Terraform from "../../assets/icons8-terraform-48.png";
import Kubernetes from "../../assets/icons8-kubernetes-48.png";
import Linux from "../../assets/linux.png";
import Grafana from "../../assets/icons8-grafana-48.png";
import AWS from "../../assets/icons8-aws-64.png";
import S3 from "../../assets/icons8-amazon-s3-48.png";
import RDS from "../../assets/RDS.png";
import EC2 from "../../assets/EC2.png";

const skillsData = [
  { img: Docker, name: "Docker" },
  { img: Ansible, name: "Ansible" },
  { img: Git, name: "Git" },
  { img: GitHub, name: "GitHub" },
  { img: Jenkins, name: "Jenkins" },
  { img: Python, name: "Python" },
  { img: Terraform, name: "Terraform" },
  { img: Kubernetes, name: "Kubernetes" },
  { img: Linux, name: "Linux" },
  { img: Grafana, name: "Grafana" },
  { img: AWS, name: "AWS" },
  { img: S3, name: "Amazon S3" },
  { img: RDS, name: "RDS" },
  { img: EC2, name: "EC2" },
];

const Skills = () => {
  return (
    <>
      <div className={styles.skills}>
        {/* Skill title */}
        <div className={styles.skillTitle}>
          <h1>Skills</h1>
        </div>

        <div className={styles.allSkills}>

          {skillsData.map((skill, index) => (
          <div key={index} className={styles.skill}>
            <img src={skill.img} alt={skill.name} />
            <h3>{skill.name}</h3>
          </div>
        ))}

          {/* <div className={styles.skill}>
            <img src={Docker} alt="" />
            <h3>Docker</h3>
          </div>
          <div className={styles.skill}>
            <img src={Ansible} alt="Ansible" />
            <h3>Ansible</h3>
          </div>
          <div className={styles.skill}>
            <img src={Git} alt="Git" />
            <h3>Git</h3>
          </div>
          <div className={styles.skill}>
            <img src={GitHub} alt="GitHub" />
            <h3>GitHub</h3>
          </div>
          <div className={styles.skill}>
            <img src={Jenkins} alt="Jenkins" />
            <h3>Jenkins</h3>
          </div>
          <div className={styles.skill}>
            <img src={Python} alt="Python" />
            <h3>Python</h3>
          </div>
          <div className={styles.skill}>
            <img src={Terraform} alt="Terraform" />
            <h3>Terraform</h3>
          </div>
          <div className={styles.skill}>
            <img src={Kubernetes} alt="Kubernetes" />
            <h3>Kubernetes</h3>
          </div>
          <div className={styles.skill}>
            <img src={Linux} alt="Linux" />
            <h3>Linux</h3>
          </div>
          <div className={styles.skill}>
            <img src={Grafana} alt="Grafana" />
            <h3>Grafana</h3>
          </div>
          <div className={styles.skill}>
            <img src={AWS} alt="AWS" />
            <h3>AWS</h3>
          </div>
          <div className={styles.skill}>
            <img src={S3} alt="Amazon S3" />
            <h3>Amazon S3</h3>
          </div>
          <div className={styles.skill}>
            <img src={RDS} alt="RDS" />
            <h3>RDS</h3>
          </div>
          <div className={styles.skill}>
            <img src={EC2} alt="EC2" />
            <h3>EC2</h3>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Skills