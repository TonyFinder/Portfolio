import React from 'react';
import styles from './Main.module.scss'
import ReactTypingEffect from 'react-typing-effect';

export const Main = () => {

    return <div className={`${styles.container} ${styles.mainBlock}`}>
        <div className={styles.first}>Hi There! I'm</div>
        <div className={styles.second}>Anton Rozdobudko</div>
        <div className={styles.third}>
            <ReactTypingEffect
                text={['Frontend Developer', 'React Developer']}
                speed={150}
                eraseSpeed={30}
                typingDelay={2000}
                cursor={'_'}/>
        </div>
    </div>
}