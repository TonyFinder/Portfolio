import styles from './GetInTouchMain.module.scss';
import {CloseButton} from '../MainPage/Common/CloseButton/CloseButton';
import {faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';
import {Header} from '../MainPage/Common/Header/Header';

export const GetInTouchMain = () => {

    return (
        <div className={styles.container}>
            <CloseButton/>
            <Header contentFirst='Get' contentSecond='In Touch' icon={faEnvelopeOpen}/>
        </div>
    )
}