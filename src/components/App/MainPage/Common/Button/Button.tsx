import React, {ButtonHTMLAttributes} from 'react';
import styles from './Button.module.scss';

type ButtonPropsType = {
    link?: string
    text: string
    icon: string
    targetBlank?: boolean
    borderColor?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonPropsType> = (
    {
        link, text, icon, targetBlank, borderColor, ...restProps
    }) => {

    return (
        <a className={styles.wrapper} href={link} rel="noreferrer" target={targetBlank ? '_blank' : ''}>
            <button {...restProps} style={borderColor ? {borderColor: borderColor} : {border: 'none'}}>
                {text}
                <i className={`${styles.icon} ${icon}`}/>
            </button>
        </a>
    )
}