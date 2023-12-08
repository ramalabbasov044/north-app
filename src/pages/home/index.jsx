import Header from '../../components/Static/Header/index'
import Card from '../../components/Static/Card/index'
import data from '../../services/data/clothesData'
import styles from './style.module.css'

const Home = () => {
  return (
    <>
      <Header />

      <div className={styles.cardContainer}> 
        <Card data={data} />
      </div>
    </>
  )
}

export default Home