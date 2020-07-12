import React from 'react';
import styles from './../styles.module.css'

BackgroundEffect.defaultProps = {
    value: '',
    type: 'text',
    placeholder: 'Enter Text',
    standard:'backgroundeffect',
    readOnly: false,
    effect: 'effect_1'
}

export default function BackgroundEffect(props) {
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

            <span className={styles.focus_bg}>  </span>
        </div>
    );
}

