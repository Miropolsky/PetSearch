import styles from './Main.module.scss'; 
import About from '../../About/About';
import Button from '../../UI/Button/Button'
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <div className={styles.container}>
            <About/>
            <div className={styles.text}>Что случилось?</div>
            <div className={styles.buttons}>
                <Link to='lost/lostFirst'><Button text='Я потерял питомца'></Button></Link>
                <Link to='found/foundFirst'><Button text='Я нашёл питомца' white={true}></Button></Link>
            </div>
        </div>
    )
}