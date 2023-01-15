import styles from './RadioButton.module.scss';

export default function RadioButton({
    text = '',
    name = 'radiobutton',
    value = '',
    checked = false,
    width,
    height,
    formUpdate = Function.prototype,
    formLost = Function.prototype,
    handleFilter = false,
}) {
    function onClick(event) {
        event.currentTarget.querySelector('input').checked = true;
        const eventInput = event.currentTarget.querySelector('input');
        formUpdate({ ...formLost, [eventInput.name]: eventInput.value });
    }
    return (
        <div
            className={styles.form_radio_btn}
            onClick={handleFilter ? handleFilter : onClick}
            style={{ width: width, height: height }}
        >
            <input
                type='radio'
                name={name}
                value={value}
                defaultChecked={checked}
            />
            <label
                style={{
                    width: width,
                    height: height,
                }}
            >
                {text}
            </label>
        </div>
    );
}
