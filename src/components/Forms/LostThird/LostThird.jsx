import Button from '../../UI/Button/Button';
import styles from './LostThird.module.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ContextLost } from '../../pages/Lost/Context';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

export default function LostThird() {
    const { formLost, formUpdate } = useContext(ContextLost);
    function change(event) {
        formUpdate({ ...formLost, [event.target.name]: event.target.value });
    }

    function handleAdres(event) {
        console.log(event.value);
        formUpdate({
            ...formLost,
            address: event.value,
            geoLat: +event.data.geo_lat,
            geoLon: +event.data.geo_lon,
        });
    }

    return (
        <div className={styles.container}>
            <div className={styles.textTitle}>
                <p>3/5: Время и место пропажи</p>
            </div>
            <div className={styles.text}>
                <p>Когда и где вы потеряли питомца?</p>
            </div>
            <div className={styles.text}>
                <p>Дата потери</p>
                <input type='date' name='date' onChange={change} />
            </div>
            <div className={styles.text}>
                <p>Место потери</p>
                <AddressSuggestions
                    token='8be332587e89276d9ca93894f0a6e31914900579'
                    onChange={handleAdres}
                />
            </div>
            <div className={styles.next}>
                <Link to='/lost/lostFourth'>
                    <Button text='Далее' width={150} height={34} />
                </Link>
            </div>
        </div>
    );
}
