import styles from './GetInTouchMain.module.scss';
import {CloseButton} from '../MainPage/Common/CloseButton/CloseButton';
import {faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';
import {Header} from '../MainPage/Common/Header/Header';
import {useCustomSelector} from '../../../bll/main/store';
import {PageType} from '../../../bll/main/appReducer';
import React from 'react';
import {ContactBlock} from './ContactBlock/ContactBlock';
import {SendEmail} from './SendEmail/SendEmail';

export const GetInTouchMain = () => {
    const page = useCustomSelector<PageType>(state => state.app.page)

    return (
        <div className={page === 'getInTouch' ? `${styles.container} ${styles.containerScroll}` : styles.container}>
            <CloseButton show={page === 'getInTouch'}/>
            <Header contentFirst="Get" contentSecond="In Touch" icon={faEnvelopeOpen}/>
            <div className={page === 'getInTouch' ? styles.content : styles.contentNone}>
                <ContactBlock/>
                <SendEmail/>
            </div>
        </div>
    )
}