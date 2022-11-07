import styles from './About.module.scss';
import about from '../../img/about.png'

export default function About() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.imgdiv}></div>
                <img src={about} alt='о нас' className={styles.img}></img>
                <p className={styles.text}>Найди любимца – молодая российская система объявлений, касающихся пропавших и найденных питомцев, а также оставшихся без хозяев приемных животных. 
                    <br></br><br></br><br></br>Мы благодарны вам за вашу помощь и поддержку по возвращению любимцев туда, где их будут любить!
                    <br></br><br></br><br></br>Обязательно посмотрите новые объявления рядом с вами.</p>
            </div>
        </div>
    )
}