import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './style.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setData } from '../../../store/getCard'

const Card = ({ data }) => {
    let navigate = useNavigate()
    const dispatch = useDispatch()

    const sendData = (item) => {
        dispatch(setData(item))
        navigate("/basket")
    }

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
                            <div className={styles.priceBody}>
                                <p className={styles.cardOrijinalPrice}>
                                    {
                                        item.originalPrice
                                    } $
                                </p>
                                <p className={styles.cardPrice}>
                                    {
                                        item.price
                                    } $
                                </p>
                            </div>

                            <button onClick={() => sendData(item)} className={styles.addToCardButton}>
                                Add To Card
                            </button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Card