import ProfileIcon from '../../Icons/Profile/index'
import Basket from '../../Icons/Basket/index'
import Menu from '../../Icons/Menu/index'
import styles from './style.module.css'
import '../../../assets/css/global.css'

const Profile = () => {
  return (
    <div className={styles.ProfileBody}>
        <button className={styles.NavButton}>
            <ProfileIcon />
        </button>

        <button className={styles.NavButton}>
            <Basket />
        </button>

        <button className={styles.NavButton}>
            <Menu />
        </button>
    </div>
  )
}

export default Profile