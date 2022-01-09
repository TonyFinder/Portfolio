import React from 'react';
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.field}>
                <div>
                    <h2>Anton Rozdobudko</h2>
                </div>
                <div className={styles.social}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <span>© 2022 All Rights Reserved</span>
                </div>
            </div>
        </div>
    )
}