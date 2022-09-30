import styles from './PortfolioMain.module.scss'
import {CloseButton} from '../MainPage/Common/CloseButton/CloseButton';

export const PortfolioMain = () => {

    return (
        <div className={styles.container}>
            <CloseButton/>
        </div>
    )
}