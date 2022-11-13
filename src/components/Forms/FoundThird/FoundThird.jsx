import Button from '../../UI/Button/Button'
import styles from './FoundThird.module.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ContextFound } from '../../pages/Found/ContextFound'

export default function FoundThird() {

    const {formLost, formUpdate} = useContext(ContextFound)
    function change(event) {
        formUpdate({...formLost, [event.target.name]: event.target.value});
    }

    return (
        <div className={styles.container}>
            <div className={styles.textTitle}>
                <p>3/5: Время и место находки</p>
            </div>
            <div className={styles.text}>
                <p>Когда и где вы нашли потерянного питомца?</p>
            </div>
            <div className={styles.text}>
                <p>Дата поимки</p>
                <div>
                    <input type='date' name='date' onChange={change}/>
                </div>
            </div>
            <div className={styles.textAdres}>
                <p>Место поимки</p>
                <input placeholder='Екатеринубрг, ул. Ленина, д. 29' type='search' name='adres' onChange={change}/>
            </div>
            <div className={styles.next}>
                <Link to='/found/foundFourth'><Button text='Далее' width={150} height={34}/></Link>
            </div>
        </div>
    )
}