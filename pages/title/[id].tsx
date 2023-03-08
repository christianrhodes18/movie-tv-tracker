import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '@/styles/Title.module.css'

export default function Title() {
    const router = useRouter()
    const { id } = router.query
    
    return (
        <>
            {/* hero image */}
            <div className={styles.heroImage}>
                <Image
                    src='/altered_carbon_demo_wallpaper.jpg'
                    alt='Altered Carbon'
                    width={1920}
                    height={1080}
                />
            </div>

            {/* media type, length, title */}
            <div className={styles.mainInfo}>
                <div className={styles.flexRow}>
                    <h3>Series</h3>
                    <h3>24 Episodes</h3>
                </div>
                <h1>Altered Carbon</h1>
            </div>

            {/* interaction buttons */}
            <div className={styles.flexRow}>
                <button 
                    className={styles.interaction} 
                    onClick={() => console.log('watchlist')}>
                    Watchlist
                </button>
                <button 
                    className={styles.interaction} 
                    onClick={() => console.log('rate')}>
                    Rate
                </button>
                <button 
                    className={styles.interaction} 
                    onClick={() => console.log('seen')}>
                    Seen
                </button>
            </div>
        </>
    )
}