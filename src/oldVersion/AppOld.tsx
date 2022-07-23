import React from 'react';
import {Header} from './header/Header';
import {Main} from './main/Main';
import styles from './AppOld.module.css'
import {Skills} from './skills/Skills';
import {Portfolio} from './portfolio/Portfolio';
import {Contacts} from './contacts/Contacts';
import {Footer} from './footer/Footer';


export const AppOld = () => {
  return (
    <div className={styles.App}>
        <Header/>
        <Main/>
        <Skills/>
        <Portfolio/>
        <Contacts/>
        <Footer/>
    </div>
  )
}
