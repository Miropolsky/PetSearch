import styles from './Lost.module.scss';
// import Forms from '../../Forms/Forms'
// import LostFirst from '../../Forms/LostFirst/LostFirst.jsx'
import { Outlet } from 'react-router-dom';
import { ContextLost } from './Context';
import { useState } from 'react';
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
    return (
        <ContextLost.Provider value={{formLost, formUpdate}}>
            <div className={styles.container}>
                <div className={styles.containerIn}>
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