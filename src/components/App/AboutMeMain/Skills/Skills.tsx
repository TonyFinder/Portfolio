import React from 'react';
import styles from './Skills.module.scss'
import {portfolioData} from '../../../../utils/values';
import {ButtonGroup} from './ButtonGroup/ButtonGroup';
import {ExperienceEducation} from './ExperienceEducation/ExperienceEducation';
import {SkillsList} from './SkillsList/SkillsList';

export const Skills = () => {
    const experience = portfolioData.aboutMe.lists

    return (
        <div className={styles.container}>
            <div className={styles.block}>

                <ButtonGroup/>

                <div className={styles.skills}>
                    <div className={styles.lists}>

                        <ExperienceEducation data={experience.experience}
                                             header={'Experience'}
                                             icon={'fa-solid fa-briefcase'}
                        />
                        <ExperienceEducation data={experience.education}
                                             header={'Education'}
                                             icon={'fa-solid fa-graduation-cap'}
                        />
                        <SkillsList data={experience.skills}
                                    header={'Skills'}
                                    icon={'fa-solid fa-star'}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}