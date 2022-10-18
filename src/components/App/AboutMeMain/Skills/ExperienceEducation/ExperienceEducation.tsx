import React from 'react';
import styles from './ExperienceEducation.module.scss';
import {ExperienceType} from '../../../../../utils/values';

type ExperienceEducationPropsType = {
    data: ExperienceType[]
    header: string
    icon: string
    position: PositionType
}
export type PositionType = 'first' | 'second' | 'third'

export const ExperienceEducation: React.FC<ExperienceEducationPropsType> = (
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
                    {data.map((item, i) => (
                        <div key={item.id} className={styles.blockExperience}>
                            <h6>
                                <span>{item.title} -&nbsp;</span>
                                {item.place}
                            </h6>
                            <span className={styles.dates}>
                                                <i className="fa-regular fa-calendar"></i>
                                {item.dates}
                                            </span>
                            <p>
                                {item.info}
                            </p>
                            {data.length !== i + 1 &&
                                <div className={styles.separator}></div>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}