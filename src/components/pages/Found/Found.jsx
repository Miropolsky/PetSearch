import styles from './Found.module.scss';
// import Forms from '../../Forms/Forms'
// import LostFirst from '../../Forms/LostFirst/LostFirst.jsx'
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ContextFound } from './ContextFound';
import { useState } from 'react';
import arrow from '../../../img/icons/arrow.svg';
import { useEffect } from 'react';
// import { useState } from 'react';
// import NewAdv from '../../Forms/NewAdv/NewAdv';

export default function Found() {
    const [formLost, setFormLost] = useState({
        isLost: false,
        animal: 'cat',
        gender: 'female',
        date: '',
        address: '',
        geoLat: '',
        geoLon: '',
        description: '',
        name: '',
        tel: '',
        email: '',
    });
    const formUpdate = (form) => {
        setFormLost(form);
    };
    const [curUrl, setCurUrl] = useState(window.location.pathname);
    const location = useLocation();
    useEffect(() => {
        setCurUrl(window.location.pathname);
    }, [location]);

    function backUrl(curUrl) {
        switch (curUrl) {
            case '/found/foundSecond':
                return '/found/foundFirst';
            case '/found/foundThird':
                return '/found/foundSecond';
            case '/found/foundFourth':
                return '/found/foundThird';
            case '/found/foundFifth':
                return '/found/foundFourth';
            default:
                return;
        }
    }

    return (
        <ContextFound.Provider value={{ formLost, formUpdate }}>
            <div className={styles.container}>
                <div className={styles.containerIn}>
                    <div
                        className={
                            curUrl.indexOf('First') === -1
                                ? styles.headForm
                                : styles.headFormFirst
                        }
                    >
                        {curUrl.indexOf('First') === -1 && (
                            <Link to={backUrl(curUrl)}>
                                <div className={styles.back}>
                                    <span className={styles.arrow}>
                                        <img src={arrow} alt='стрелка' />
                                    </span>{' '}
                                    Назад
                                </div>
                            </Link>
                        )}

                        <Link to='/'>
                            <div className={styles.close}>Закрыть</div>
                        </Link>
                    </div>
                    <div className={styles.title}>
                        <p>Объявление о находке питомца</p>
                    </div>
                    <div className={styles.content}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </ContextFound.Provider>
    );
}
