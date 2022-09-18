import React, {useState} from 'react';
import styles from './App.module.scss'
import {Main} from './MainPage/Main/Main';
import {AboutMe} from './MainPage/AboutMe/AboutMe';
import {Portfolio} from './MainPage/Portfolio/Portfolio';
import {Contact} from './MainPage/Contact/Contact';
import {PortfolioMain} from './PortfolioMain/PortfolioMain';

export const App = () => {
    const [showElement, setShowElement] = useState<string>('all')

    return (
        <div className={styles.body}>
            <div className={styles.up}>
                <Main/>
                <AboutMe/>
            </div>
            <div className={styles.down}>
                <Portfolio activator={setShowElement}/>
                <Contact/>
            </div>
            <div className={`${showElement === 'portfolio' && styles.portfolioMain}`}>
                <PortfolioMain/>
            </div>
        </div>
    )
}