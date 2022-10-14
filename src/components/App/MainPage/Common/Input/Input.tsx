import styles from './Input.module.scss'
import React, {ChangeEvent, InputHTMLAttributes, useState} from 'react';

type InputPropsType = {
    placeholder: string
    icon: string
    onBlurSetValue: (value: string) => void
    onChangeError: (value: string) => void
    error: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<InputPropsType> = (
    {
        placeholder,
        icon,
        onBlurSetValue,
        onChangeError,
        error,
        ...restProps
    }) => {
    const [onFocus, setOnFocus] = useState<boolean>(false)
    const [text, setText] = useState<string>('')

    const onBlurHandle = () => {
        setOnFocus(false)
        onBlurSetValue(text)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
        onChangeError('')
    }

    return (
        <div className={styles.input}>
            <i className={onFocus ? `${styles.icon} ${icon} ${styles.iconActive}` : `${styles.icon} ${icon}`}
               style={error ? {"color": "red"} : {}}>
            </i>
            <input
                type='text'
                value={text}
                onChange={onChangeHandler}
                onFocus={() => setOnFocus(true)}
                onBlur={onBlurHandle}
                {...restProps}/>
            <label
                className={onFocus || text ? `${styles.labelCenter} ${styles.labelUp}` : styles.labelCenter}
            >
                {placeholder}
            </label>
            <div className={styles.error}>{error}</div>
        </div>
    )
}