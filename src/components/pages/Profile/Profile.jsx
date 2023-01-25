import styles from './Profile.module.scss';

export default function Profile() {
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
                            <div className={styles.menuItem}>
                                Добавить объявление
                            </div>
                            <div className={styles.menuItem}>Избранное</div>
                            <div className={styles.menuItem}>Настройка</div>
                            <div className={styles.exit}>Выйти</div>
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
