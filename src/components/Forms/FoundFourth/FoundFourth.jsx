import Button from '../../UI/Button/Button';
import styles from './FoundFourth.module.scss';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ContextFound } from '../../pages/Found/ContextFound';

export default function FoundFourth() {
    const { formLost, formUpdate } = useContext(ContextFound);
    const navigate = useNavigate();

    function change(event) {
        formUpdate({ ...formLost, [event.target.name]: event.target.value });
    }

    function checkForm() {
        if (formLost.description === '') {
            alert('Заполните описание');
        } else {
            navigate('/found/foundFifth');
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.textTitle}>
                <p>4/5: Описание</p>
            </div>
            <div className={styles.text}>
                <p>
                    Укажите дополнительную информацию, которая может помочь в
                    поиске и возвращении питомца хозяину: порода, окрас, пол,
                    особые приметы, повадки или поведение питомца
                </p>
            </div>
            <div className={styles.text}>
                <p>
                    Вкупе с фотографиями, эта информация может существенно
                    ускорить поиск владельца
                </p>
            </div>
            <div className={styles.description}>
                <textarea
                    rows='7'
                    cols='65'
                    onChange={change}
                    name='description'
                ></textarea>
            </div>
            <div className={styles.next}>
                <div style={{ width: 150, height: 34 }} onClick={checkForm}>
                    <Button text='Далее' width={150} height={34} />
                </div>
            </div>
        </div>
    );
}
