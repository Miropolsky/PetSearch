import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Linker from '../Linker/Linker';
import Button from '../UI/Button/Button';
import Logo from '../UI/Logo/Logo';
import profile from '../../img/icons/profile.png';
import SearchBar from '../UI/SearchBar/SearchBar';
import { GlobalContex } from '../Layout/GlobalContex';
import styles from './Header.module.scss';

export default function Header() {
    const { isAuthorization } = useContext(GlobalContex);
    return (
        <div className={styles.container}>
            <Link to='/'>
                <Logo />
            </Link>
            <Link to='ads'>
                <Linker className={styles.ads} text='Объявления' />
            </Link>
            <SearchBar width={350} />
            <Link to='/add-adv'>
                <Button text='Создать объявление' />
            </Link>
            {isAuthorization ? (
                <Link to='profile'>
                    <img
                        src={profile}
                        alt='profile'
                        width={38}
                        height={38}
                    ></img>
                </Link>
            ) : (
                <Link to='authorization'>
                    <Linker className={styles.ads} text='Войти' />
                </Link>
            )}
        </div>
    );
}
