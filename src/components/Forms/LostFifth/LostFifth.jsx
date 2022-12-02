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
            add(formLost);
            navigate('/ads');
        }
    }

    function change(event) {
        // console.log(event.target);
        formUpdate({ ...formLost, [event.target.name]: event.target.value });
    }

    // function postForm() {
    //     axios
    //         .post('http://localhost:8080/api/v1/poster', formLost)
    //         .then((res) => console.log(res))
    //         .catch((err) => console.log(err.response.data));
    // }

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
