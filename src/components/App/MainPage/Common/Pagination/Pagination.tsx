import styles from './Pagination.module.scss';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import React, {KeyboardEvent, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useAppDispatch, useCustomSelector} from '../../../../../bll/main/store';
import {AppInitialStateType, changePortfolioNumber} from '../../../../../bll/main/appReducer';
import {portfolioData} from '../../../../../utils/values';

export const Pagination = () => {
    let dispatch = useAppDispatch()
    const {portfolioNumber} = useCustomSelector<AppInitialStateType>(state => state.app)
    const portfolio = portfolioData.portfolio

    const onClickLeft = () => {
        portfolioNumber === 0
            ? dispatch(changePortfolioNumber(portfolio.length - 1))
            : dispatch(changePortfolioNumber(portfolioNumber - 1))
    }
    const onClickRight = () => {
        portfolioNumber === portfolio.length - 1
            ? dispatch(changePortfolioNumber(0))
            : dispatch(changePortfolioNumber(portfolioNumber + 1))
    }

    // Logic for sliding between the portfolio
    const leftRightFunction = (event: KeyboardEvent) => {
        if (event.code === 'ArrowRight') onClickRight()
        if (event.code === 'ArrowLeft') onClickLeft()
    }

    useEffect(() => {
        // @ts-ignore
        document.addEventListener('keydown', leftRightFunction)

        return () => {
            // @ts-ignore
            document.removeEventListener('keydown', leftRightFunction)
        }
    }, [leftRightFunction])

    return (
        <div className={styles.pagination}>
            <FontAwesomeIcon icon={faAngleLeft} className={styles.icon} onClick={onClickLeft}/>
            <FontAwesomeIcon icon={faAngleRight} className={styles.icon} onClick={onClickRight}/>

        </div>
    )
}