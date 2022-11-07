import styles from './Contacts.module.scss';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button/Button';

export default function Contacts() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.titleBlock}>
                    <div className={styles.title}>
                        Контакты
                    </div>
                    <div className={styles.titleText}>
                    Если у вас появились какие-либо вопросы, пожелания или предложения - заполните форму обратной связи ниже
                    </div>
                </div>
                <div className={styles.blockText}>
                    <div>
                        Как к вам обращаться?
                    </div>
                    <div>
                        <input type='text'/>
                    </div>
                </div>
                <div className={styles.blockText}>
                    <div>
                    Укажите E-mail на который хотите получить ответ
                    </div>
                    <div>
                        <input type='email'/>
                    </div>
                </div>
                <div className={styles.blockText}>
                    <div>
                        Укажиье ваш телефон
                    </div>
                    <div>
                        <input type='text'/>
                    </div>
                </div>
                <div className={styles.blockText}>
                    <div>
                        Ваше сообщение
                    </div>
                    <div className={styles.description}>
                        <textarea rows='7' cols='65'></textarea>
                    </div>
                </div>
                <div className={styles.next}>
                <Link to='/lost/lostFifth'><Button text='Отправить' width={150} height={34}/></Link>
            </div>
            </div>
        </div>
    )
}