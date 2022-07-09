/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

export default function Footer() {
  return (
    <footer className={`${styles.footer} d-flex justify-content-center align-items-center position-absolute bottom-0`}>
      <p className={styles.year}>2022</p>
    </footer>
  )
}