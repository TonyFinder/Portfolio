import styles from './PortfolioMain.module.scss'
import {CloseButton} from '../MainPage/Common/CloseButton/CloseButton';
import {Header} from '../MainPage/Common/Header/Header';
import {faSuitcase} from '@fortawesome/free-solid-svg-icons';

export const PortfolioMain = () => {

    return (
        <div className={styles.container}>
            <CloseButton/>
            <Header contentFirst='My' contentSecond='Portfolio' icon={faSuitcase}/>
        </div>
    )
}