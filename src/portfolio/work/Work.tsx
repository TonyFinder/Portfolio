import React from 'react';
import styles from './Work.module.css'

type WorkPropsType = {
    id: number
    name: string
    description: string
    link: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <div className={styles.container} key={props.id}>
            <div className={styles.pictureContainer}>
                <div className={styles.button}>
                    <a href={props.link} target={"_blank"}>Check</a>
                </div>
            </div>
            <h3>{props.name}</h3>
            <span>{props.description}</span>
        </div>
    )
}