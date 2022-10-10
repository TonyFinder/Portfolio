import styles from './CloseButton.module.scss';
import {useAppDispatch, useCustomSelector} from '../../../../../bll/main/store';
import {AppInitialStateType, changeCurrentPage, setShowProfileItem} from '../../../../../bll/main/appReducer';
import React from 'react';
import {faClose} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

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
            <FontAwesomeIcon icon={faClose} className={show ? styles.closeButton : styles.closeButtonNone} onClick={onClickCloseHandler} />
    )
}