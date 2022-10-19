import React from 'react';
import styles from './SkillsList.module.scss';
import {SkillRateType} from '../../../../../utils/values';
import {StarRating} from '../../../MainPage/Common/StarRating/StarRating';
import {PositionType} from '../ExperienceEducation/ExperienceEducation';
import {SelectType} from '../../../../../bll/features/aboutMe/aboutMeReducer';
import {HeaderList} from '../HeaderList/HeaderList';

type ExperienceEducationPropsType = {
    data: SkillRateType[]
    header: SelectType
    icon: string
    position: PositionType
    onClickHeader: (select: SelectType) => void
}

export const SkillsList: React.FC<ExperienceEducationPropsType> = (
    {
        data, header, icon, position, onClickHeader,
    }) => {

    const place = position === 1
        ? styles.experience
        : position === 2
            ? `${styles.experience} ${styles.hidePositionSecond}`
            : `${styles.experience} ${styles.hidePositionThird}`

    return (
        <div className={place} onClick={() => onClickHeader(header)}>

            <HeaderList header={header} icon={icon} onClickHeader={onClickHeader}/>

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