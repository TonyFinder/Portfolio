import styles from './GetInTouchMain.module.scss';
import {CloseButton} from '../MainPage/Common/CloseButton/CloseButton';
import {faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';
import {Header} from '../MainPage/Common/Header/Header';
import {useCustomSelector} from '../../../bll/main/store';
import {PageType} from '../../../bll/main/appReducer';

export const GetInTouchMain = () => {
    const page = useCustomSelector<PageType>(state => state.app.page)

    return (
        <div className={styles.container}>
            <CloseButton show={page === 'getInTouch'}/>
            <Header contentFirst='Get' contentSecond='In Touch' icon={faEnvelopeOpen}/>
        </div>
    )
}