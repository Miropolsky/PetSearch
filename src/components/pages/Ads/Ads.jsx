import styles from './Ads.module.scss';
// import map from '../../../img/map.svg'
import SearchBar from '../../UI/SearchBar/SearchBar';
// import cat from '../../../img/cat.svg';
// import metka from '../../../img/metka.svg';
// import MapYandex from '../../MapYandex/MapYandex';
import menu from '../../../img/icons/menu.svg';
import Ad from '../../Ad/Ad';
import { useContext, useState, useEffect } from 'react';
import { ListAds } from '../../ListAds';
import OpenMap from '../../OpenMap/OpenMap';
import Filter from '../../Filter/Filter';
import { Link } from 'react-router-dom';
import { AddressSuggestions } from 'react-dadata';
// import { useEffect } from 'react';

export default function Ads() {
    const { list } = useContext(ListAds);
    // const [list, setList] = useState(list);
    const [listAdd, setListAdd] = useState(list);
    const [isFilter, setIsFilter] = useState(false);
    const [center, setCenter] = useState([55.702868, 55.530865]);
    const [filter, setFilter] = useState({
        animal: '',
        gender: '',
        isLost: '',
    });

    // const [curPage, setCurPage] = useState(1);
    // const [fetching, setFetching] = useState(true);
    // const [totalCount, setTotalCount] = useState(0);

    // const url = 'http://localhost:8080/api/v1/poster';
    // useEffect(() => {
    //     if (fetching) {
    //         fetch(url + `page=${curPage}`)
    //             .then((res) => res.json())
    //             .then((res) => {
    //                 setList(res);
    //                 setCurPage((prev) => prev + 1);
    //                 setTotalCount(res.total);
    //             })
    //             .finally(() => setFetching(false));
    //     }
    // }, [fetching]);

    // useEffect(() => {
    //     document.addEventListener('scroll', scrollHandler);
    //     return function () {
    //         document.removeEventListener('scroll', scrollHandler);
    //     };
    // }, []);

    function scrollHandler(e) {
        // console.log(e);
        // console.log('clientheight', e.target.clientHeight);
        // console.log('offsetTop', e.target.offsetTop);
        // console.log('scrollTop', e.target.scrollTop);
        // console.log(e.target.lastChild.clientHeight);
        // console.log(window.innerHeight);
        if (
            e.target.scrollHeight - (e.target.scrollTop + window.innerHeight) <
            100
        ) {
            // setFetching(true)
        }
    }

    function handleFilter(e) {
        e.currentTarget.querySelector('input').checked = true;
        const eventInput = e.currentTarget.querySelector('input');
        setFilter({ ...filter, [eventInput.name]: eventInput.value });
    }

    async function filterAds() {
        let newList = list;
        // console.log(filter.isLost === '0');
        // await fetch(url + '/all')
        //     .then((res) => res.json())
        //     .then((res) => console.log(res));

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

    function filterShow() {
        setIsFilter(!isFilter);
    }

    function handleAdres(e) {
        console.log(e.data.geo_lon);
        console.log(e.data.geo_lat);
        // setCenter([+event.data.geo_lat, +event.data.geo_lon]);
    }

    const inputik = { color: '#494949', padding: '20px' };

    return (
        <div className={styles.container}>
            <div className={styles.adsBlock} onScroll={scrollHandler}>
                <div className={styles.founder}>
                    Найдено {listAdd.length} объявлений
                </div>
                <div className={styles.search}>
                    {/* <SearchBar widthProcent={100} height={34} /> */}
                    <AddressSuggestions
                        // containerClassName={styles.inputAdres}
                        token='8be332587e89276d9ca93894f0a6e31914900579'
                        onChange={handleAdres}
                        inputProps={{
                            placeholder: 'Адрес, номер объявления',
                            className: styles.inputik,
                        }}
                        inp={inputik}
                    />

                    <img
                        onClick={filterShow}
                        src={menu}
                        alt='menu'
                        height={30}
                    />
                </div>
                <div className={styles.ads}>
                    {listAdd.map((el, index) => {
                        return (
                            <Link
                                className={styles.ad}
                                key={el.id}
                                to={`${el.id}`}
                            >
                                <Ad key={el.id} advertisement={el} />
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className={styles.map}>
                {isFilter && (
                    <Filter
                        handleFilter={handleFilter}
                        filterAds={filterAds}
                        resetFilterAds={resetFilterAds}
                        filterShow={filterShow}
                    />
                )}
                <OpenMap list={listAdd} center={center} />
            </div>
        </div>
    );
}
