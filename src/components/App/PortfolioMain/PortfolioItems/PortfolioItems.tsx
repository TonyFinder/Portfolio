import {useCustomSelector} from '../../../../bll/main/store';
import styles from './PortfolioItems.module.scss'
import {portfolioData} from '../../../../utils/values';
import {AppInitialStateType} from '../../../../bll/main/appReducer';
import {CloseButton} from '../../MainPage/Common/CloseButton/CloseButton';
import {Pagination} from '../../MainPage/Common/Pagination/Pagination';
import React from 'react';

export const PortfolioItems = () => {
    const {showProfileItem, portfolioNumber} = useCustomSelector<AppInitialStateType>(state => state.app)
    const {name, description, technologies, highlights, demo, image, code} = portfolioData.portfolio[portfolioNumber]

    return (
        <div className={showProfileItem ? styles.container : `${styles.container} ${styles.containerNone}`}>
            <CloseButton show={showProfileItem}/>
            <div className={styles.innerBlock} key={name}>
                <div className={styles.picture}>
                    <img src={image} alt={'project image'}/>
                </div>
                <div className={styles.description}>
                    <h3>{name}</h3>
                    <p>Project Description:&nbsp;</p><span>{description}</span>
                    <p>Project Highlights:&nbsp;</p><span>{highlights}</span>
                    <p>Used Technologies:&nbsp;</p><span>{technologies}</span>
                    <div className={styles.line}></div>
                    <div className={styles.buttons}>
                        <a className={styles.button} href={demo} target={'_blank'}>
                            <div className={styles.text}>Demo</div>
                            <i className={`${styles.icon} fa-solid fa-arrow-up-right-from-square`}></i>
                        </a>
                        <a className={styles.button} href={code} target={'_blank'}>
                            <div className={styles.text}>Code</div>
                            <i className={`${styles.icon} fa-solid fa-code`}></i>
                        </a>
                    </div>
                </div>
            </div>
            <Pagination/>
        </div>
    )
}