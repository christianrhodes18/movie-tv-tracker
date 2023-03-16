import Link from 'next/link'
import styles from '../../styles/Nav.module.css'
import Search from './search'

export default function Nav() {
    return (
        <nav className={styles.nav}>
            {/* just using this style for temporary border until logo */}
            <Link href="/">
                Home
            </Link>

            <Search />

            <div className={styles.userInfo}>
                {/* <div className={styles.userStats}>
                    <div className={styles.statOne}>
                        <p>5700</p>
                    </div>
                    <div className={styles.statOne}>
                        <p>625</p>
                    </div>
                </div> */}
                <Link href="/">
                    My Profile
                </Link>
            </div>
            
        </nav>
    )
}