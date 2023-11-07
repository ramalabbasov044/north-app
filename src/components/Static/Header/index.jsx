import styles from './style.module.css'
import Logo from '../../Icons/Logo/index'

const Header = () => {
  return (
    <header className={styles.headerContainer}>


        <div className={styles.headerLeft}>
            <Logo />

            <nav>
              <ul>
                <li>
                  <a href="">
                    Home
                  </a>
                </li>
                <li>
                  <a href="">
                    About
                  </a>
                </li>
                <li>
                  <a href="">
                    contact us
                  </a>
                </li>
              </ul>
            </nav>
        </div>

        <div className={styles.headerRight}>
        </div>

    </header>
  )
}

export default Header