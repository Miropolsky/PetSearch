import Button from '../../UI/Button/Button';
import styles from './LostFourth.module.scss';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ContextLost } from '../../pages/Lost/Context';

export default function LostFourth() {
    const { formLost, formUpdate } = useContext(ContextLost);
    const [countSymbol, setCountSymbol] = useState(0);
    const navigate = useNavigate();

    function change(event) {
        setCountSymbol(event.target.value.length);
        formUpdate({ ...formLost, [event.target.name]: event.target.value });
    }

    function checkForm() {
        if (formLost.description === '') {
            alert('Заполните описание');
        } else if (formLost.description.length > 511) {
            alert('Превышен лимит символов');
        } else {
            navigate('/lost/lostFifth');
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
                    поиске и возвращении вашего питомца: порода, окрас, пол,
                    особые приметы, повадки так же обстоятельства, при которых
                    питомец был утерян
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
                <>{countSymbol}/512</>
            </div>
            <div className={styles.next}>
                <div style={{ width: 150, height: 34 }} onClick={checkForm}>
                    <Button text='Далее' width={150} height={34} />
                </div>
            </div>
        </div>
    );
}
