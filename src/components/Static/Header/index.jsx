import Logo from '../../Icons/Logo/index'
import styles from './style.module.css'
import Profile from '../Profile/index'
import About from '../../../pages/about/index'
import Home from '../../../pages/home/index'
import Contact from '../../../pages/contact/index'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
        <div className={styles.headerLeft}>
            <Logo />

            <nav className={styles.headerNav}>
              <ul className={styles.headerListBody}>
                <li className={styles.headerListItem}>
                  <Link to="/">
                    Home
                  </Link>
                </li>

                <li className={styles.headerListItem}>
                  <Link to="/about">
                    About
                  </Link>
                </li>

                <li className={styles.headerListItem}>
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
        </div>

        <div className={styles.headerRight}>
          <Profile />
        </div>
    </header>
  )
}

export default Header