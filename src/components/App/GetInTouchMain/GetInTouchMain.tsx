import styles from './GetInTouchMain.module.scss';
import {CloseButton} from '../MainPage/Common/CloseButton/CloseButton';

export const GetInTouchMain = () => {

    return (
        <div className={styles.container}>
            <CloseButton/>
        </div>
    )
}