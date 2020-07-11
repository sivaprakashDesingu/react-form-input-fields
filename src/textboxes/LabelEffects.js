import React from 'react';
import styles from './../styles.module.css'

LabelEffect.defaultProps = {
    value: '',
    type: 'text',
    placeholder: 'Enter Text',
    standard: 'label_effect',
    readOnly: false,
    effect: 'effect_1'
}

export default function LabelEffect(props) {
    const { value, type, placeholder, readOnly, handleOnChange, effect, standard,keys } = props

    function renderSubClass(value){
        value= value.trim();
        if(value.length >=1){
            return 'has_content';
        }else{
            return  '';
        }
    }

    return (
        <div className={`${styles.textboxwrapper} ${styles[standard]}`}>
            <input 
                id={keys}
                className={`${styles[effect]} ${styles[renderSubClass(value)]}`}
                type={type || ''}
                value={value}
                placeholder={''}
                onChange={(e) => handleOnChange(e.target.value)}
                readOnly={readOnly} />
                <label className={styles.inp_label}>{placeholder}</label>
                <span className={effect === "effect_7" || effect === "effect_8" || effect === "effect_9" ? styles.focus_bg :styles.focus_border}>
                {effect === "effect_4" || effect === "effect_5" || effect === "effect_6" ? <i className={styles.br_s_i}></i> : null}
                </span>
        </div>
    );
}