import React from 'react';
import styles from './SkillsList.module.scss';
import {SkillRateType} from '../../../../../utils/values';
import {StarRating} from '../../../MainPage/Common/StarRating/StarRating';
import {PositionType} from '../ExperienceEducation/ExperienceEducation';

type ExperienceEducationPropsType = {
    data: SkillRateType[]
    header: string
    icon: string
    position: PositionType
}

export const SkillsList: React.FC<ExperienceEducationPropsType> = (
    {
        data, header, icon, position,
    }) => {

    const place = position === 'first'
        ? styles.experience
        : position === 'second'
            ? `${styles.experience} ${styles.hidePositionSecond}`
            : `${styles.experience} ${styles.hidePositionThird}`

    return (
        <div className={place}>
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