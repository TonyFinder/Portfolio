import React from 'react';
import styles from './HeaderList.module.scss'
import {SelectType} from '../../../../../bll/features/aboutMe/aboutMeReducer';
import {useCustomSelector} from '../../../../../bll/main/store';

type HeaderListPropsType = {
    icon: string
    header: SelectType
    onClickHeader: (select: SelectType) => void
}

export const HeaderList: React.FC<HeaderListPropsType> = (
    {
        icon, header, onClickHeader
    }) => {
    const select = useCustomSelector<SelectType>(state => state.aboutMe.select)

    return (
        <div className={select === header ? styles.header : `${styles.header} ${styles.headerBack}`}
             onClick={() => onClickHeader(header)}
        >
            <div className={styles.text}>
                <i className={icon}></i>
                {header}
            </div>
        </div>
    )
}