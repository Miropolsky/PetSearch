import styles from './SupportProject.module.scss';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import RadioButton from '../../UI/RadioButton/RadioButton';

export default function SupportProject() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.titleBlock}>
                    <div className={styles.title}>Поддержать проект</div>
                    <div className={styles.titleText}>
                        Ваше регулярное пожертвование поможет нам оставатсья на
                        плаву и помочь большему количеству пропавших питомцев
                        вернуться домой
                    </div>
                </div>
                <div className={styles.buttons}>
                    <RadioButton text='300 Р' width={100} height={30} />
                    <RadioButton text='500 Р' width={100} height={30} />
                    <RadioButton text='1000 Р' width={100} height={30} />
                    <RadioButton text='Другая' width={200} height={30} />
                </div>
                <div className={styles.blockText}>
                    <div>
                        <input
                            type='email'
                            placeholder='Ваш e-mail(необязательно)'
                        />
                    </div>
                    <textarea
                        placeholder='Ваше сообщение'
                        rows='7'
                        cols='65'
                    ></textarea>
                </div>
                <div className={styles.next}>
                    <Link to='/lost/lostFifth'>
                        <Button text='Перевести' width={150} height={34} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
