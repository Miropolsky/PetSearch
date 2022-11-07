import Button from '../../UI/Button/Button'
import styles from './LostSecond.module.scss'
import { Link } from 'react-router-dom'

export default function LostSecond() {
    return (
        <div className={styles.container}>
            <div className={styles.textTitle}>
                <p>2/5: Фотографии</p>
            </div>
            <div className={styles.text}>
                <p>Прикрепите фотографии вашего питомца(это ускорит поиск)</p>
            </div>
            <div className={styles.photos}>
                <p>Фотографии</p>
                {/* <Button text='+ Добавить фото' white width={193} height={34} /> */}
                {/* <form method="post" encType="multipart/form-data"> */}
                    <div className={styles.input_file_row}>
                        <label className={styles.input_file} >
                            <input type="file" name="file[]" multiple accept="image/*"/>		
                            <span>+ Добавить фото</span>
                        </label>
                        <div className={styles.input_file_list}></div>  
                    </div>
                {/* </form> */}
            </div>
            <div className={styles.next}>
                <Link to='/lost/lostThird'><Button text='Далее' width={150} height={34}/></Link>
            </div>
        </div>
    )
}