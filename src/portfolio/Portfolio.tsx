import React from 'react';
import styles from './Portfolio.module.css'
import {store} from '../store';
import {Work} from './work/Work';

export const Portfolio = () => {
    return (
        <div className={styles.container}>
            <div className={styles.portfolioContainer}>
                <div>
                    <h2>Portfolio</h2>
                </div>
                <div className={styles.portfolioBoxes}>
                    {store.portfolio.map(m => <Work key={m.id} id={m.id} name={m.name} description={m.description} link={m.link}/>)}
                </div>
            </div>
        </div>
    )
}