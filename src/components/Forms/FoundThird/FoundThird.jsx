import Button from '../../UI/Button/Button';
import styles from './FoundThird.module.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ContextFound } from '../../pages/Found/ContextFound';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

export default function FoundThird() {
    const { formLost, formUpdate } = useContext(ContextFound);
    function change(event) {
        formUpdate({ ...formLost, [event.target.name]: event.target.value });
    }

    function handleAdres(event) {
        formUpdate({
            ...formLost,
            address: event.value,
            coordinate: [event.data.geo_lat, event.data.geo_lon],
        });
    }

    return (
        <div className={styles.container}>
            <div className={styles.textTitle}>
                <p>3/5: Время и место находки</p>
            </div>
            <div className={styles.text}>
                <p>Когда и где вы нашли потерянного питомца?</p>
            </div>
            <div className={styles.text}>
                <p>Дата поимки</p>
                <div>
                    <input type='date' name='date' onChange={change} />
                </div>
            </div>
            <div className={styles.textAdres}>
                <p>Место поимки</p>
                <AddressSuggestions
                    token='8be332587e89276d9ca93894f0a6e31914900579'
                    onChange={handleAdres}
                />
            </div>
            <div className={styles.next}>
                <Link to='/found/foundFourth'>
                    <Button text='Далее' width={150} height={34} />
                </Link>
            </div>
        </div>
    );
}
