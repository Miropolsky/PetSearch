import Button from '../../UI/Button/Button'
import styles from './FoundFourth.module.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ContextFound } from '../../pages/Found/ContextFound'


export default function FoundFourth() {
    const {formLost, formUpdate} = useContext(ContextFound);

    function change(event) {
        formUpdate({...formLost, [event.target.name]: event.target.value});
    }
    return (
        <div className={styles.container}>
            <div className={styles.textTitle}>
                <p>4/5: Описание</p>
            </div>
            <div className={styles.text}>
                <p>Укажите дополнительную информацию, которая может помочь в поиске и возвращении питомца хозяину: порода, окрас, пол, особые приметы, повадки или поведение питомца</p>
            </div>
            <div className={styles.text}>
                <p>Вкупе с фотографиями, эта информация может существенно ускорить поиск владельца</p>
            </div>
            <div className={styles.description}>
                <textarea rows='7' cols='65' onChange={change} name='description'></textarea>
            </div>
            <div className={styles.next}>
                <Link to='/found/foundFifth'><Button text='Далее' width={150} height={34}/></Link>
            </div>
        </div>
    )
}