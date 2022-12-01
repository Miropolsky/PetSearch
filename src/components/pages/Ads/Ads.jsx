import styles from './Ads.module.scss';
// import map from '../../../img/map.svg'
import SearchBar from '../../UI/SearchBar/SearchBar';
// import cat from '../../../img/cat.svg';
// import metka from '../../../img/metka.svg';
import MapYandex from '../../MapYandex/MapYandex';
import Ad from '../../Ad/Ad';
import { useContext } from 'react';
import { ListAds } from '../../ListAds';

export default function Ads() {
    const { list } = useContext(ListAds);
    return (
        <div className={styles.container}>
            <div className={styles.adsBlock}>
                <div className={styles.founder}>
                    Найдено {list.length} объявлений
                </div>
                <div className={styles.search}>
                    <SearchBar width={380} height={34} />
                </div>
                <div className={styles.ads}>
                    {list.map((el, index) => {
                        return <Ad key={index} advertisement={el} />;
                    })}
                </div>
            </div>
            <div className={styles.map}>
                <MapYandex ads={list} />
            </div>
        </div>
    );
}
