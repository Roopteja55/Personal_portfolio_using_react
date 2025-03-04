import styles from "./contact.module.css";
import icon_mail from "../../assets/gmail.png";
import icon_mobile from "../../assets/mobile.png";
import icon_location from "../../assets/placeholder.png";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.conTitle}>
        <h1>Get In Touch</h1>
      </div>

      <div className={styles.con_section}>
        <div className={styles.con_left}>
          <h1>Let&apos;s Talk</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            aliquam consequuntur, explicabo est obcaecati omnis commodi sequi
            sit officia magni, iste, corporis excepturi facere magnam.
          </p>
          <div className={styles.con_Details}>
            <div className={styles.con_Detail}>
              <img src={icon_mail} alt="" /> <p>example@gmail.com</p>
            </div>

            <div className={styles.con_Detail}>
              <img src={icon_mobile} alt="" /> <p>+91 1122334455</p>
            </div>

            <div className={styles.con_Detail}>
              <img src={icon_location} alt="" /> <p>Hyderabad, India</p>
            </div>

            {/* <div className={styles.con_Detail}></div> */}
          </div>
        </div>
        <form className={styles.con_right}>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" id="" />
          <label htmlFor="">Write your message</label>
          <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
          <button type="submit" className={styles.con_submit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
