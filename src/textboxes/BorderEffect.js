import React from 'react';
import styles from './../styles.module.css'

BorderEffect.defaultProps = {
    value: '',
    type: 'text',
    placeholder: 'Enter Text',
    standard:'bordereffect',
    readOnly: false,
    effect: 'effect_1'
}

export default function BorderEffect(props) {
    const { value, type, placeholder, readOnly, handleOnChange, effect,standard } = props
    return (
        <div className={`${styles.textboxwrapper} ${styles[standard]}`}>
            <input
                className={styles[effect]}
                type={type || ''}
                value={value}
                placeholder={placeholder}
                onChange={(e) => handleOnChange(e.target.value)}
                readOnly={readOnly}
            ></input>

            <span className={styles.focus_border}>
                {effect === "effect_9" || effect === "effect_8" || effect === "effect_7" ? <i className={styles.br_s_i}></i> : null}
            </span>
        </div>
    );
}

