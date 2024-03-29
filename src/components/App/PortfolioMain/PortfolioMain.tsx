import styles from './PortfolioMain.module.scss'
import {CloseButton} from '../MainPage/Common/CloseButton/CloseButton';
import {Header} from '../MainPage/Common/Header/Header';
import {faSuitcase} from '@fortawesome/free-solid-svg-icons';
import {useAppDispatch, useCustomSelector} from '../../../bll/main/store';
import {AppInitialStateType, changePortfolioNumber, setShowProfileItem} from '../../../bll/main/appReducer';
import {portfolioData} from '../../../utils/values';
import {PortfolioItems} from './PortfolioItems/PortfolioItems';

export const PortfolioMain = () => {
    let dispatch = useAppDispatch()
    const {page, showProfileItem, closedPortfolioItem} = useCustomSelector<AppInitialStateType>(state => state.app)

    const styleContainer = (page === 'portfolio') && showProfileItem
        ? `${styles.container} ${styles.makeSmaller}`
        : (page === 'portfolio') && !showProfileItem && closedPortfolioItem
            ? `${styles.container} ${styles.containerZoom}`
            : (page === 'portfolio') && !showProfileItem && !closedPortfolioItem
                ? `${styles.container} ${styles.containerScroll}`
                : styles.container

    const onClickPortfolioChanger = (index: number) => {
        dispatch(changePortfolioNumber(index))
        dispatch(setShowProfileItem(true))
    }

    return (
        <>
            <div className={styleContainer}>
                <CloseButton show={page !== 'all'}/>
                <Header contentFirst="My" contentSecond="Portfolio" icon={faSuitcase}/>
                <div className={page === 'portfolio' ? styles.content : styles.contentNone}>
                    {portfolioData.portfolio.map((project, i) => <div key={project.id}
                                                                      className={page === 'portfolio' ? styles.big : styles.bigNone}>
                        <img src={page === 'portfolio' ? project.image : ''} alt={'preview'}/>
                        <div className={styles.textBlock} onClick={() => onClickPortfolioChanger(i)}>
                            <div className={styles.text}>
                                {project.name}
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>

            <PortfolioItems/>
        </>
    )
}