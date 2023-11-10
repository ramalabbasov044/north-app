import styles from './style.module.css'
import Arrow from '../../Icons/Arrow/index'
import { useState } from 'react'

const Dropdown = ({ data , sizeFunc }) => {
    const [active,setActive] = useState(false)
    const [title,setTitle] = useState("xl")

    let handleActive = () => {
        setActive(!active)
    }

    let selectItem = (size) => {
        setTitle(size)
        setActive(false)
        sizeFunc(size)
    }

    
    return (
        <div className={styles.dropdownBox}>
            <div onClick={handleActive} className={styles.dropdownActiveItem}>
                <p className={styles.dropdownActiveTitle}>
                    {
                        title
                    }
                </p>

                <Arrow />
            </div>

                {
                    data.map((item) => 
                        <div key={item} onClick={() => selectItem(item)} className={active ? styles.dropdownItem : styles.dropdownItemNoActive}>
                            {
                                item
                            }
                        </div>
                    )
                }
            </div>
    )
}

export default Dropdown