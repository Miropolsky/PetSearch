import logo from '../../../img/icons/paw.png';
import styles from './Logo.module.css';

export default function Logo() {
    return (
        <div className={styles.container}>
            <div>
                <img src={logo} alt='logo' width='40' height='40'/>
            </div>
            <div className={styles.text}>
                <p>Найди любимца</p>
            </div> 
        </div>
    )
}