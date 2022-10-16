import React, {useCallback, useEffect, useState} from 'react';
import styles from './Notification.module.scss'
import {useAppDispatch} from '../../../../../../bll/main/store';
import {removeNotification} from '../../../../../../bll/main/appReducer';

export type NotificationType = {
    id: string
    type: Type
    message: string
}

export type Type = "success" | "error"
type setIntervalType = ReturnType<typeof setInterval>

export const Notification: React.FC<NotificationType> = ({id, type, message}) => {
    const [exit, setExit] = useState<boolean>(false)
    const [width, setWidth] = useState<number>(0)
    const [intervalId, setIntervalId] = useState<setIntervalType>()

    const dispatch = useAppDispatch()

    const handleStartTimer = useCallback( () => {
        const idInterval = setInterval(() => {
            setWidth((prev) => {
                if (prev < 100) {
                    return prev + 0.5
                }
                clearInterval(idInterval)
                return prev
            })
        }, 20)
        setIntervalId(idInterval)
    }, [])

    const handlePauseTimer = useCallback (() => {
        clearInterval(Number(intervalId))
    }, [intervalId])

    useEffect(() => {
        if (width === 100) {
            //close Notification
            clearInterval(Number(intervalId))
            setExit(true)
            setTimeout(() => {
                dispatch(removeNotification(id))
            }, 400)
        }
    }, [width, dispatch, intervalId, id]);

    useEffect(() => {
        handleStartTimer()
    }, [handleStartTimer]);

    return (
        <div className={`${styles.notificationItem} ${exit ? styles.exit : ''}`}
             onMouseLeave={handleStartTimer} onMouseEnter={handlePauseTimer}>
            <p className={`${styles.message}  ${type === "error" && styles.error}`}>{message}</p>
            <div style={{'width': `${width}%`}}
                 className={`${styles.bar} ${type === "success" ? styles.success : styles.error}`}/>
        </div>
    )
}