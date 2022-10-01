import styles from './Header.module.scss'
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {useCustomSelector} from '../../../../../bll/main/store';
import {PageType} from '../../../../../bll/main/appReducer';

type HeaderPropsType = {
    contentFirst: string
    contentSecond: string
    icon: IconProp
}

export const Header: React.FC<HeaderPropsType> = ({contentFirst, contentSecond, icon}) => {
    const page = useCustomSelector<PageType>(state => state.app.page)

    return (
        <div className={page !== 'all' ? styles.headerBlock : styles.headerBlockNone}>
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