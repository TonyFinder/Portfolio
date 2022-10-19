import styles from './AboutMeMain.module.scss'
import {CloseButton} from '../MainPage/Common/CloseButton/CloseButton';
import {faVcard} from '@fortawesome/free-solid-svg-icons';
import {Header} from '../MainPage/Common/Header/Header';
import {useCustomSelector} from '../../../bll/main/store';
import {PageType} from '../../../bll/main/appReducer';
import React from 'react';
import {PersonalInfo} from './PersonalInfo/PersonalInfo';
import {Skills} from './Skills/Skills';
import {Footer} from './Footer/Footer';

export const AboutMeMain = () => {
    const page = useCustomSelector<PageType>(state => state.app.page)

    return (
        <>
            <div className={page === 'aboutMe' ? `${styles.container} ${styles.containerScroll}` : styles.container}>
                <CloseButton show={page === 'aboutMe'}/>
                <Header contentFirst="About" contentSecond="Me" icon={faVcard}/>
                <div className={page === 'aboutMe' ? styles.content : styles.contentNone}>
                    <PersonalInfo/>
                    <Skills/>
                    <Footer/>
                </div>
            </div>
        </>
    )
}