import React, {ButtonHTMLAttributes} from 'react';
import styles from './Button.module.scss';

type ButtonPropsType = {
    link?: string
    text: string
    icon: string
    targetBlank?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonPropsType> = ({link, text, icon, targetBlank, ...restProps}) => {
    return (
        <a className={styles.wrapper} href={link} target={targetBlank ? '_blank' : ''}>
            <button {...restProps}>
                {text}
                <i className={`${styles.icon} ${icon}`}/>
            </button>
        </a>
    )
}