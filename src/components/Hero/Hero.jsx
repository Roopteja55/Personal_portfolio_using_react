import styles from './hero.module.css'
import user from '../../assets/user.png'


const Hero = () => {
  return (
      <>
          <div className={styles.hero}>
              <img src={user} alt="" />
              <h1><span>I'm Praveen Chinthala, </span>Lorem ipsum dolor sit amet consectetur adipisicing</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, eligendi.</p>
              <div className={styles.action}>
                  <div className={styles.hero_connect}>Connect with me</div>
                  <div className={styles.hero_resume}>Resume</div>
              </div>
        </div>
      </>
  )
}

export default Hero