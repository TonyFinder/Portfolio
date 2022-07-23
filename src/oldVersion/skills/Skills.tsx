import React from 'react';
import styles from './Skills.module.css'
import {storeOld} from '../storeOld';
import {Skill} from './skill/Skill';

export const Skills = () => {
    return (
        <div className={styles.container}>
            <div className={styles.blockSkills}>
                <h2>Skills</h2>
                <div className={styles.skillsContainer}>
                    {storeOld.skills.map(m => <Skill key={m.id} id={m.id} skill={m.skill} description={m.description}/>)}
                </div>
            </div>
        </div>
    )
}