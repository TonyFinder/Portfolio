import React from 'react';
import styles from './Skills.module.scss'
import {portfolioData} from '../../../../utils/values';
import {ButtonGroup} from './ButtonGroup/ButtonGroup';
import {ExperienceEducation} from './ExperienceEducation/ExperienceEducation';
import {SkillsList} from './SkillsList/SkillsList';
import {useAppDispatch, useCustomSelector} from '../../../../bll/main/store';
import {changeSelection, SelectType} from '../../../../bll/features/aboutMe/aboutMeReducer';

export const Skills = () => {
    const dispatch = useAppDispatch()
    const select = useCustomSelector<SelectType>(state => state.aboutMe.select)
    const experience = portfolioData.aboutMe.lists
    const position = select === 'experience'
        ? [1, 2, 3]
        : select === 'education'
            ? [2, 1, 3]
            : [2, 3, 1]

    const onClickHeader = (selection: SelectType) => dispatch(changeSelection(selection))

    return (
        <div className={styles.container}>
            <div className={styles.block}>

                <ButtonGroup/>

                <div className={styles.skills}>
                    <div className={styles.lists}>

                            <ExperienceEducation position={position[0]}
                                                 data={experience.experience}
                                                 header={'experience'}
                                                 icon={'fa-solid fa-briefcase'}
                                                 onClickHeader={onClickHeader}
                            />
                            <ExperienceEducation position={position[1]}
                                                 data={experience.education}
                                                 header={'education'}
                                                 icon={'fa-solid fa-graduation-cap'}
                                                 onClickHeader={onClickHeader}
                            />
                            <SkillsList position={position[2]}
                                        data={experience.skills}
                                        header={'skills'}
                                        icon={'fa-solid fa-star'}
                                        onClickHeader={onClickHeader}
                            />

                    </div>
                </div>

            </div>
        </div>
    )
}