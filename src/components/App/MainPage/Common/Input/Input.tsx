import styles from './Input.module.scss'
import React, {InputHTMLAttributes, useState} from 'react';

type InputPropsType = {
    placeholder: string
    icon: string
    value: string
    error: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<InputPropsType> = (
    {
        placeholder,
        icon,
        value,
        error,
        ...restProps
    }) => {
    const [onFocus, setOnFocus] = useState<boolean>(false)

    const onBlurHandle = () => setOnFocus(false)

    return (
        <div className={styles.input}>
            <i className={onFocus ? `${styles.icon} ${icon} ${styles.iconActive}` : `${styles.icon} ${icon}`}
               style={error ? {"color": "red"} : {}}>
            </i>
            <input
                type='text'
                value={value}
                onFocus={() => setOnFocus(true)}
                onBlur={onBlurHandle}
                {...restProps}/>
            <label
                className={onFocus || value !== "" ? `${styles.labelCenter} ${styles.labelUp}` : styles.labelCenter}
            >
                {placeholder}
            </label>
            <div className={styles.error}>{error}</div>
        </div>
    )
}