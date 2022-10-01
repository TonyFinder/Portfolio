import styles from './Header.module.scss'
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

type HeaderPropsType = {
    contentFirst: string
    contentSecond: string
    icon: IconProp
}

export const Header: React.FC<HeaderPropsType> = ({contentFirst, contentSecond, icon}) => {

    return (
        <div className={styles.headerBlock}>
            <div className={styles.header}>
                <div>{contentFirst}&nbsp;</div>
                <div>{contentSecond}</div>
            </div>
            <div className={styles.iconHeader}>
                <div className={styles.line}></div>
                <FontAwesomeIcon icon={icon} className={styles.icon}/>
                <div className={styles.line}></div>
            </div>
        </div>
    )
}