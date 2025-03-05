import styles from './annocement-bar.module.css'
import Marquee from 'react-fast-marquee'
import Docker from '../../assets/social.png'
import Ansible from '../../assets/icons8-ansible-48.png'
import Git from '../../assets/icons8-git-48.png';
import GitHub from '../../assets/icons8-github-48.png';
import Jenkins from '../../assets/icons8-jenkins-48.png';
import Python from '../../assets/icons8-python-48.png';
import Terraform from '../../assets/icons8-terraform-48.png';
import Kubernetes from '../../assets/icons8-kubernetes-48.png';
import Linux from '../../assets/linux.png';
import Grafana from '../../assets/icons8-grafana-48.png';
import AWS from '../../assets/icons8-aws-64.png'
import S3 from '../../assets/icons8-amazon-s3-48.png'
import RDS from '../../assets/RDS.png'
import EC2 from '../../assets/EC2.png'


const techIcons = [
  { img: Docker, name: "Docker" },
  { img: Ansible, name: "Ansible" },
  { img: AWS, name: "AWS" },
  { img: EC2, name: "AWS EC2" },
  { img: RDS, name: "AWS RDS" },
  { img: Git, name: "Git" },
  { img: GitHub, name: "GitHub" },
  { img: Jenkins, name: "Jenkins" },
  { img: Python, name: "Python" },
  { img: Terraform, name: "Terraform" },
  { img: Kubernetes, name: "Kubernetes" },
  { img: Linux, name: "Linux" },
  { img: Grafana, name: "Grafana" },
  { img: S3, name: "S3" }
];



const Annocement_bar = () => {
  return (
    <>
      <div className={styles.ann_bar}>
        <Marquee speed={60} pauseOnHover>
          <div className={styles.icons}>
            {techIcons.map((tech, index) => (
              <div key={index} className={styles.icon}>
                <img src={tech.img} alt={tech.name} />
                <p>- {tech.name}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      {/* <div className={styles.ann_bar}>
        <Marquee speed={60} pauseOnHover>
          <div className={styles.icons}>
            <div className={styles.icon}>
              <img src={Docker} alt="Docker" />
              <p>-Docker</p>
            </div>

            <div className={styles.icon}>
              <img src={Ansible} alt="Ansible" />
              <p>-Ansible</p>
            </div>

            <div className={styles.icon}>
              <img src={AWS} alt="AWS" />
              <p>-AWS</p>
            </div>

            <div className={styles.icon}>
              <img src={EC2} alt="AWS" />
              <p>-AWS EC2</p>
            </div>

            <div className={styles.icon}>
              <img src={RDS} alt="AWS" />
              <p>-AWS RDS</p>
            </div>

             <div className={styles.icon}>
    <img src={Git} alt="Git" />
    <p>- Git</p>
  </div>
  <div className={styles.icon}>
    <img src={GitHub} alt="GitHub" />
    <p>- GitHub</p>
  </div>
  <div className={styles.icon}>
    <img src={Jenkins} alt="Jenkins" />
    <p>- Jenkins</p>
  </div>
  <div className={styles.icon}>
    <img src={Python} alt="Python" />
    <p>- Python</p>
  </div>
  <div className={styles.icon}>
    <img src={Terraform} alt="Terraform" />
    <p>- Terraform</p>
  </div>
  <div className={styles.icon}>
    <img src={Kubernetes} alt="Kubernetes" />
    <p>- Kubernetes</p>
  </div>
  <div className={styles.icon}>
    <img src={Linux} alt="Linux" />
    <p>- Linux</p>
  </div>
  <div className={styles.icon}>
    <img src={Grafana} alt="Grafana" />
    <p>- Grafana</p>
  </div>

            
            
          </div>
          </Marquee>
    </div> */}
    </>
  );
}

export default Annocement_bar