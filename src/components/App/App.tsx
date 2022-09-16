import React from 'react';
import styles from './App.module.scss'
import {Main} from './Main/Main';
import {AboutMe} from './AboutMe/AboutMe';
import {Portfolio} from './Portfolio/Portfolio';
import {Contact} from './Contact/Contact';

export const App = () => {
    return <div className={styles.body}>
        <div className={styles.up}>
            <Main/>
            <AboutMe/>
        </div>
        <div className={styles.down}>
            <Portfolio/>
            <Contact/>
        </div>
    </div>
}