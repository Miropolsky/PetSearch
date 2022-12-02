import Button from '../../UI/Button/Button';
import styles from './LostThird.module.scss';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ContextLost } from '../../pages/Lost/Context';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

export default function LostThird() {
    const { formLost, formUpdate } = useContext(ContextLost);
    function parseDate(date) {
        const dat = date.split('-');
        return new Date(dat[0], dat[1] - 1, dat[2]);
    }
    const navigate = useNavigate();
    function change(event) {
        if (parseDate(event.target.value) < new Date()) {
            formUpdate({
                ...formLost,
                [event.target.name]: event.target.value,
            });
        } else {
            alert('Неверная дата');
            event.target.value = '';
        }
    }

    function handleAdres(event) {
        formUpdate({
            ...formLost,
            address: event.value,
            geoLat: +event.data.geo_lat,
            geoLon: +event.data.geo_lon,
        });
    }

    function checkForm() {
        if (formLost.date === '' || formLost.address === '') {
            alert('Заполните поля');
        } else {
            navigate('/found/foundFourth');
        }
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
                <div>
                    <input type='date' name='date' onChange={change} />
                </div>
            </div>
            <div className={styles.textAdres}>
                <p>Место потери</p>
                <div style={{ width: 400 }}>
                    <AddressSuggestions
                        // containerClassName={styles.inputAdres}
                        token='8be332587e89276d9ca93894f0a6e31914900579'
                        onChange={handleAdres}
                    />
                </div>
            </div>
            <div className={styles.next}>
                {/* <Link to='/found/foundFourth'> */}
                <div style={{ width: 150, height: 34 }} onClick={checkForm}>
                    <Button text='Далее' width={150} height={34} />
                </div>

                {/* </Link> */}
            </div>
        </div>
    );
}
