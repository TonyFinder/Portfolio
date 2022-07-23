import React from 'react';
import styles from './Skill.module.css'

type SkillPropsType = {
    id: number
    skill: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={styles.skillContainer} key={props.id}>
            <div className={styles.imagePlace}></div>
            <h3>{props.skill}</h3>
            <span>{props.description}</span>
        </div>
    )
}