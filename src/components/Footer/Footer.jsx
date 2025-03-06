import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_left}>
          <p>©2024. All rights reserved</p>
        </div>
        <div className={styles.footer_right}>
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Contact with me</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;