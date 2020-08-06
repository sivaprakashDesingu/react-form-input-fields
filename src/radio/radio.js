
import React from 'react';
import styles from './../styles.module.css'

RadioButton.defaultProps = {
    value: '',
    label: '',
    effect: 'effect_1',
    group: 'group',
    disabled: false,
    readOnly: false,
}

export default function RadioButton(props) {
    const { value, label, group, keys, handleOnChange, valueToBeReturned, disabled } = props
    return (
        <div className={styles.radio_button_wrapper}>
            <label className={styles.pure_material_radio}>
                <input type="radio" name={group}
                    disabled={disabled}
                    checked={value}
                    onChange={(e) => handleOnChange(valueToBeReturned)}
                    className={`${styles.radio_input} ${value ? styles.rbChecked : null}`}
                />
                <span className={styles.label_text}>{label}</span>
            </label>
        </div>
    )
}