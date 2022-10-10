import closeButton from '../../../../../images/close.png';
import styles from './CloseButton.module.scss';
import {useAppDispatch, useCustomSelector} from '../../../../../bll/main/store';
import {AppInitialStateType, changeCurrentPage, setShowProfileItem} from '../../../../../bll/main/appReducer';
import React from 'react';

type CloseButtonPropsType = {
    show: boolean
}

export const CloseButton: React.FC<CloseButtonPropsType> = ({show}) => {
    const dispatch = useAppDispatch()
    const {showProfileItem} = useCustomSelector<AppInitialStateType>(state => state.app)

    const onClickCloseHandler = () => {
        showProfileItem
            ? dispatch(setShowProfileItem(false))
            : dispatch(changeCurrentPage('all'))
    }

    return (
        <>
            <img src={closeButton}
                 alt={'closeButtonImage'}
                 className={show ? styles.closeButton : styles.closeButtonNone}
                 onClick={onClickCloseHandler}/>
        </>
    )
}