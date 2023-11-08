import Header from '../../components/Static/Header/index'
import Slider from '../../components/Static/Slider/index'
import Card from '../../components/Static/Card/index'
import Banner from '../../components/Static/Banner/index'
import data from '../../services/data/clothesData'
import bannerData from '../../services/data/bannerData'
import styles from './style.module.css'

const Home = () => {
  
  return (
    <>
      <Header />

      <Slider />

      <div className={styles.cardContainer}> 
          <p className={styles.boldTitle}>
              Discover NEW Arrivals
          </p>
          <p className={styles.headTitle}>
              Recently added shirts!
          </p>

        <Card data={data} />
      </div>

      <Banner bannerData={bannerData} />
    </>
  )
}

export default Home