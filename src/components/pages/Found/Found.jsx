import styles from './Found.module.scss';
// import Forms from '../../Forms/Forms'
// import LostFirst from '../../Forms/LostFirst/LostFirst.jsx'
import { Outlet } from 'react-router-dom';
import { ContextFound } from './ContextFound'
import { useState } from 'react';
// import { useState } from 'react';
// import NewAdv from '../../Forms/NewAdv/NewAdv';

export default function Found() {
    const [formLost, setFormLost] = useState({
        type: 'found',
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
    return (
        <ContextFound.Provider value={{formLost, formUpdate}}>
            <div className={styles.container}>
                <div className={styles.containerIn}>
                    <div className={styles.title}>
                        <p>Объявление о находке питомца</p>
                    </div>
                    <div className={styles.content}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </ContextFound.Provider>
    )
}