import styles from '@/styles/StatusComponent.module.css'
import { useEffect, useState } from 'react'

export default function Status(props: { type: string }) {
    const [watchStatus, setWatchStatus] = useState(props.type)
    
    useEffect(() => {
        setWatchStatus(props.type)
    }, [props.type])

    // can be 'unwatched', 'watchlist', 'rated'
    if (props.type === 'watchlist') {
        return (
            <div className={styles.statusParent}>
                <div className={styles.statusChild}>
                    <h3>
                        <span>In Watchlist</span>
                    </h3>
                </div>
                <div className={styles.statusChild}>
                    <h3>
                        <span>Rate</span>
                    </h3>
                </div>
            </div>
        )
    }
    else if (props.type === 'rated') {
        return (
            <div className={styles.status}>
                <h3>
                    <span>Watched</span>
                </h3>
            </div>
        )
    }
    else { //assume unwatched
        return (
            <div className={styles.statusParent}>
                <div className={styles.statusChild}>
                    <h3>
                        <span>Add to Watchlist</span>
                    </h3>
                </div>
                <div className={styles.statusChild}>
                    <h3>
                        <span>Rate</span>
                    </h3>
                </div>
            </div>
        )
    }
}