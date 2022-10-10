import {useCustomSelector} from '../../../../bll/main/store';
import styles from './PortfolioItems.module.scss'
import {portfolioData} from '../../../../utils/values';
import {AppInitialStateType} from '../../../../bll/main/appReducer';
import {CloseButton} from '../../MainPage/Common/CloseButton/CloseButton';

export const PortfolioItems = () => {
    const {showProfileItem, portfolioNumber} = useCustomSelector<AppInitialStateType>(state => state.app)
    const {name, description, link, image} = portfolioData.portfolio.filter(item => item.id === portfolioNumber)[0]

    return (
        <div className={showProfileItem ? styles.container : styles.containerNone}>
            <CloseButton show={showProfileItem}/>
            <div className={styles.innerBlock}>
                <div className={styles.picture}>
                    <img src={image} alt={'project image'}/>
                </div>
                <div className={styles.description}>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <p>{link}</p>
                    <div className={styles.line}></div>
                    <div className={styles.buttons}>
                        <div>Code</div>
                        <div>Demo</div>
                    </div>
                </div>
            </div>
        </div>
    )
}