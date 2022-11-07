import styles from './Linker.module.scss';

export default function Linker({text}) {
    return (
        <div className={styles.text}>
            {text}
        </div>
    )
}