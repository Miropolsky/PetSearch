import Button from '../../UI/Button/Button'
import styles from './NewAdv.module.scss'
import pawBlack from '../../../img/icons/pawBlack.svg';
import { Link } from 'react-router-dom';

export default function NewAdv() {
    return (
        <div className={styles.container}>
            <p className={styles.text}>Что случилось?</p>
            <div className={styles.buttons}>
                <Link to='/lost/lostFirst'><Button text='Я потерял питомца' /></Link>
                <Link to='/found/foundFirst'><Button text='Я нашёл питомца' white={true} /></Link>
            </div>
            <img src={pawBlack} alt='logo' width='30' height='30'/>
        </div>
    )
}