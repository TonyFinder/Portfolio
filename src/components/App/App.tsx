import React from 'react';
import styles from './App.module.scss'
import {Main} from './MainPage/Main/Main';
import {AboutMe} from './MainPage/AboutMe/AboutMe';
import {Portfolio} from './MainPage/Portfolio/Portfolio';
import {Contact} from './MainPage/Contact/Contact';
import {PortfolioMain} from './PortfolioMain/PortfolioMain';
import {useCustomSelector} from '../../bll/main/store';
import {PageType} from '../../bll/main/appReducer';

export const App = () => {
    const page = useCustomSelector<PageType>(state => state.app.page)

    return (
        <div className={styles.body}>
            <div className={styles.up}>
                <Main/>
                <AboutMe/>
            </div>
            <div className={styles.down}>
                <Portfolio/>
                <Contact/>
            </div>
            <div className={`${page === 'portfolio' && styles.portfolioMain}`}>
                <PortfolioMain/>
            </div>
        </div>
    )
}