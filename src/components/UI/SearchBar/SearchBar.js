import styles from './SearchBar.module.scss';

export default function SearchBar({width = 400, height = 40}) {
    return (
        <div >
            <input className={styles.search} placeholder='Адрес, номер объявления, порода и пр.' type='search' style={{width: width, height: height}}/>
        </div>
    )
}