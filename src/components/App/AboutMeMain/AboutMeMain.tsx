import styles from './AboutMeMain.module.scss'
import {CloseButton} from '../MainPage/Common/CloseButton/CloseButton';

export const AboutMeMain = () => {

    return (
        <div className={styles.container}>
            <CloseButton/>
        </div>
    )
}