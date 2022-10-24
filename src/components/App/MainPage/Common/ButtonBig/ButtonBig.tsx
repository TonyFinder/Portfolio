import React from 'react';
import styles from './ButtonBig.module.scss'
import {SelectType} from '../../../../../bll/features/aboutMe/aboutMeReducer';

type ButtonBigPropsType = {
    text: SelectType
    icon: string
    selected: boolean
    onClick: (select: SelectType) => void
}

export const ButtonBig: React.FC<ButtonBigPropsType> = ({text, icon, selected, onClick}) => {
    return (
        <div className={styles.wrapper} onClick={()=>onClick(text)}>
            <div className={selected ? `${styles.text} ${styles.selected}` : styles.text}>
                <h6 className={selected ? styles.selected : ''}>
                    <i className={`${styles.icon} ${icon}`}/>
                    <span className={styles.title}>{text}</span>
                </h6>
            </div>
        </div>
    )
}