
import React from 'react';
import styles from './../styles.module.css'

Switch.defaultProps = {
    value: '',
    label: '',
    readOnly: false,
}

export default function Switch(props) {
    const { value, label, readOnly, hanldeOnChange } = props
    return (
        <div className={styles.switch_wrapper}>
            <label className={styles.pure_material_switch} >
                <input 
                checked={value}
                onChange={(e) => hanldeOnChange(e.target.checked)} 
                className={styles.switch_input} type="checkbox" />
                <span className={styles.switch_span}>{label}</span>
            </label>
        </div>
    )
}