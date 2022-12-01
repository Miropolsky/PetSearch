import Button from '../../UI/Button/Button';
import styles from './LostFifth.module.scss';
// import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { ContextLost } from '../../pages/Lost/Context';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ListAds } from './../../ListAds';

export default function LostFifth() {
    const { formLost, formUpdate } = useContext(ContextLost);
    const { add } = useContext(ListAds);

    function change(event) {
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
                <input type='tel' name='tel' onChange={change}></input>
            </div>
            <div className={styles.blockText}>
                <p>Email</p>
                <input type='email' name='email' onChange={change}></input>
            </div>
            <div className={styles.next}>
                <Link to='/ads'>
                    <div onClick={() => add(formLost)}>
                        <Button
                            text='Разместить объявление'
                            width={170}
                            height={44}
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
}
