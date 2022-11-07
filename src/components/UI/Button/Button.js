import styles from './Buttons.module.scss';
import { ads } from '../../Data';

export default function Button({text, white=false, width, height, formLost}) {
    
    function adsUpdate() {
        console.log(1)
        ads.push(formLost);
    }
    return (
        <div>
            <button onClick={adsUpdate} className={white ? styles.btnWhite : styles.btn} style={{width: width, height: height}}>{text}</button>
        </div>
    )
}