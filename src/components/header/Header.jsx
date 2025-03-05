import { useState } from "react";
import styles from "./Header.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  const [menu, setMenu] = useState("home");

  return (
    <>
      <header className={styles.header}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          Praveen Chinthala
        </a>
        {/* Navigation Bar */}
        <ul className={styles.nav}>
          <li className={menu === "home" ? styles.active : ""}>
            <AnchorLink className={styles.anchor_link} href="#home">
              <p onClick={() => setMenu("home")}>Home</p>
            </AnchorLink>
          </li>
          <li className={menu === "about" ? styles.active : ""}>
            <AnchorLink
              className={styles.anchor_link}
              offset={50}
              href="#about"
            >
              <p onClick={() => setMenu("about")}>About Me</p>
            </AnchorLink>
          </li>
          <li className={menu === "projects" ? styles.active : ""}>
            <AnchorLink
              className={styles.anchor_link}
              offset={50}
              href="#projects"
            >
              <p onClick={() => setMenu("projects")}>Projects</p>
            </AnchorLink>
          </li>
          <li className={menu === "skills" ? styles.active : ""}>
            <AnchorLink
              className={styles.anchor_link}
              offset={50}
              href="#skills"
            >
              <p onClick={() => setMenu("skills")}>Skills</p>
            </AnchorLink>
          </li>
          <li className={menu === "education" ? styles.active : ""}>
            <AnchorLink
              className={styles.anchor_link}
              offset={50}
              href="#education"
            >
              <p onClick={() => setMenu("education")}>Education</p>
            </AnchorLink>
          </li>
        </ul>
        {/* Contact Button */}
        <div
          className={`{styles.nav_connect} ${
            menu === "contact" ? styles.active : ""
          }`}
          onClick={() => setMenu("contact")}
        >
          <AnchorLink  offset={50} href="#contact">
            Contact with me
          </AnchorLink>
        </div>
      </header>
    </>
  );
};

export default Header;
