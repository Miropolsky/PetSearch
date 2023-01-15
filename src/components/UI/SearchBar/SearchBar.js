import styles from './SearchBar.module.scss';
// import { AddressSuggestions } from 'react-dadata';

export default function SearchBar({
    width = 400,
    height = 40,
    widthProcent = '',
}) {
    return (
        <div>
            {widthProcent === '' ? (
                <input
                    className={styles.search}
                    placeholder='Адрес, номер объявления'
                    type='search'
                    style={{ width: width, height: height }}
                />
            ) : (
                <input
                    className={styles.search}
                    placeholder='Адрес, номер объявления'
                    type='search'
                    style={{ width: `${widthProcent}%`, height: height }}
                />
            )}
            {/* <input
                className={styles.search}
                placeholder='Адрес, номер объявления'
                type='search'
                style={{ width: width, height: height }}
            /> */}
        </div>
    );
}
