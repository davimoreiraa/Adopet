/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ COMPONENTS -------------------*/
import Header from '../../components/Header'

export default function Register() {
  return (
    <div className={`${styles.register_body}`}>
      <Header />
    </div>
  )
}