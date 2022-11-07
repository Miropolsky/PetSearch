import styles from './Forms.module.scss';
// import { useLocation } from 'react-router-dom';
export default function Forms({title = 'Новое объявление', comp}) {
    // const location = useLocation();
    // console.log(location.pathname);
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <p>{title}</p>
            </div>
            <div className={styles.content}>
                {comp}
            </div>
        </div>
    )
}