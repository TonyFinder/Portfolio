import React from 'react';
import styles from './Portfolio.module.css'
import {storeOld} from '../storeOld';
import {Work} from './work/Work';

export const Portfolio = () => {
    return (
        <div className={styles.container}>
            <div className={styles.portfolioContainer}>
                <h2>Portfolio</h2>
                <div className={styles.portfolioBoxes}>
                    {storeOld.portfolio.map(m => <Work key={m.id} id={m.id} name={m.name} description={m.description}
                                                       link={m.link}/>)}
                </div>
            </div>
        </div>
    )
}