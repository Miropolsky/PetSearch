import styles from './Lost.module.scss';
// import Forms from '../../Forms/Forms'
// import LostFirst from '../../Forms/LostFirst/LostFirst.jsx'
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ContextLost } from './Context';
import { useEffect, useState } from 'react';
import arrow from '../../../img/icons/arrow.svg';
// import { useState } from 'react';
// import NewAdv from '../../Forms/NewAdv/NewAdv';

export default function Lost() {
    const [formLost, setFormLost] = useState({
        type: 'lost',
        animal: 'cat',
        gender: 'female',
        date: '',
        adres: '',
        description: '',
        name: '',
        tel: '',
        email: '',
    });

    const formUpdate = (form) => {
        setFormLost(form);
    }
    const [curUrl, setCurUrl] = useState(window.location.pathname)
    const location = useLocation();
    useEffect(() => {
        setCurUrl(window.location.pathname)
    }, [location])
    
    function backUrl(curUrl) {
        switch (curUrl) {
            case '/lost/lostSecond':
                return '/lost/lostFirst';
            case '/lost/lostThird':
                return '/lost/lostSecond';
            case '/lost/lostFourth':
                return '/lost/lostThird';
            case '/lost/lostFifth':
                return '/lost/lostFourth';
            default:
                return;
          }
    }
    return (
        <ContextLost.Provider value={{formLost, formUpdate}}>
            <div className={styles.container}>
                <div className={styles.containerIn}>
                    <div className={curUrl.indexOf('First') === -1 ? styles.headForm : styles.headFormFirst }>
                        {curUrl.indexOf('First') === -1 && <Link to={backUrl(curUrl)}><div className={styles.back}><span className={styles.arrow}><img src={arrow} alt='стрелка' /></span> Назад</div></Link>}
                        <Link to='/'><div className={styles.close}>Закрыть</div></Link>
                    </div>
                    <div className={styles.title}>
                        <p>Объявление о пропаже питомца</p>
                    </div>
                    <div className={styles.content}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </ContextLost.Provider>
    )
}