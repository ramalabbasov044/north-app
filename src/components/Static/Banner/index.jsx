import styles from './style.module.css'

const Banner = ({ bannerData }) => {
  return (
    <>
        <div className={styles.bannerBody}>
            {
                bannerData.map((item) => (
                    <div key={item.id} className={styles.bannerItem}>
                        <img src={item.img} alt="" />

                        <div>
                            <p className={styles.bannerTitle}>
                                {
                                    item.title
                                }
                            </p>
                            <p className={styles.bannerDesc}>
                                {
                                    item.description
                                }
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default Banner