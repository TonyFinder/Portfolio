import closeButton from '../../../../../images/close.png';
import styles from './CloseButton.module.scss';
import {useAppDispatch, useCustomSelector} from '../../../../../bll/main/store';
import {changeCurrentPage, PageType} from '../../../../../bll/main/appReducer';

export const CloseButton = () => {
    const dispatch = useAppDispatch()
    const page = useCustomSelector<PageType>(state => state.app.page)

    const onClickCloseHandler = () => dispatch(changeCurrentPage('all'))

    return (
        <>
            <img src={closeButton}
                 alt={'closeButtonImage'}
                 className={page !== 'all' ? styles.closeButton : styles.closeButtonNone}
                 onClick={onClickCloseHandler}/>
        </>
    )
}