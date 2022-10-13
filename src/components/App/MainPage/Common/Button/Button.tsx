import React from 'react';
import styles from './Button.module.scss';

type ButtonPropsType = {
    link: string
    text: string
    icon: string
}

export const Button: React.FC<ButtonPropsType> = ({link, text, icon}) => {
    return (
        <a className={styles.button} href={link} target={'_blank'}>
            <div className={styles.text}>{text}</div>
            <i className={`${styles.icon} ${icon}`}></i>
        </a>
    )
}