import styles from './ProfileAd.module.scss';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ListAds } from '../../ListAds';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import kotik from '../../../img/kotik.jpg';
import ImageGallery from 'react-image-gallery';
import { useState } from 'react';
import MapAd from '../MapAd/MapAd';

export default function ProfileAd() {
    const { id } = useParams();
    const { list } = useContext(ListAds);
    const [loading, setLoading] = useState(false);
    const [ad, setAd] = useState({});

    useEffect(() => {
        setAd(list.filter((el) => el.id === +id)[0]);
        setLoading(true);
        // eslint-disable-next-line
    }, []);

    const images = [
        {
            original:
                'https://i.pinimg.com/736x/00/d4/3d/00d43da1ca08eb847f6e018db466a527.jpg',
            thumbnail:
                'https://i.pinimg.com/736x/00/d4/3d/00d43da1ca08eb847f6e018db466a527.jpg',
        },
        {
            original: kotik,
            thumbnail: kotik,
        },
        {
            original: kotik,
            thumbnail: kotik,
        },
    ];
    return (
        <div className={styles.container}>
            {loading && (
                <div className={styles.blocks}>
                    <div className={styles.images}>
                        <ImageGallery
                            items={images}
                            showFullscreenButton={false}
                            showPlayButton={false}
                        />
                    </div>
                    <div className={styles.title}>
                        {ad.isLost ? (
                            ad.animal === 'cat' ? (
                                ad.gender === 'male' ? (
                                    <p>
                                        Потерялся кот, по адресу: {ad.address}
                                    </p>
                                ) : (
                                    <p>
                                        Потерялась кошка, по адресу:{' '}
                                        {ad.address}
                                    </p>
                                )
                            ) : (
                                <p>
                                    Потерялась собака, по адресу: {ad.address}
                                </p>
                            )
                        ) : ad.animal === 'cat' ? (
                            ad.gender === 'male' ? (
                                <p>Найден кот</p>
                            ) : (
                                <p>Найдена кошка, по адресу: {ad.address}</p>
                            )
                        ) : (
                            <p>Найдена собака, по адресу: {ad.address}</p>
                        )}
                    </div>
                    <div className={styles.description}>{ad.description}</div>
                    <div className={styles.map}>
                        <MapAd geoLat={ad.geoLat} geoLon={ad.geoLon} />
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.information}>
                        <div className={styles.informLine}>
                            <div className={styles.informLeft}>
                                Номер объявления
                            </div>
                            <div className={styles.informRight}>{ad.id}</div>
                        </div>
                        <div className={styles.lineLight}></div>
                        <div className={styles.informLine}>
                            <div className={styles.informLeft}>Найден(а)</div>
                            <div className={styles.informRight}>{ad.date}</div>
                        </div>
                        <div className={styles.lineLight}></div>
                        <div className={styles.informLine}>
                            <div className={styles.informLeft}>Имя</div>
                            <div className={styles.informRight}>{ad.name}</div>
                        </div>
                        <div className={styles.lineLight}></div>
                        <div className={styles.informLine}>
                            <div className={styles.informLeft}>
                                Номер телефона
                            </div>
                            <div className={styles.informRight}>{ad.tel}</div>
                        </div>
                        <div className={styles.lineLight}></div>
                    </div>
                </div>
            )}
        </div>
    );
}
