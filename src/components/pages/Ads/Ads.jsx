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
import Filter from '../../Filter/Filter';

export default function Ads() {
    const { list } = useContext(ListAds);
    const [listAdd, setListAdd] = useState(list);
    const [isFilter, setIsFilter] = useState(true);
    const [filter, setFilter] = useState({
        animal: '',
        gender: '',
        isLost: '',
    });

    function handleFilter(e) {
        e.currentTarget.querySelector('input').checked = true;
        const eventInput = e.currentTarget.querySelector('input');
        setFilter({ ...filter, [eventInput.name]: eventInput.value });
    }

    function filterAds() {
        let newList = list;
        if (filter.animal !== '') {
            newList = newList.filter((ad) => ad.animal === filter.animal);
        }
        if (filter.gender !== '') {
            newList = newList.filter((ad) => ad.gender === filter.gender);
        }
        if (filter.isLost !== '') {
            newList = newList.filter((ad) => ad.isLost === !!+filter.isLost);
        }
        setListAdd(newList);
    }

    function resetFilterAds() {
        setListAdd(list);
        let inputs = document.querySelectorAll('input');
        inputs.forEach((el) => (el.checked = false));
    }

    return (
        <div className={styles.container}>
            <div className={styles.adsBlock}>
                <div className={styles.founder}>
                    Найдено {listAdd.length} объявлений
                </div>
                <div className={styles.search}>
                    <SearchBar width={380} height={34} />
                </div>
                <div className={styles.ads}>
                    {listAdd.map((el, index) => {
                        return <Ad key={index} advertisement={el} />;
                    })}
                </div>
            </div>
            <div className={styles.map}>
                <Filter
                    handleFilter={handleFilter}
                    filterAds={filterAds}
                    resetFilterAds={resetFilterAds}
                />
                {/* <MapYandex ads={list} /> */}
                <OpenMap list={listAdd} />
            </div>
        </div>
    );
}
