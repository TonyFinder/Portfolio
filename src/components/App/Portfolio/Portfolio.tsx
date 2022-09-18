import React from 'react';
import styles from './Portfolio.module.scss'

export const Portfolio = () => {
    return <div className={styles.container}>
        <div className={styles.hideBlock}></div>
        <div className={styles.mainField}>
            <div className={styles.textBlockFirst}>My&nbsp;</div>
            <div className={styles.textBlockSecond}>portfolio</div>
        </div>
        <div className={styles.hideBlock}></div>
    </div>
}