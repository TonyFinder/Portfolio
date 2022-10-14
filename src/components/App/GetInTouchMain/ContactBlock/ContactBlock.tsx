import React from 'react';
import styles from './ContactBlock.module.scss';
import {portfolioData} from '../../../../utils/values';

export const ContactBlock = () => {
    return (
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
    )
}