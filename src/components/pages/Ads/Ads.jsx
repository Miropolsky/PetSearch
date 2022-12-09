import styles from './Ads.module.scss';
// import map from '../../../img/map.svg'
import SearchBar from '../../UI/SearchBar/SearchBar';
// import cat from '../../../img/cat.svg';
// import metka from '../../../img/metka.svg';
// import MapYandex from '../../MapYandex/MapYandex';
import Ad from '../../Ad/Ad';
import { useContext, useState } from 'react';
import { ListAds } from '../../ListAds';
import OpenMap from '../../OpenMap/OpenMap';

export default function Ads() {
    const { list } = useContext(ListAds);
    const [listAdd, setListAdd] = useState(list);
    const filterAnimal = () => {
        setListAdd(list.filter((ad) => ad.animal === 'dog'));
    };
    const filterAnimal2 = () => {
        setListAdd(list.filter((ad) => ad.animal === 'cat'));
    };
    return (
        <div className={styles.container}>
            <div className={styles.adsBlock}>
                <div className={styles.founder}>
                    Найдено {listAdd.length} объявлений
                </div>
                <div className={styles.search}>
                    <SearchBar width={380} height={34} />
                    <button onClick={filterAnimal}>клик только собаки</button>
                    <button onClick={filterAnimal2}>клик только собаки</button>
                </div>
                <div className={styles.ads}>
                    {listAdd.map((el, index) => {
                        return <Ad key={index} advertisement={el} />;
                    })}
                </div>
            </div>
            <div className={styles.map}>
                {/* <MapYandex ads={list} /> */}
                <OpenMap list={listAdd} />
            </div>
        </div>
    );
}
