import Button from '../../UI/Button/Button';
import styles from './FoundFifth.module.scss';
// import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { ContextFound } from '../../pages/Found/ContextFound';
// import { EmailSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import axios from 'axios';
// import { useState } from 'react';

export default function FoundFifth() {
    const { formLost, formUpdate } = useContext(ContextFound);
    // const [email, setEmail] = useState();

    function change(event) {
        formUpdate({ ...formLost, [event.target.name]: event.target.value });
    }

    // function changeEmail(event) {
    //     // formUpdate({ ...formLost, email: event.value });
    //     setEmail(event.value);
    //     console.log(event.value);
    // }
    function postForm() {
        axios
            .post('http://localhost:8080/api/v1/poster', formLost)
            .then((res) => console.log(res))
            .catch((err) => console.log(err.response.data));
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
                <input type='tel' name='tel' onChange={change}></input>
            </div>
            <div className={styles.blockText}>
                <p>Email</p>
                {/* <EmailSuggestions
                    token='8be332587e89276d9ca93894f0a6e31914900579'
                    value={email}
                    onChange={changeEmail}
                /> */}

                <input type='email' name='email' onChange={change}></input>
            </div>
            <div className={styles.next}>
                <div onClick={postForm}>
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
