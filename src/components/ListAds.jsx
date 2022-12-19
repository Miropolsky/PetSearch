import { createContext } from 'react';

export const ListAds = createContext();

export const CostumList = (props) => {
    const ads = [
        {
            id: 0,
            isLost: true,
            animal: 'cat',
            gender: 'female',
            date: '10.12.2022',
            features: 'Серый, полосатый',
            address: 'г. Екатеринбург, ул. Ленина, д. 59',
            geoLat: '56.34',
            geoLon: '55.18',
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
            geoLat: '56.24',
            geoLon: '55.28',
            description:
                'Потерялась собачка ДОГ, милый, дружелюбный, окликается на "ДОГ"',
            name: 'Петр',
            tel: '+7999999999',
            email: 'example@mail.ru',
        },
        {
            id: 2,
            isLost: false,
            animal: 'cat',
            features: 'Рыжий',
            gender: 'male',
            date: '01.02.2022',
            address: 'г. Екатеринбург, ул. Малышева, д. 129',
            geoLat: '56.04',
            geoLon: '55.28',
            description:
                'Потерялся кот, окликается на кличку Сажа. Серый, агрессивный, на руки не дается',
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
            geoLat: '56.21',
            geoLon: '55.88',
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
            geoLat: '56.94',
            geoLon: '55.08',
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
            geoLat: '56.22',
            geoLon: '54.81',
            description:
                'Потерялся кот, окликается на кличку Сажа. Серый, агрессивный, на руки',
            name: 'Василий',
            tel: '+7999999999',
            email: 'example@mail.ru',
        },
    ];

    const removeAd = (id) => {
        ads.filter((ad) => ad.id !== id);
    };

    const add = (ad) => {
        ads.push(ad);
    };

    const value = {
        list: ads,
        removeAd,
        add,
    };
    return <ListAds.Provider value={value}>{props.children}</ListAds.Provider>;
};
