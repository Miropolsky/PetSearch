import styles from './Buttons.module.scss';

export default function Button({ text, white = false, width, height }) {
    return (
        <div>
            <button
                className={white ? styles.btnWhite : styles.btn}
                style={{ width: width, height: height }}
            >
                {text}
            </button>
        </div>
    );
}
