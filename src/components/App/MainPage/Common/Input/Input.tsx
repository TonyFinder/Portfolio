import styles from './Input.module.scss'
import React from 'react';

type InputPropsType = {
    placeholder: string
    icon: string
}

export const Input: React.FC<InputPropsType> = ({placeholder, icon}) => {

    return (
        <div className={styles.input}>
            <i className={icon}></i>
            <div className={styles.textField}>
                <input type={'text'}/>
                <label>{placeholder}</label>
            </div>
        </div>
    )
}