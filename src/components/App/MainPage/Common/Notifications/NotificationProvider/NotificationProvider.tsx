import React from 'react';
import styles from './NotificationProvider.module.scss'
import {useCustomSelector} from '../../../../../../bll/main/store';
import {Notification} from '../Notification/Notification';


export const NotificationProvider: React.FC = React.memo( () => {
    const notifications = useCustomSelector(state => state.app.notifications)

    return (
        <div className={styles.notificationWrapper}>
            {notifications.map(m => {
                return <Notification key={m.id} {...m} />
            })}
        </div>
    )
})