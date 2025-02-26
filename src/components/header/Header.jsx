import styles from './Header.module.css'

const Header = () => {
  return (
      <>
      <header className={ styles.header }>
            {/* Logo */}
              <a href="#" className={styles.logo}>Praveen Chinthala</a>  
               {/* navigation bar */}
              <ul className={ styles.nav }>
                  <li>Home</li>
                  <li>About Me</li>
                  <li>Projects</li>
                  <li>Skills</li>
                  <li>Education</li>
              </ul>
              {/* Button contact */}
              <div className={ styles.nav_connect }>Contact with me</div>

      </header>
      </>
  )
}

export default Header