import styles from './AddForm.module.scss';
import Forms from '../../Forms/Forms.jsx'
// import LostFirst from '../../Forms/LostFirst/LostFirst.jsx'
import { Outlet } from 'react-router-dom';
// import NewAdv from '../../Forms/NewAdv/NewAdv';

export default function AddForm() {
    return (
        <div className={styles.container}>
            <Forms comp={<Outlet />}/>
        </div>
    )
}