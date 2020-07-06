import React from 'react';
import styles from './../styles.module.css'

BackgroundEffect.defaultProps = {
    value: '',
    type: 'text',
    placeholder: 'Enter Text',
    standared:'backgroundeffect',
    readOnly: false,
    effect: 'effect_1'
}

export default function BackgroundEffect(props) {
    const { value, type, placeholder, readOnly, handleOnChange, effect,standared } = props
    return (
        <div className={`${styles.textboxwrapper} ${styles[standared]}`}>
            <input
                className={styles[effect]}
                type={type || ''}
                value={value}
                placeholder={placeholder}
                onChange={(e) => handleOnChange(e.target.value)}
                readOnly={readOnly}
            ></input>

            <span className={styles.focus_bg}>
                
            </span>
        </div>
    );
}

