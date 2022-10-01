import styles from './AboutMeMain.module.scss'
import {CloseButton} from '../MainPage/Common/CloseButton/CloseButton';
import {faVcard} from '@fortawesome/free-solid-svg-icons';
import {Header} from '../MainPage/Common/Header/Header';

export const AboutMeMain = () => {

    return (
        <div className={styles.container}>
            <CloseButton/>
            <Header contentFirst='About' contentSecond='Me' icon={faVcard}/>
        </div>
    )
}