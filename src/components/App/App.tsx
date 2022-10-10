import React, {KeyboardEvent, useEffect} from 'react';
import styles from './App.module.scss'
import {Main} from './MainPage/Main/Main';
import {AboutMe} from './MainPage/AboutMe/AboutMe';
import {Portfolio} from './MainPage/Portfolio/Portfolio';
import {Contact} from './MainPage/Contact/Contact';
import {PortfolioMain} from './PortfolioMain/PortfolioMain';
import {useAppDispatch, useCustomSelector} from '../../bll/main/store';
import {AppInitialStateType, changeCurrentPage, setShowProfileItem} from '../../bll/main/appReducer';
import {AboutMeMain} from './AboutMeMain/AboutMeMain';
import {GetInTouchMain} from './GetInTouchMain/GetInTouchMain';

export const App = () => {
    const dispatch = useAppDispatch()
    const {page, showProfileItem} = useCustomSelector<AppInitialStateType>(state => state.app)

    // Logic for leaving modal window in case ESC button is pressed
    const escFunction = (event: KeyboardEvent) => {
        event.code === 'Escape' &&
            showProfileItem
                ? dispatch(setShowProfileItem(false))
                : dispatch(changeCurrentPage('all'))
    }

useEffect(() => {
    // @ts-ignore
    document.addEventListener('keydown', escFunction)

    return () => {
        // @ts-ignore
        document.removeEventListener('keydown', escFunction)
    }
}, [escFunction])

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
        <div className={`${page === 'portfolio' ? styles.portfolioMain : styles.portfolioMainNone}`}>
            <PortfolioMain/>
        </div>
        <div className={`${page === 'aboutMe' ? styles.aboutMeMain : styles.aboutMeMainNone}`}>
            <AboutMeMain/>
        </div>
        <div className={`${page === 'getInTouch' ? styles.getInTouchMain : styles.getInTouchMainNone}`}>
            <GetInTouchMain/>
        </div>
    </div>
)
}