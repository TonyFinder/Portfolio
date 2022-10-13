import {useCustomSelector} from '../../../../bll/main/store';
import styles from './PortfolioItems.module.scss'
import {portfolioData} from '../../../../utils/values';
import {AppInitialStateType} from '../../../../bll/main/appReducer';
import {CloseButton} from '../../MainPage/Common/CloseButton/CloseButton';
import {Pagination} from '../../MainPage/Common/Pagination/Pagination';
import React from 'react';
import {Button} from '../../MainPage/Common/Button/Button';

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

                    <div className={styles.list}>
                        <i className="fa-solid fa-circle-info"></i>
                        <span className={styles.main}>Project Description:&nbsp;</span><span className={styles.secondText}>{description}</span>
                    </div>

                    <div className={styles.list}>
                        <i className="fa-solid fa-highlighter"></i>
                        <span className={styles.main}>Project Highlights:&nbsp;</span><span className={styles.secondText}>{highlights}</span>
                    </div>

                    <div className={styles.list}>
                        <i className="fa-solid fa-gears"></i>
                        <span className={styles.main}>Used Technologies:&nbsp;</span><span className={styles.secondText}>{technologies}</span>
                    </div>

                    <div className={styles.line}></div>
                    <div className={styles.buttons}>
                        <Button link={demo} text='demo' icon='fa-solid fa-arrow-up-right-from-square'/>
                        <Button link={code} text='code' icon='fa-solid fa-code'/>
                    </div>
                </div>
            </div>
            <Pagination/>
        </div>
    )
}