import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <Link to='/'>
                    <p className={styles.blockText}>Найди любимца</p>
                </Link>
                <Link to='add-adv'>
                    <p className={styles.text}>Разместить объявления</p>
                </Link>
                <Link to='ads'>
                    <p className={styles.text}>Карта питомцев</p>
                </Link>
            </div>
            <div className={styles.block}>
                <Link to='support'>
                    <p className={styles.text}>Поддержите проект</p>
                </Link>
                <Link to='contacts'>
                    <p className={styles.text}>Контакты</p>
                </Link>
            </div>
        </div>
    );
}
