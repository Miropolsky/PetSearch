import styles from './Ads.module.scss';
// import map from '../../../img/map.svg'
// import SearchBar from '../../UI/SearchBar/SearchBar';
// import cat from '../../../img/cat.svg';
// import metka from '../../../img/metka.svg';
// import MapYandex from '../../MapYandex/MapYandex';
import menu from '../../../img/icons/menu.svg';
import Ad from '../../Ad/Ad';
import { useState, useEffect, useContext } from 'react';
// import { ListAds } from '../../ListAds';
import OpenMap from '../../OpenMap/OpenMap';
import Filter from '../../Filter/Filter';
import { Link } from 'react-router-dom';
import { AddressSuggestions } from 'react-dadata';
import { ListAds } from '../../ListAds';
// import { useEffect } from 'react';

export default function Ads() {
    const [list, setList] = useState([]);
    // const [list, setList] = useState(list);
    // const [listAdd, setListAdd] = useState([]);
    const [isFilter, setIsFilter] = useState(false);
    const [center, setCenter] = useState([55.755864, 37.617698]);
    const [filter, setFilter] = useState({
        animal: '',
        gender: '',
        isLost: '',
    });

    const [curPage, setCurPage] = useState(0);
    const [fetching, setFetching] = useState(false);
    const [totalCount, setTotalCount] = useState(0);
    const [totalCountFilter, setTotalCountFilter] = useState(0);

    // const url = 'http://localhost:8080/ads/all';
    const context = useContext(ListAds);

    useEffect(() => {
        console.log(context);
        setList(context.list);
        setCurPage(0);
        setTotalCount(context.list.length);
        setCenter(context.list[0].geoLat, context.list[0].geoLon);
        // fetch(url + `?page=${curPage}`)
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setList(res.content);
        //         //setListAdd(res.content)
        //         setCurPage((prev) => prev + 1);
        //         setTotalCount(res.totalElements);
        //         setCenter([res.content[0].geo_lat, res.content[0].geo_lon]);
        //     });
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        // if (fetching) {
        //     fetch(url + `?page=${curPage}`)
        //         .then((res) => res.json())
        //         .then((res) => {
        //             setList((prev) => [...prev, ...res.content]);
        //             setCurPage((prev) => prev + 1);
        //         })
        //         .finally(() => setFetching(false));
        // }
        // eslint-disable-next-line
    }, [fetching]);

    function scrollHandler(e) {
        if (
            e.target.scrollHeight - (e.target.scrollTop + window.innerHeight) <
                100 &&
            list.length < totalCount
        ) {
            setFetching(true);
        }
    }

    function handleFilter(e) {
        e.currentTarget.querySelector('input').checked = true;
        const eventInput = e.currentTarget.querySelector('input');
        setFilter({ ...filter, [eventInput.name]: eventInput.value });
    }

    async function filterAds() {
        // setListAdd(list);
        // let url = 'http://localhost:8080/ads/all/';
        // if (filter.animal !== '') {
        //     url += `a`;
        // }
        // if (filter.gender !== '') {
        //     url += `g`;
        // }
        // if (filter.isLost !== '') {
        //     url += `l`;
        // }
        // if (
        //     filter.animal !== '' ||
        //     filter.gender !== '' ||
        //     filter.isLost !== ''
        // )
        //     url += `?`;
        // if (filter.animal !== '') {
        //     url += `animal=${filter.animal}`;
        // }
        // if (filter.gender !== '') {
        //     if (filter.animal !== '') {
        //         url += `&`;
        //     }
        //     url += `gender=${filter.gender}`;
        // }
        // if (filter.isLost !== '') {
        //     if (filter.animal !== '' || filter.gender !== '') {
        //         url += `&`;
        //     }
        //     url += `isLost=${filter.isLost}`;
        // }
        // console.log(url);
        // await fetch(url)
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setList(res.content);
        //         setTotalCountFilter(totalCount);
        //         setTotalCount(res.totalElements);
        //     });
    }

    function resetFilterAds() {
        //setList(listAdd);
        setTotalCount(totalCountFilter);
        setFilter({
            animal: '',
            gender: '',
            isLost: '',
        });
        setCurPage(0);
        // fetch(url + `?page=${curPage}`)
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setList(res.content);
        //         //setListAdd(res.content)
        //         setCurPage((prev) => prev + 1);
        //         setTotalCount(res.totalElements);
        //     });
        let inputs = document.querySelectorAll('input');
        inputs.forEach((el) => (el.checked = false));
    }

    function filterShow() {
        setIsFilter(!isFilter);
    }

    function handleAdres(e) {
        setCenter([e.data.geo_lat, e.data.geo_lon]);
    }

    const inputik = { color: '#494949', padding: '20px' };

    return (
        <div className={styles.container}>
            <div className={styles.adsBlock} onScroll={scrollHandler}>
                <div className={styles.founder}>
                    Найдено {totalCount} объявлений
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
                    {list.map((el, index) => {
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
                <OpenMap list={list} geoLat={center[0]} geoLon={center[1]} />
            </div>
        </div>
    );
}
