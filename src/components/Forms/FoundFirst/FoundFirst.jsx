import RadioButton from '../../UI/RadioButton/RadioButton';
import Button from '../../UI/Button/Button';
import styles from './FoundFirst.module.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
// import { useState } from 'react'
import { ContextFound } from '../../pages/Found/ContextFound';

export default function FoundFirst() {
    // const [firstLost, setFirstLost] = useState({
    //     animal: 'cat',
    //     gender: 'female'
    // });
    // console.log(formLost)

    const { formLost, formUpdate } = useContext(ContextFound);

    return (
        <div className={styles.container}>
            <div className={styles.textTitle}>
                <p>1/5: Укажите вид и пол питомца, которого вы нашли</p>
            </div>
            <div className={styles.text}>
                <p>Вид питомца (Указать породу можно будет далее)</p>
            </div>
            <div className={styles.buttons}>
                <RadioButton
                    text='Собака'
                    name='animal'
                    value='dog'
                    width={110}
                    height={34}
                    formUpdate={formUpdate}
                    formLost={formLost}
                />
                {/* form={formUpdate} */}
                <RadioButton
                    text='Кошка'
                    name='animal'
                    value='cat'
                    checked
                    width={110}
                    height={34}
                    formUpdate={formUpdate}
                    formLost={formLost}
                />
                <RadioButton
                    text='Другое'
                    name='animal'
                    value=''
                    width={110}
                    height={34}
                    formUpdate={formUpdate}
                    formLost={formLost}
                />
            </div>
            <div className={styles.text}>
                <p>Пол питомца</p>
            </div>
            <div className={styles.buttons}>
                <RadioButton
                    text='Мальчик'
                    name='gender'
                    value='male'
                    width={110}
                    height={34}
                    formUpdate={formUpdate}
                    formLost={formLost}
                />
                <RadioButton
                    text='Девочка'
                    name='gender'
                    value='female'
                    checked
                    width={110}
                    height={34}
                    formUpdate={formUpdate}
                    formLost={formLost}
                />
                <RadioButton
                    text='Не знаю'
                    name='gender'
                    value=''
                    width={110}
                    height={34}
                    formUpdate={formUpdate}
                    formLost={formLost}
                />
            </div>
            <div className={styles.next}>
                {/* <button onClick={() => formUpdate({animal: 'god', gender: 'ssss'})}>КЛИК</button> */}
                <Link to='/found/foundSecond'>
                    <Button text='Далее' width={150} height={34} />
                </Link>
            </div>
        </div>
    );
}
