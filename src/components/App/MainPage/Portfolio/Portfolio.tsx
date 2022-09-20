import React from 'react';
import styles from './Portfolio.module.scss'
import {useAppDispatch} from '../../../../bll/main/store';
import {changeCurrentPage} from '../../../../bll/main/appReducer';

export const Portfolio = () => {
    let dispatch = useAppDispatch()

    const onClickPageActivate = () => dispatch(changeCurrentPage('portfolio'))

    return (
        <div className={styles.container} onClick={onClickPageActivate}>
            <div className={styles.hideBlock}></div>
            <div className={styles.mainField}>
                <div className={styles.textBlockFirst}>My&nbsp;</div>
                <div className={styles.textBlockSecond}>portfolio</div>
            </div>
            <div className={styles.hideBlock}></div>
        </div>
    )
}