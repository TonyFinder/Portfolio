import React from 'react';
import styles from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contacts}>
                <div>
                    <h2>Contacts</h2>
                </div>
                <form>
                    <input/>
                    <input/>
                    <textarea/>
                </form>
                <div className={styles.button}>
                    Send
                </div>
            </div>
        </div>
    )
}