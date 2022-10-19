import React from 'react';
import styles from './Footer.module.scss'
import {FooterBlock} from './FooterBlock/FooterBlock';

export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <div className={styles.smallBlocks}>

                    <FooterBlock icon={"fa-solid fa-briefcase"} number={"1.5+"} info={"Years Experience"}/>
                    <FooterBlock icon={"fa-solid fa-person-digging"} number={"4+"} info={"Done Projects"}/>

                </div>
            </div>
        </div>
    )
}