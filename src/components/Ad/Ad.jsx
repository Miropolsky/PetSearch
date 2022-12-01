import styles from './Ad.module.scss';
import cat from '../../img/cat.svg';
import metka from '../../img/metka.svg';

export default function Ad({ advertisement }) {
    return (
        <div className={styles.ad}>
            <div className={styles.photo}>
                <img src={cat} alt='cat' />
            </div>
            <div className={styles.textBlock}>
                <div className={styles.text}>
                    <p>{advertisement.description}</p>
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
