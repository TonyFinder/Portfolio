import React, {Fragment} from 'react';
import styles from './ContactBlock.module.scss';
import {portfolioData} from '../../../../utils/values';

export const ContactBlock = () => {
    return (
        <div className={styles.leftBlock}>
            {portfolioData.contacts.map(contact => <Fragment key={contact.id}>
                <h6>{contact.title}</h6>
                {contact.icon && <i className={`${styles.icon} ${contact.icon}`}></i>}
                {contact.info && contact.link && <a href={contact.link} rel="noreferrer" target={contact.target ? '_blank' : ''} className={styles.link}>{contact.info}</a>}
                {contact.info && !contact.link && <span>{contact.info}</span>}
                {contact.icons && contact.icons.map(icon => <a key={icon.id} href={icon.contactLink} rel="noreferrer"
                                                               target={'_blank'}>
                    <img src={icon.link} alt={'avatar'}/>
                </a>)}
            </Fragment>)}
        </div>
    )
}