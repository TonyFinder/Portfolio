import React from 'react';
import styles from './SkillsList.module.scss';
import {SkillRateType} from '../../../../../utils/values';
import {StarRating} from '../../../MainPage/Common/StarRating/StarRating';

type ExperienceEducationPropsType = {
    data: SkillRateType[]
    header: string
    icon: string
}

export const SkillsList: React.FC<ExperienceEducationPropsType> = (
    {
        data, header, icon,
    }) => {

    return (
        <div className={styles.experience}>
            <div className={styles.header}>
                <div className={styles.text}>
                    <i className={icon}></i>
                    {header}
                </div>
            </div>
            <div className={styles.infoWrapper}>
                <div className={styles.infoField}>
                    {data.map(skill => (
                        <div key={skill.id} className={styles.skillWrapper}>
                            <h6>{skill.skill}</h6>
                            <StarRating grade={skill.grade}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}