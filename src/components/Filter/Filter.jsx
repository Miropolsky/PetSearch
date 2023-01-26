import Button from '../UI/Button/Button';
import RadioButton from '../UI/RadioButton/RadioButton';
import styles from './Filter.module.scss';

export default function Filter({
    handleFilter = Function.prototype,
    filterShow = Function.prototype,
    filterAds,
    resetFilterAds,
}) {
    return (
        <div className={styles.container}>
            <div className={styles.line}>
                <div className={styles.close} onClick={filterShow}>
                    Закрыть
                </div>
            </div>
            <div className={styles.line}>
                <div className={styles.nameLine}>Вид</div>
                <div className={styles.buttons}>
                    <RadioButton
                        handleFilter={handleFilter}
                        text='Собака'
                        name='animal'
                        value='dog'
                        width={120}
                        height={30}
                    />

                    <RadioButton
                        handleFilter={handleFilter}
                        text='Кошка'
                        name='animal'
                        value='cat'
                        width={120}
                        height={30}
                    />
                    <RadioButton
                        handleFilter={handleFilter}
                        text='Другое'
                        name='animal'
                        value=''
                        width={120}
                        height={30}
                    />
                </div>
            </div>
            <div className={styles.line}>
                <div className={styles.nameLine}>Пол</div>
                <div className={styles.buttons}>
                    <RadioButton
                        handleFilter={handleFilter}
                        text='Мальчик'
                        name='gender'
                        value='male'
                        width={120}
                        height={30}
                    />
                    <RadioButton
                        handleFilter={handleFilter}
                        text='Девочка'
                        name='gender'
                        value='female'
                        width={120}
                        height={30}
                    />
                    <RadioButton
                        handleFilter={handleFilter}
                        text='Не знаю'
                        name='gender'
                        value=''
                        width={120}
                        height={30}
                    />
                </div>
            </div>
            <div className={styles.line}>
                <div className={styles.nameLine}>Искать</div>
                <div className={styles.buttons}>
                    <RadioButton
                        handleFilter={handleFilter}
                        text='Найденные'
                        name='isLost'
                        value={0}
                        width={120}
                        height={30}
                    />
                    <RadioButton
                        handleFilter={handleFilter}
                        text='Потерянные'
                        name='isLost'
                        value={1}
                        width={120}
                        height={30}
                    />
                </div>
            </div>
            <div className={styles.line}>
                <div className={styles.buttons}>
                    <div onClick={filterAds}>
                        <Button
                            text='Применить фильтры'
                            width={217}
                            height={34}
                        />
                    </div>
                    <div className={styles.cancel} onClick={resetFilterAds}>
                        Сбросить фильтры
                    </div>
                </div>
            </div>
        </div>
    );
}
