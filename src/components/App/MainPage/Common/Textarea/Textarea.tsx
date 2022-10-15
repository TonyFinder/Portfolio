import React, {useState, useEffect, useRef, TextareaHTMLAttributes, ChangeEvent} from 'react';
import styles from './Textarea.module.scss'

type TextareaPropsType = {
    icon: string
    value: string
    onChangeText: (e: string) => void
    onChangeError: (value: string) => void
    error: string
    errorStyle: boolean
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea: React.FC<TextareaPropsType> = (
    {
        icon,
        value,
        onChangeText,
        placeholder,
        onChangeError,
        error,
        errorStyle,
        ...restProps}
) => {

    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const [textExpand, setTextExpand] = useState('')
    const [textAreaHeight, setTextAreaHeight] = useState('auto')
    const [parentHeight, setParentHeight] = useState('auto')

    const [onFocus, setOnFocus] = useState<boolean>(false)

    useEffect(() => {
        setParentHeight(`${textAreaRef.current!.scrollHeight}px`)
        setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`)
    }, [textExpand])

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaHeight('auto')
        setParentHeight(`${textAreaRef.current!.scrollHeight}px`)
        setTextExpand(event.target.value)
        onChangeText(event.currentTarget.value)
    }

    const onBlurHandle = () => setOnFocus(false)

    return (
        <div className={styles.textarea}>
            <i className={onFocus ? `${styles.icon} ${icon} ${styles.iconActive}` : `${styles.icon} ${icon}`}
               style={error ? {"color": "red"} : {}}></i>
            <div style={{minHeight: parentHeight}} className={styles.wrapper}>
                    <textarea
                        {...restProps}
                        ref={textAreaRef}
                        value={value}
                        onFocus={() => setOnFocus(true)}
                        onBlur={onBlurHandle}
                        rows={1}
                        style={errorStyle ? {height: textAreaHeight, borderBottomColor: 'red'} : {height: textAreaHeight}}
                        onChange={onChangeHandler}/>
            </div>
            <label
                className={onFocus || value !== "" ? `${styles.labelCenter} ${styles.labelUp}` : styles.labelCenter}
            >
                {placeholder}
            </label>
            <div className={styles.error}>{error}</div>
        </div>
    )
}