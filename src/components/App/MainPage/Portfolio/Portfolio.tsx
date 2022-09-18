import React from 'react';
import styles from './Portfolio.module.scss'

type PortfolioPropsType = {
    activator: (active: string) => void
}

export const Portfolio: React.FC<PortfolioPropsType> = ({activator}) => {

    return (
        <div className={styles.container}
             onClick={()=>activator('portfolio')}>
            <div className={styles.hideBlock}></div>
            <div className={styles.mainField}>
                <div className={styles.textBlockFirst}>My&nbsp;</div>
                <div className={styles.textBlockSecond}>portfolio</div>
            </div>
            <div className={styles.hideBlock}></div>
        </div>
    )
}