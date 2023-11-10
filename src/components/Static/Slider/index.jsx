import styles from './style.module.css'

const Slider = () => {
  return (
    <div className={styles.sliderBody}>
      <div className={styles.sliderRight}>
        <p className={styles.sliderMainTitle}>
          stylist picks beat the heat
        </p>
        <button className={styles.shopNowButton}>
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default Slider