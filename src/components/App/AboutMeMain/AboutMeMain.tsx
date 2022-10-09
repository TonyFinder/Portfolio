import styles from './AboutMeMain.module.scss'
import {CloseButton} from '../MainPage/Common/CloseButton/CloseButton';
import {faVcard} from '@fortawesome/free-solid-svg-icons';
import {Header} from '../MainPage/Common/Header/Header';
import {useCustomSelector} from '../../../bll/main/store';
import {PageType} from '../../../bll/main/appReducer';

export const AboutMeMain = () => {
    const page = useCustomSelector<PageType>(state => state.app.page)

    return (
        <>
            <div className={styles.container}>
                <CloseButton show={page === 'aboutMe'}/>
                <Header contentFirst="About" contentSecond="Me" icon={faVcard}/>
            </div>
        </>
    )
}