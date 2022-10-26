import React from 'react';
import styles from './YouTubeVideo.module.scss'

interface IFileInputProps {
    videoCode: string
}

export const YouTubeVideo: React.FC<IFileInputProps> = ({videoCode}) => {
    return (
            <iframe
                className={styles.container}
                title={videoCode}
                src={`https://www.youtube.com/embed/${videoCode}`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
    )
}
