import styles from '@/styles/StatusComponent.module.css'

export default function Status(props: { type: string }) {
    // can be 'unwatched', 'watchlist', 'rated'
    if (props.type === 'unwatched') {
        return (
            <div className={styles.status}>
                <h3>
                    <span>Watched</span>
                </h3>
            </div>
        )
    }
    else if (props.type === 'watchlist') {
        return (
            <div className={styles.status}>
                <h3>
                    <span>Watched</span>
                </h3>
            </div>
        )
    }
    else if (props.type === 'unrated') {
        return (
            <div className={styles.status}>
                <h3>
                    <span>Watched</span>
                </h3>
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
    else {
        return (
            <div className={styles.status}>
                <h3>
                    <span>Watched</span>
                </h3>
            </div>
        )
    }

    // return (
    //     <div className={styles.status}>
    //         <h3>
    //             <span>My Status ...</span>
    //         </h3>
    //     </div>
    // )
}