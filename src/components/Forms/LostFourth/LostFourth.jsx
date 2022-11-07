import Button from '../../UI/Button/Button'
import styles from './LostFourth.module.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ContextLost } from '../../pages/Lost/Context'


export default function LostFourth() {
    const {formLost, formUpdate} = useContext(ContextLost);

    function change(event) {
        formUpdate({...formLost, [event.target.name]: event.target.value});
    }
    return (
        <div className={styles.container}>
            <div className={styles.textTitle}>
                <p>4/5: Описание</p>
            </div>
            <div className={styles.text}>
                <p>Укажите дополнительную информацию, которая может помочь в поиске и возвращении вашего питомца: порода, окрас, пол, особые приметы, повадки так же обстоятельства, при которых питомец был утерян</p>
            </div>
            <div className={styles.description}>
                <textarea rows='7' cols='65' onChange={change} name='description'></textarea>
            </div>
            <div className={styles.next}>
                <Link to='/lost/lostFifth'><Button text='Далее' width={150} height={34}/></Link>
            </div>
        </div>
    )
}