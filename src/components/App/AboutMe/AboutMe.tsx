import React from 'react';
import styles from './AboutMe.module.scss'

export const AboutMe = () => {
    return <div className={styles.container}>
        <div className={styles.hideBlock}></div>
        <div className={styles.mainField}>
            <div className={styles.textBlockFirst}>About&nbsp;</div>
            <div className={styles.textBlockSecond}>me</div>
        </div>
        <div className={styles.hideBlock}></div>
    </div>
}