import styles from './banner.module.css'
import Pra_banner from "../../assets/1722509069199.jpeg";

const Banner = () => {
  return (
      <>
          <div className={styles.banner}>
              <img src={Pra_banner} alt="" />
      </div>
      </>
  )
}

export default Banner