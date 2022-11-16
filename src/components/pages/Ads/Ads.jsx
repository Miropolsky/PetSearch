import styles from './Ads.module.scss'
// import map from '../../../img/map.svg'
import SearchBar from '../../UI/SearchBar/SearchBar'
import cat from '../../../img/cat.svg'
import metka from '../../../img/metka.svg'
import MapYandex from '../../MapYandex/MapYandex'

export default function Ads() {

    return (
        <div className={styles.container}>
            <div className={styles.adsBlock}>
                <div className={styles.founder}>
                    Найдено 10 объявлений
                </div>
                <div className={styles.search}>
                    <SearchBar width={380} height={34}/>
                </div>
                <div className={styles.ads}>
                    {[1,2,3,4,5].map((el) => {return <div key={el} className={styles.ad}>
                        <div className={styles.photo}>
                            <img src={cat} alt='cat' />
                        </div>
                        <div className={styles.textBlock}>
                            <div className={styles.text}>
                                <p>Потерялся кот, окликается на кличку Сажа. Серый, агрессивный, на руки...</p>
                            </div>
                            <div className={styles.features}>
                                <p><strong>Особенности:</strong> Серый, полосатый</p>
                            </div>

                            <div className={styles.adres}>
                                    <div className={styles.adresImg}>
                                        <img src={metka} alt='метка' width={15} height={15}/>
                                        <p>улица Луначарского, 134Б</p>
                                    </div>
                                    <div className={styles.date}>
                                        пн, 10.10.2022
                                    </div>
                            </div>
                        </div>
                    </div> })}
                    
                    
                </div>
                
            </div>
            <div className={styles.map}>
                <MapYandex/>
            </div>
        </div>
    )
}