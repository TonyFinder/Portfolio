import React from 'react';
import styles from './FooterBlock.module.scss'

type FooterBlockPropsType = {
    icon: string
    number: string
    info: string
}

export const FooterBlock: React.FC<FooterBlockPropsType> = (
    {
        icon, number, info,
    }
) => {
    return (
        <div className={styles.block}>
            <h3>
                <i className={icon}></i>
                <span>{number}</span>
            </h3>
            <h6>
                {info}
            </h6>
        </div>
    )
}