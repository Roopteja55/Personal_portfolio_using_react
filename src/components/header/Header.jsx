import { useState } from "react";
import styles from "./Header.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu.svg";
import menu_close from "../../assets/close.svg";

const Header = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close menu when a link is clicked
  const handleNavClick = (section) => {
    setMenu(section);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          Praveen Chinthala
        </a>

        {/* Menu Button (Visible on Mobile) */}
        <img
          src={isMenuOpen ? menu_close : menu_open}
          alt="Menu"
          className={styles.menu_icon}
          onClick={toggleMenu}
        />

        {/* Navigation Bar */}
        <ul className={`${styles.nav} ${isMenuOpen ? styles.show : ""}`}>
          <li className={menu === "home" ? styles.active : ""}>
            <AnchorLink
              className={styles.anchor_link}
              href="#home"
              onClick={() => handleNavClick("home")}
            >
              Home
            </AnchorLink>
          </li>
          <li className={menu === "about" ? styles.active : ""}>
            <AnchorLink
              className={styles.anchor_link}
              offset={50}
              href="#about"
              onClick={() => handleNavClick("about")}
            >
              About Me
            </AnchorLink>
          </li>
          <li className={menu === "projects" ? styles.active : ""}>
            <AnchorLink
              className={styles.anchor_link}
              offset={50}
              href="#projects"
              onClick={() => handleNavClick("projects")}
            >
              Projects
            </AnchorLink>
          </li>
          <li className={menu === "skills" ? styles.active : ""}>
            <AnchorLink
              className={styles.anchor_link}
              offset={50}
              href="#skills"
              onClick={() => handleNavClick("skills")}
            >
              Skills
            </AnchorLink>
          </li>
          <li className={menu === "education" ? styles.active : ""}>
            <AnchorLink
              className={styles.anchor_link}
              offset={50}
              href="#education"
              onClick={() => handleNavClick("education")}
            >
              Education
            </AnchorLink>
          </li>
        </ul>

        {/* Contact Button */}
        <div
          className={`${styles.nav_connect} ${
            menu === "contact" ? styles.active : ""
          }`}
          onClick={() => handleNavClick("contact")}
        >
          <AnchorLink
            className={styles.anchor_link}
            offset={50}
            href="#contact"
          >
            Contact with me
          </AnchorLink>
        </div>
      </header>
    </>
  );
};

export default Header;
