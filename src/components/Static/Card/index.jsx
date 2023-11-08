import React, { useState } from 'react'
import styles from './style.module.css'

const Card = ({ data }) => {
    const [clothesData,setClothesData] = useState(data)

    console.log(clothesData);
    return (
        <>  
            <div className={styles.cardBody}>
                {
                    data.map((item) => (
                        <div key={item.id} className={styles.card}>
                            <img src={item.img}  alt="" />
                            <p className={styles.cardTitle}>
                                {
                                    item.name
                                }
                            </p>
                            <p className={styles.cardPrice}>
                                ${
                                    item.price
                                }
                            </p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Card