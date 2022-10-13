import React, {useState, useEffect, useRef, TextareaHTMLAttributes, ChangeEvent} from 'react';
import styles from './Textarea.module.scss'

type TextareaPropsType = { icon: string } & TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea: React.FC<TextareaPropsType> = (
    {icon, onChange, placeholder, ...restProps}
) => {

    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const [text, setText] = useState('')
    const [textAreaHeight, setTextAreaHeight] = useState('auto')
    const [parentHeight, setParentHeight] = useState('auto')

    useEffect(() => {
        setParentHeight(`${textAreaRef.current!.scrollHeight}px`)
        setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`)
    }, [text])

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaHeight('auto')
        setParentHeight(`${textAreaRef.current!.scrollHeight}px`)
        setText(event.target.value)
        onChange && onChange(event)
    }

    return (
        <div className={styles.textarea}>
            <i className={icon}></i>
            <div className={styles.textField}>
                <div style={{minHeight: parentHeight}}>
                    <textarea
                        {...restProps}
                        ref={textAreaRef}
                        rows={1}
                        style={{height: textAreaHeight}}
                        onChange={onChangeHandler}/>
                </div>
                <label>{placeholder}</label>
            </div>
        </div>
    )
}