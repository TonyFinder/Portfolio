import styles from './PortfolioMain.module.scss'
import {CloseButton} from '../MainPage/Common/CloseButton/CloseButton';
import {Header} from '../MainPage/Common/Header/Header';
import {faSuitcase} from '@fortawesome/free-solid-svg-icons';
import {useCustomSelector} from '../../../bll/main/store';
import {PageType} from '../../../bll/main/appReducer';

export const PortfolioMain = () => {
    const page = useCustomSelector<PageType>(state => state.app.page)

    return (
        <div className={styles.container}>
            <CloseButton/>
            <Header contentFirst="My" contentSecond="Portfolio" icon={faSuitcase}/>
            <div className={page === 'portfolio' ? styles.content : styles.contentNone}>
                <div className={styles.big}></div>
                <div className={styles.big}></div>
                <div className={styles.big}></div>
                <div className={styles.big}></div>
                <div className={styles.big}></div>
                <div className={styles.big}></div>
                <div className={styles.big}></div>
            </div>
        </div>
    )
}