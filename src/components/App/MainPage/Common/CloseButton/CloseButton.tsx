import closeButton from '../../../../../images/close.png';
import styles from './CloseButton.module.scss';
import {useAppDispatch} from '../../../../../bll/main/store';
import {changeCurrentPage} from '../../../../../bll/main/appReducer';
import React from 'react';

type CloseButtonPropsType = {
    show: boolean
}

export const CloseButton: React.FC<CloseButtonPropsType> = ({show}) => {
    const dispatch = useAppDispatch()

    const onClickCloseHandler = () => dispatch(changeCurrentPage('all'))

    return (
        <>
            <img src={closeButton}
                 alt={'closeButtonImage'}
                 className={show ? styles.closeButton : styles.closeButtonNone}
                 onClick={onClickCloseHandler}/>
        </>
    )
}