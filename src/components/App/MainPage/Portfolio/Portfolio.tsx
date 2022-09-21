import React from 'react';
import styles from './Portfolio.module.scss'
import {useAppDispatch, useCustomSelector} from '../../../../bll/main/store';
import {changeCurrentPage, PageType} from '../../../../bll/main/appReducer';

export const Portfolio = () => {
    let dispatch = useAppDispatch()
    const page = useCustomSelector<PageType>(state => state.app.page)

    const onClickPageActivate = () => dispatch(changeCurrentPage('portfolio'))

    return (
        <div className={(page === 'all') || (page === 'portfolio') ? styles.container : `${styles.container} ${styles.makeSmaller}`} onClick={onClickPageActivate}>
            <div className={styles.hideBlock}></div>
            <div className={styles.mainField}>
                <div className={styles.textBlockFirst}>My&nbsp;</div>
                <div className={styles.textBlockSecond}>portfolio</div>
            </div>
            <div className={styles.hideBlock}></div>
        </div>
    )
}