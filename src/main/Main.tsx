import React from 'react';
import styles from './Main.module.css'

export const Main = () => {
    return (
        <div className={styles.mainPage}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <span>Hi There!</span>
                    <h1>I am Anton</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={styles.picture}>
                </div>
            </div>
        </div>
    )
}