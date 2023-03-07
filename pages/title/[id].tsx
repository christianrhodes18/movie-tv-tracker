import { useRouter } from 'next/router'
import styles from '@/styles/Title.module.css'

export default function Title() {
    const router = useRouter()
    const { id } = router.query
    
    return (
        <div className={styles.test}>
            <h1>Title: {id}</h1>
        </div>
    )
}