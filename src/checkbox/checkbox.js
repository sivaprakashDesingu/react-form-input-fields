
import React from 'react';
import styles from './../styles.module.css'

CheckBox.defaultProps = {
    value: '',
    label: '',
    effect: 'effect_1',
    disabled: false,
    readOnly: false,
}

export default function CheckBox(props) {
    const { value, label, effect, keys, hanldeOnChange, valueToBeReturned, disabled } = props
    return (

        <div className={styles.checkbox_wrapper}>
            {effect === 'effect_1' ?
                <div className={styles[effect]}>
                    <label className={styles.pure_material_checkbox} >
                        <input
                            disabled={disabled}
                            checked={value}
                            onChange={(e) => hanldeOnChange(valueToBeReturned)}
                            className={`${styles.checkbox_input} ${value ? styles.cbChecked : null}`}
                            type="checkbox" />
                        <span className={styles.checkbox_span}>{label}</span>
                    </label>
                </div>
                : effect === 'effect_2' ?
                    <div className={styles[effect]}>
                        <label className={styles.pure_material_checkbox}>
                            <input
                                type="checkbox"
                                disabled={disabled}
                                checked={value}
                                onChange={(e) => hanldeOnChange(valueToBeReturned)}
                                id={keys}
                                className={`${styles.checkbox_input} ${value ? styles.cbChecked : null}`}
                            />
                            <span class={styles.checkbox_material}>
                                <span class={styles.check}></span>
                            </span> 
                            <span className={styles.label_text}>{label}</span>
                        </label>
                    </div> : <p>You have passed invalid effect value</p>}
        </div>

    )
}