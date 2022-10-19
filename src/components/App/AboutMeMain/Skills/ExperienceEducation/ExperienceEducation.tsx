import React from 'react';
import styles from './ExperienceEducation.module.scss';
import {ExperienceType} from '../../../../../utils/values';
import {SelectType} from '../../../../../bll/features/aboutMe/aboutMeReducer';
import {HeaderList} from '../HeaderList/HeaderList';

type ExperienceEducationPropsType = {
    data: ExperienceType[]
    header: SelectType
    icon: string
    position: PositionType
    onClickHeader: (select: SelectType) => void
}
export type PositionType = number

export const ExperienceEducation: React.FC<ExperienceEducationPropsType> = (
    {
        data, header, icon, position, onClickHeader,
    }) => {

    const place = position === 1
        ? styles.experience
        : position === 2
            ? `${styles.experience} ${styles.hidePositionSecond}`
            : `${styles.experience} ${styles.hidePositionThird}`

    return (
        <div className={place}>

            <HeaderList header={header} icon={icon} onClickHeader={onClickHeader}/>

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