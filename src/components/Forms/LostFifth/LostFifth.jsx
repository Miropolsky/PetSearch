import Button from '../../UI/Button/Button';
import styles from './LostFifth.module.scss';
// import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { ContextLost } from '../../pages/Lost/Context';
// import axios from 'axios';
import { ListAds } from './../../ListAds';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';

export default function LostFifth() {
    const { formLost, formUpdate } = useContext(ContextLost);
    const { add } = useContext(ListAds);

    const navigate = useNavigate();
    function checkForm() {
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; //eslint-disable-line

        if (
            formLost.tel === '' ||
            !re.test(formLost.email) ||
            formLost.name === ''
        ) {
            alert('Заполните форму правильно');
        } else {
            console.log(formLost);
            add(formLost);
            sendData('http://localhost:8080/api/v1/poster', formLost);
            navigate('/ads');
        }
    }

    function change(event) {
        formUpdate({ ...formLost, [event.target.name]: event.target.value });
    }

    async function sendData(url, data) {
        const formData = new FormData();

        for (const name in data) {
            formData.append(name, data[name]);
        }
        console.log(formData.get('img'));
        await fetch(url, {
            method: 'POST',
            body: formData,
        });
    }

    return (
        <div className={styles.container}>
            <div className={styles.textTitle}>
                <p>5/5: Контакты</p>
            </div>
            <div className={styles.text}>
                <p>
                    Оставьте контактную информацию чтобы с вами можно было
                    связаться
                </p>
            </div>
            <div className={styles.blockText}>
                <p>Ваше имя</p>
                <input type='name' name='name' onChange={change}></input>
            </div>
            <div className={styles.blockText}>
                <p>Ваш телефон</p>
                <InputMask
                    onChange={change}
                    mask='+7(999)-999-99-99'
                    alwaysShowMask={true}
                >
                    <input type='tel' name='tel'></input>
                </InputMask>
            </div>
            <div className={styles.blockText}>
                <p>Email</p>
                <input type='email' name='email' onChange={change}></input>
            </div>
            <div className={styles.next}>
                <div style={{ width: 150, height: 34 }} onClick={checkForm}>
                    <Button
                        text='Разместить объявление'
                        width={170}
                        height={44}
                    />
                </div>
            </div>
        </div>
    );
}
