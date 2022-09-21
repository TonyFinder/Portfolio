import closeButton from '../../../images/close.png';
import styles from './AboutMeMain.module.scss'
import {useAppDispatch, useCustomSelector} from '../../../bll/main/store';
import {changeCurrentPage, PageType} from '../../../bll/main/appReducer';

export const AboutMeMain = () => {
    const dispatch = useAppDispatch()
    const page = useCustomSelector<PageType>(state => state.app.page)

    const onClickCloseHandler = () => dispatch(changeCurrentPage('all'))

    return (
        <div className={styles.container}>
            <img src={closeButton}
                 className={page === 'aboutMe' ? styles.closeButton : styles.closeButtonNone}
                 onClick={onClickCloseHandler}/>
        </div>
    )
}