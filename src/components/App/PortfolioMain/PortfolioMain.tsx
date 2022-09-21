import styles from './PortfolioMain.module.scss'
import closeButton from '../../../images/close.png'
import {useAppDispatch, useCustomSelector} from '../../../bll/main/store';
import {changeCurrentPage, PageType} from '../../../bll/main/appReducer';


export const PortfolioMain = () => {
    const dispatch = useAppDispatch()
    const page = useCustomSelector<PageType>(state => state.app.page)

    const onClickCloseHandler = () => dispatch(changeCurrentPage('all'))

    return (
        <div className={styles.container}>
            <img src={closeButton}
                 className={page === 'portfolio' ? styles.closeButton : styles.closeButtonNone}
                 onClick={onClickCloseHandler}/>
        </div>
    )
}