import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './style.module.css'

const Card = ({ data }) => {
    let navigate = useNavigate()

    return (
        <>  
            <div className={styles.cardBody}>
                {
                    data.map((item) => (
                        <div onClick={() => navigate(`/product-detail/${item.id}`)} key={item.id} className={styles.card}>
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