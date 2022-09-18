import React from 'react';
import styles from './Contact.module.scss'

export const Contact = () => {
    return <div className={styles.container}>
        <div className={styles.hideBlock}></div>
        <div className={styles.mainField}>
            <div className={styles.textBlockFirst}>Get&nbsp;</div>
            <div className={styles.textBlockSecond}>in touch</div>
        </div>
        <div className={styles.hideBlock}></div>
    </div>
}