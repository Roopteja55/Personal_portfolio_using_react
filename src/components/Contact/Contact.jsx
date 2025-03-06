import styles from "./contact.module.css";
import iconMail from "../../assets/gmail.png";
import iconMobile from "../../assets/mobile.png";
import iconLocation from "../../assets/placeholder.png";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6b2f5c20-985f-4d56-9101-abce1e876a0f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const res = await response.json();

      if (res.success) {
        alert(res.message);
      } else {
        alert(`Error: ${res.message}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to send message. Please try again later.");
    }
  };


  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.conTitle}>
        <h1>Get In Touch</h1>
      </div>

      <div className={styles.con_section}>
        <div className={styles.con_left}>
          <h1>Let's Talk</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            aliquam consequuntur, explicabo est obcaecati omnis commodi sequi
            sit officia magni, iste, corporis excepturi facere magnam.
          </p>
          <div className={styles.con_Details}>
            <div className={styles.con_Detail}>
              <img src={iconMail} alt="Email Icon" /> <p>example@gmail.com</p>
            </div>
            <div className={styles.con_Detail}>
              <img src={iconMobile} alt="Phone Icon" /> <p>+91 1122334455</p>
            </div>
            <div className={styles.con_Detail}>
              <img src={iconLocation} alt="Location Icon" />{" "}
              <p>Hyderabad, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className={styles.con_right}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <label htmlFor="message">Write your message</label>
          <textarea
            id="message"
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className={styles.con_submit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
