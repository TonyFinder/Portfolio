import styles from './Input.module.scss'
import React, {InputHTMLAttributes} from 'react';

type InputPropsType = {
    placeholder: string
    icon: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<InputPropsType> = ({placeholder, icon, ...restProps}) => {

    return (
        <div className={styles.input}>
            <i className={icon}></i>
            <div className={styles.textField}>
                <input type={'text'} {...restProps}/>
                <label>{placeholder}</label>
            </div>
        </div>
    )
}