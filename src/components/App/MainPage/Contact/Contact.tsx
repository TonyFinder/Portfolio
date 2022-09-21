import React from 'react';
import styles from './Contact.module.scss'
import {useAppDispatch, useCustomSelector} from '../../../../bll/main/store';
import {changeCurrentPage, PageType} from '../../../../bll/main/appReducer';

export const Contact = () => {
    let dispatch = useAppDispatch()
    const page = useCustomSelector<PageType>(state => state.app.page)

    const onClickPageActivate = () => dispatch(changeCurrentPage('getInTouch'))

    return (
        <div className={(page === 'all') || (page === 'getInTouch') ? styles.container : `${styles.container} ${styles.makeSmaller}`} onClick={onClickPageActivate}>
            <div className={styles.hideBlock}></div>
            <div className={styles.mainField}>
                <div className={styles.textBlockFirst}>Get&nbsp;</div>
                <div className={styles.textBlockSecond}>in touch</div>
            </div>
            <div className={styles.hideBlock}></div>
        </div>
    )
}