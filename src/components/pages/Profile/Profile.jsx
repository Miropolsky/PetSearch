import { useContext } from 'react';
import styles from './Profile.module.scss';
import { GlobalContex } from '../../Layout/GlobalContex';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const { handleAuthorization } = useContext(GlobalContex);
    const navigate = useNavigate();
    function exitUser() {
        handleAuthorization(false);
        navigate('/authorization');
    }
    return (
        <div className={styles.container}>
            <div className={styles.whiteBackground}>
                <div className={styles.containerProfile}>
                    <div className={styles.logoProfile}>Мой профиль</div>
                    <div className={styles.content}>
                        <div className={styles.menu}>
                            <div className={styles.menuItem}>
                                Мои объявления
                            </div>
                            <div
                                className={styles.menuItem}
                                onClick={() => navigate('/add-adv')}
                            >
                                Добавить объявление
                            </div>
                            <div className={styles.menuItem}>Избранное</div>
                            <div className={styles.menuItem}>Настройка</div>
                            <div className={styles.exit} onClick={exitUser}>
                                Выйти
                            </div>
                        </div>
                        <div className={styles.myAds}>
                            <div className={styles.titleAds}>
                                Мои объявления
                            </div>
                            <div className={styles.ads}>
                                У вас пока нет своих объявлений. Можете их
                                добавить тут
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
