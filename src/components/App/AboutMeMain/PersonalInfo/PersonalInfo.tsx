import React from 'react';
import styles from './PersonalInfo.module.scss'
import {portfolioData} from '../../../../utils/values';
import {Button} from '../../MainPage/Common/Button/Button';

export const PersonalInfo = () => {
    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <h6>
                    <i className="fa-solid fa-user"></i>
                    Personal Info
                </h6>
                <div className={styles.info}>
                    <p>
                        I'm a Frontend React Developer, currently based in Vladivostok, Russia.
                        I have good hands-on experience in creating and maintaining complex projects.
                        I always strive to learn new technologies.
                    </p>
                </div>
                <div className={styles.infoColumns}>
                    <div className={styles.column}>
                        {portfolioData.aboutMe.left.map(item => <div key={item.id} className={styles.line}>
                            <span className={styles.first}>{item.info}:&nbsp;</span>
                            {item.link && <a href={item.link} rel="noreferrer" target={item.target ? '_blank' : ''} className={styles.second}>{item.description}</a>}
                            {!item.link && <span className={styles.second}>{item.description}</span>}
                        </div>)}
                    </div>
                    <div className={styles.column}>
                        {portfolioData.aboutMe.right.map(item => <div key={item.id} className={styles.line}>
                            <span className={styles.first}>{item.info}:&nbsp;</span>
                            {item.link && <a href={item.link} rel="noreferrer" target={item.target ? '_blank' : ''} className={styles.second}>{item.description}</a>}
                            {!item.link && <span className={styles.second}>{item.description}</span>}
                        </div>)}
                    </div>
                </div>
                <Button borderColor={'#61d9fa'} className={styles.button} text={'download resume'} icon={'fa-solid fa-file-pdf'}/>
            </div>
        </div>
    )
}