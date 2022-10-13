import styles from './Input.module.scss'
import React, {InputHTMLAttributes, useState} from 'react';

type InputPropsType = {
    placeholder: string
    icon: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<InputPropsType> = ({placeholder, icon, ...restProps}) => {
    const [onFocus, setOnFocus] = useState<boolean>(false)
    const [text, setText] = useState<string>('')

    return (
        <div className={styles.input}>
            <i className={onFocus ? `${styles.icon} ${icon} ${styles.iconActive}` : `${styles.icon} ${icon}`}></i>
            <input
                type='text'
                value={text}
                onChange={(e)=> setText(e.currentTarget.value)}
                onFocus={() => setOnFocus(true)}
                onBlur={() => setOnFocus(false)}
                {...restProps}/>
            <label
                className={onFocus || text ? `${styles.labelCenter} ${styles.labelUp}` : styles.labelCenter}
            >
                {placeholder}
            </label>
        </div>
    )
}