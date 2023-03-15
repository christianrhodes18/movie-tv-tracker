import styles from '../../styles/Footer.module.css'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <p>Copyright {year} - Christian Rhodes</p>
        </footer>
    )
}
