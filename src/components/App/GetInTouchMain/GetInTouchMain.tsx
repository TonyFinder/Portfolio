import {useAppDispatch, useCustomSelector} from '../../../bll/main/store';
import {changeCurrentPage, PageType} from '../../../bll/main/appReducer';
import styles from '../AboutMeMain/AboutMeMain.module.scss';
import closeButton from '../../../images/close.png';

export const GetInTouchMain = () => {
    const dispatch = useAppDispatch()
    const page = useCustomSelector<PageType>(state => state.app.page)

    const onClickCloseHandler = () => dispatch(changeCurrentPage('all'))

    return (
        <div className={styles.container}>
            <img src={closeButton}
                 className={page === 'getInTouch' ? styles.closeButton : styles.closeButtonNone}
                 onClick={onClickCloseHandler}/>
        </div>
    )
}