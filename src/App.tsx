import React from 'react';
import {Header} from './header/Header';
import {Main} from './main/Main';
import styles from './App.module.css'
import {Skills} from './skills/Skills';
import {Portfolio} from './portfolio/Portfolio';


function App() {
  return (
    <div className={styles.App}>
        <Header/>
        <Main/>
        <Skills/>
        <Portfolio/>
    </div>
  );
}

export default App;
