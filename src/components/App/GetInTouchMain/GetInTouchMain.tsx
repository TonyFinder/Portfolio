import styles from './GetInTouchMain.module.scss';
import {CloseButton} from '../MainPage/Common/CloseButton/CloseButton';
import {faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';
import {Header} from '../MainPage/Common/Header/Header';
import {useCustomSelector} from '../../../bll/main/store';
import {PageType} from '../../../bll/main/appReducer';
import {portfolioData} from '../../../utils/values';
import React from 'react';
import {Input} from '../MainPage/Common/Input/Input';
import {Textarea} from '../MainPage/Common/Textarea/Textarea';
import {Button} from '../MainPage/Common/Button/Button';

export const GetInTouchMain = () => {
    const page = useCustomSelector<PageType>(state => state.app.page)

    return (
        <div className={styles.container}>
            <CloseButton show={page === 'getInTouch'}/>
            <Header contentFirst="Get" contentSecond="In Touch" icon={faEnvelopeOpen}/>
            <div className={styles.content}>
                <div className={styles.leftBlock}>
                    {portfolioData.contacts.map(contact => <>
                        <h6>{contact.title}</h6>
                        {contact.icon && <i className={`${styles.icon} ${contact.icon}`}></i>}
                        {contact.info && <span>{contact.info}</span>}
                        {contact.icons && contact.icons.map(icon => <a key={icon.id} href={icon.contactLink}
                                                                       target={'_blank'}>
                            <img src={icon.link} alt={'avatar'}/>
                        </a>)}
                    </>)}
                </div>
                <div className={styles.rightBlock}>
                    <h6>FEEL FREE TO CONTACT ME</h6>
                    <p>If you want to leave me a message, please fill out the form below and I will reply you
                        shortly.</p>

                    <form>
                        <Input placeholder={'Your Name'} icon={"fa-solid fa-user"}/>
                        <Input placeholder={'Your Email'} icon={"fa-solid fa-envelope"}/>
                        <Textarea placeholder={'Your Message'} icon={"fa-solid fa-comments"}/>
                        <Button link='#' text='Send message' icon='fa-solid fa-paper-plane'/>
                    </form>
                </div>
            </div>
        </div>
    )
}