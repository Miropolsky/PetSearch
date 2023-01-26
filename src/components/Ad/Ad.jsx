import styles from './Ad.module.scss';
// import cat from '../../img/cat.svg';
import metka from '../../img/metka.svg';
import { useEffect, useState } from 'react';

export default function Ad({ advertisement }) {
    const [img, setImg] = useState();
    // let ImageUrlForBackground;

    useEffect(() => {
        fetchImage();
    });

    const fetchImage = async () => {
        const res = await fetch(
            'http://localhost:8080/ads/file?fileName=' + advertisement.filename
        );
        // ImageUrlForBackground = res;
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
    };

    return (
        <div className={styles.ad}>
            <div className={styles.photo}>
                <img
                    className={styles.frontImg}
                    src={img}
                    alt='cat'
                    height={140}
                    width={140}
                />
            </div>
            <div className={styles.textBlock}>
                <div className={styles.text}>
                    <div className={styles.textTitle}>
                        {advertisement.isLost ? (
                            advertisement.animal === 'cat' ? (
                                advertisement.gender === 'male' ? (
                                    <p>Потерялся кот</p>
                                ) : (
                                    <p>Потерялась кошка</p>
                                )
                            ) : (
                                <p>Потерялась собака</p>
                            )
                        ) : advertisement.animal === 'cat' ? (
                            advertisement.gender === 'male' ? (
                                <p>Нашёлся кот</p>
                            ) : (
                                <p>Нашлась кошка</p>
                            )
                        ) : (
                            <p>Нашлась собака</p>
                        )}
                    </div>
                    {advertisement.description.length < 76 ? (
                        <p>{advertisement.description}</p>
                    ) : (
                        <p>
                            {advertisement.description.substring(0, 73) + '...'}
                        </p>
                    )}
                </div>
                <div className={styles.adres}>
                    <div className={styles.adresImg}>
                        <img src={metka} alt='метка' width={15} height={15} />
                        <p>{advertisement.address}</p>
                    </div>
                    <div className={styles.date}>{advertisement.date}</div>
                </div>
            </div>
        </div>
    );
}
