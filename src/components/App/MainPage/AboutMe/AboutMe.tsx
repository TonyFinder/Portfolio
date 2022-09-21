import React from 'react';
import styles from './AboutMe.module.scss'
import {useAppDispatch, useCustomSelector} from '../../../../bll/main/store';
import {changeCurrentPage, PageType} from '../../../../bll/main/appReducer';

export const AboutMe = () => {
    let dispatch = useAppDispatch()
    const page = useCustomSelector<PageType>(state => state.app.page)

    const onClickPageActivate = () => dispatch(changeCurrentPage('aboutMe'))

    return (
        <div className={(page === 'all') || (page === 'aboutMe') ? styles.container : `${styles.container} ${styles.makeSmaller}`} onClick={onClickPageActivate}>
            <div className={styles.hideBlock}></div>
            <div className={styles.mainField}>
                <div className={styles.textBlockFirst}>About&nbsp;</div>
                <div className={styles.textBlockSecond}>me</div>
            </div>
            <div className={styles.hideBlock}></div>
        </div>
    )
}