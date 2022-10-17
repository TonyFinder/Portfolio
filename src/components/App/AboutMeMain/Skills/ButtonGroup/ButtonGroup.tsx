import React from 'react';
import styles from './ButtonGroup.module.scss'
import {ButtonBig} from '../../../MainPage/Common/ButtonBig/ButtonBig';
import {useAppDispatch, useCustomSelector} from '../../../../../bll/main/store';
import {changeSelection, SelectType} from '../../../../../bll/features/aboutMe/aboutMeReducer';

export const ButtonGroup = () => {
    const dispatch = useAppDispatch()
    const select = useCustomSelector<SelectType>(state => state.aboutMe.select)

    const onClickHandler = (selection: SelectType) => dispatch(changeSelection(selection))

    return (
        <div className={styles.buttons}>
            <ButtonBig text={'experience'}
                       icon={"fa-solid fa-briefcase"}
                       selected={select === 'experience'}
                       onClick={onClickHandler}
            />
            <ButtonBig text={'education'}
                       icon={"fa-solid fa-graduation-cap"}
                       selected={select === 'education'}
                       onClick={onClickHandler}
            />
            <ButtonBig text={'skills'}
                       icon={"fa-solid fa-star"}
                       selected={select === 'skills'}
                       onClick={onClickHandler}
            />
        </div>
    )
}