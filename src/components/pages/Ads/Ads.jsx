import styles from './Ads.module.scss';
// import map from '../../../img/map.svg'
import SearchBar from '../../UI/SearchBar/SearchBar';
// import cat from '../../../img/cat.svg';
// import metka from '../../../img/metka.svg';
import MapYandex from '../../MapYandex/MapYandex';
import Ad from '../../Ad/Ad';

export default function Ads() {
    const ads = [
        {
            id: 0,
            isLost: true,
            animal: 'cat',
            gender: 'female',
            date: '10.12.2022',
            features: 'Серый, полосатый',
            address: 'г. Екатеринбург, ул. Ленина, д. 59',
            geoLat: 55.68,
            geoLon: 37.58,
            description:
                'Потерялся кот, окликается на кличку Сажа. Серый, агрессивный, на руки',
            name: 'Василий',
            tel: '+7999999999',
            email: 'example@mail.ru',
        },
        {
            id: 1,
            isLost: false,
            animal: 'dog',
            features: 'Черно-белый окрас',
            gender: 'female',
            date: '07.11.2022',
            address: 'г. Екатеринбург, ул. Мира, д. 52',
            geoLat: '56.34',
            geoLon: '55.28',
            description:
                'Потерялся котенок, милый, дружелюбный, окликается на "Васька"',
            name: 'Петр',
            tel: '+7999999999',
            email: 'example@mail.ru',
        },
        {
            id: 2,
            isLost: true,
            animal: 'cat',
            features: 'Рыжий',
            gender: 'male',
            date: '01.02.2022',
            address: 'г. Екатеринбург, ул. Малышева, д. 129',
            geoLat: '56.34',
            geoLon: '55.28',
            description:
                'Потерялся кот, окликается на кличку Сажа. Серый, агрессивный, на руки',
            name: 'Василий',
            tel: '+7999999999',
            email: 'example@mail.ru',
        },
        {
            id: 3,
            isLost: true,
            animal: 'cat',
            features: 'Рыжий',
            gender: 'male',
            date: '01.02.2022',
            address: 'г. Екатеринбург, ул. Малышева, д. 129',
            geoLat: '56.34',
            geoLon: '55.28',
            description:
                'Потерялся кот, окликается на кличку Сажа. Серый, агрессивный, на руки',
            name: 'Василий',
            tel: '+7999999999',
            email: 'example@mail.ru',
        },
        {
            id: 4,
            isLost: true,
            animal: 'cat',
            features: 'Рыжий',
            gender: 'male',
            date: '01.02.2022',
            address: 'г. Екатеринбург, ул. Малышева, д. 129',
            geoLat: '56.34',
            geoLon: '55.28',
            description:
                'Потерялся кот, окликается на кличку Сажа. Серый, агрессивный, на руки',
            name: 'Василий',
            tel: '+7999999999',
            email: 'example@mail.ru',
        },
        {
            id: 5,
            isLost: true,
            animal: 'cat',
            features: 'Рыжий',
            gender: 'male',
            date: '01.02.2022',
            address: 'г. Екатеринбург, ул. Малышева, д. 129',
            geoLat: '56.34',
            geoLon: '55.28',
            description:
                'Потерялся кот, окликается на кличку Сажа. Серый, агрессивный, на руки',
            name: 'Василий',
            tel: '+7999999999',
            email: 'example@mail.ru',
        },
    ];
    return (
        <div className={styles.container}>
            <div className={styles.adsBlock}>
                <div className={styles.founder}>
                    Найдено {ads.length} объявлений
                </div>
                <div className={styles.search}>
                    <SearchBar width={380} height={34} />
                </div>
                <div className={styles.ads}>
                    {ads.map((el, index) => {
                        return <Ad key={index} advertisement={el} />;
                    })}
                </div>
            </div>
            <div className={styles.map}>
                <MapYandex ads={ads} />
            </div>
        </div>
    );
}
