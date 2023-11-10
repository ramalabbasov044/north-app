import clothesData from '../../services/data/clothesData';
import Header from '../../components/Static/Header/index'
import Dropdown from '../../components/Static/Dropdown/index'
import { useParams , useNavigate } from 'react-router-dom';
import { useEffect, useState} from 'react';
import styles from './style.module.css'

const ProductDetail = () => {
  const [size,setSize] = useState("")
  let params = useParams();
  const navigate = useNavigate()


  var c_item = clothesData.filter((item) => item.id == params.id)[0];
  let addCard = () => {
    let lastData = JSON.parse(localStorage.getItem('card_obj')) || [];
  
    let newItem = {
      "size": size ? size : "xl",
      "id": c_item.id,
      "img": c_item.img,
      "name": c_item.name,
      "price": c_item.price,
      "description": c_item.description,
      "originalPrice": c_item.originalPrice,
    };
  
    lastData.push(newItem);
  
    localStorage.setItem('card_obj', JSON.stringify(lastData));
    navigate("/basket");
  }
  
  let sizeFunc = (sizes) => {
    setSize(sizes)
  }

  let renderData = () => {
    return ( 
      <div className={styles.productDetailContainer}>
          <div className={styles.productLeft}>
            <img className={styles.productImg} alt={c_item.id} src={c_item.img} />
          </div>
          
          <div className={styles.productRight}>
              <p className={styles.headTitle}>
                {
                  c_item.name
                }
              </p>

              <div className={styles.priceBox}>
                  <p className={styles.originalPrice}>
                    ${
                      c_item.originalPrice
                    }.00
                  </p>
                  <p className={styles.price}>
                    ${
                      c_item.price
                    }.00
                  </p>
              </div>

              <p className={styles.description}>
                {
                  c_item.description
                }
              </p>

              <Dropdown data={c_item.sizes} sizeFunc={sizeFunc} /> 

              <button onClick={addCard} className={styles.addButton}>Add to Cart</button>
          </div>
      </div>
    )
  };

  return ( 
    <>
      <Header />
      {
        renderData()
      }
    </>
  )
};

export default ProductDetail;
