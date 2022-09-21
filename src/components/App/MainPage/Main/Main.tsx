import React from 'react';
import styles from './Main.module.scss'
import ReactTypingEffect from 'react-typing-effect';
import {useCustomSelector} from '../../../../bll/main/store';
import {PageType} from '../../../../bll/main/appReducer';

export const Main = () => {
    const page = useCustomSelector<PageType>(state => state.app.page)

    return (
        <div className={page === 'all' ? styles.container : `${styles.container} ${styles.makeSmaller}`}>
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
    )
}