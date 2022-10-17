import React from 'react';
import styles from './StarRating.module.scss'


type StarRatingType = {
    grade: number
}

export const StarRating: React.FC<StarRatingType> = ({grade}) => {


    return (
        <p className={styles.rating}>
            <i className={grade >= 1 ? "fa-solid fa-star" : grade > 0.45 && grade < 1 ? "fa-regular fa-star-half-stroke" : "fa-regular fa-star"}></i>
            <i className={grade >= 2 ? "fa-solid fa-star" : grade > 1.45 && grade < 2 ? "fa-regular fa-star-half-stroke" : "fa-regular fa-star"}></i>
            <i className={grade >= 3 ? "fa-solid fa-star" : grade > 2.45 && grade < 3 ? "fa-regular fa-star-half-stroke" : "fa-regular fa-star"}></i>
            <i className={grade >= 4 ? "fa-solid fa-star" : grade > 3.45 && grade < 4 ? "fa-regular fa-star-half-stroke" : "fa-regular fa-star"}></i>
            <i className={grade === 5 ? "fa-solid fa-star" : grade > 4.45 && grade < 5 ? "fa-regular fa-star-half-stroke" : "fa-regular fa-star"}></i>
        </p>
    )
}