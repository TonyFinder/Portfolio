import React from 'react';
import styles from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <a href={""}>HOME</a>
            <a href={""}>SKILLS</a>
            <a href={""}>PORTFOLIO</a>
            <a href={""}>CONTACT</a>
        </div>
    )
}