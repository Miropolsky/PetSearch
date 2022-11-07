import { Link } from 'react-router-dom';
import Linker from '../Linker/Linker';
import Button from '../UI/Button/Button';
import Logo from '../UI/Logo/Logo';
import SearchBar from '../UI/SearchBar/SearchBar';
import styles from './Header.module.scss';

export default function Header() {
    return (
        <div className={styles.container}>
            <Link to='/'><Logo /></Link>
            <Link to='ads'><Linker className={styles.ads} text='Объявления' /></Link>
            <SearchBar />
            <Link to='/add-adv'><Button text='Создать объявление'/></Link>
            <Linker className={styles.ads} text='Войти' />
        </div>
    )
}