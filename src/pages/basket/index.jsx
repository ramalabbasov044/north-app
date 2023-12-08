import Header from '../../components/Static/Header/index'
import styles from './style.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setIncrementPrice , setDecrementPrice , deleteData , clearData } from '../../store/getCard'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router'

const Basket = () => {
  const [allPrice,setAllPrice] = useState()
  const data = useSelector((state) => state.card.data)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  useEffect(() => {
    var price = 0
    data.map((item) => price += item.count * item.price)
    setAllPrice(price)
  },[data])

  const removeItem = (index) => {
    let newData = data.filter((item,i) => i !== index)
    dispatch(deleteData(newData))
  }

  const showPrice = () => {
      toast.success(`Sifariş edildi Məhsulun məbləği: ${allPrice}$`)
      setTimeout(() => {
        dispatch(clearData([]))
        navigate("/")
      }, 2000);
  }

  return (
    <>
      <ToastContainer />

      <Header />

      <div className={styles.tableBody}>
          {data.length > 0 ? 
              <>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Original Price</th>
                      <th>All Price</th>
                      <th>Count</th>
                      <th>Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((item, index) => (
                      <tr className={styles.tableTr} key={index}>
                        <th>{index + 1}</th>
                        <td className={styles.CardName}><img className={styles.tableImg} src={item.img} />{item.name}</td>
                        <td className={styles.TableTd}>
                          {item.price} $
                        </td>
                        <td className={styles.TableTd}>{item.originalPrice} $</td>
                        <td className={styles.TableTd}>{item.count * item.price} $</td>
                        <td className={styles.TableTdd} id="cardIncrement">
                          <button onClick={() => dispatch(setDecrementPrice(index))} className={styles.cardFunctionalButon}>
                            -
                          </button>
                          <p>
                            {item.count}
                          </p>
                          <button onClick={() => dispatch(setIncrementPrice(index))} className={styles.cardFunctionalButon}>
                            +
                          </button>
                        </td>
                        <td onClick={(() => removeItem(index))} className={styles.TableTd}>
                          Del
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className={styles.orderButtonBody}>
                  <button disabled={data.length > 0 ? false : true} onClick={showPrice} className={styles.orderButton}>
                      Sifariş Et
                  </button>
                </div>
              </> 
            : 
              <p className={styles.notTitle}>
                Hələki Sizin Heç bir Məhsulunuz Yoxdur
              </p>
          }
      </div>
    </>
  )
}

export default Basket