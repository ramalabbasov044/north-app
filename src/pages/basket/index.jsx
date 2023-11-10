import { Navigate, useNavigate } from "react-router-dom";
import Header from '../../components/Static/Header/index'
import styles from './style.module.css'
import { useState } from 'react'
const Basket = () => {
  let navigate = useNavigate()
  let card_obj = localStorage.getItem('card_obj')
  var data = JSON.parse(card_obj)
  
  return (
    <>
      <Header />

      <div className={styles.tableBody}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Price</th>
                <th>Size</th>
                <th>Original Price</th>
              </tr>
            </thead>
            <tbody>
              {
                data?.map((item,index) => (
                  <tr className={styles.tableTr} onClick={() => navigate(`/product-detail/${item.id}`)}>
                    <th>{index + 1}</th>
                    <td className={styles.CardName}><img className={styles.tableImg} src={item.img} />{item.name}</td>
                    <td className={styles.TableTd}>{item.price}</td>
                    <td className={styles.TableTd}>{item.size}</td>
                    <td className={styles.TableTd}>{item.originalPrice}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
      </div>
    </>
  )
}

export default Basket