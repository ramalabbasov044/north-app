import { Navigate, useNavigate } from "react-router-dom";
import Header from '../../components/Static/Header/index'
import styles from './style.module.css'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setData , setIncrementPrice , setDecrementPrice} from '../../store/getCard'
const Basket = () => {
  let navigate = useNavigate()
  const data = useSelector((state) => state.card.data)
  const count = useSelector((state) => state.card.count)
  const dispatch = useDispatch()
  // console.log(data);
  // let card_obj = localStorage.getItem('card_obj')
  // var data = JSON.parse(card_obj)
  
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
                <th>Original Price</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              {
                data?.map((item,index) => (
                  <tr className={styles.tableTr}>
                    <th>{index + 1}</th>
                    <td className={styles.CardName}><img className={styles.tableImg} src={item.img} />{item.name}</td>
                    <td className={styles.TableTd}>
                        {count * item.price} $
                    </td>
                    <td className={styles.TableTd}>{item.originalPrice} $</td>
                    <td className={styles.TableTdd} id="cardIncrement">
                      <button onClick={() => dispatch(setDecrementPrice())} className={styles.cardFunctionalButon}>
                          -
                      </button>
                        <p>
                          {
                            count
                          }
                        </p>
                      <button onClick={() => dispatch(setIncrementPrice())} className={styles.cardFunctionalButon}>
                          +
                      </button>
                    </td>
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