/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ COMPONENTS -------------------*/
import Header from '../../components/Header'
import Footer from '../../components/Footer'

/* ------------------ ICONS -------------------*/
import { Patas } from '../../assets/Patas'
import { SideBorder } from '../../assets/SideBorder'
import { LeftBorder } from '../../assets/LeftBorder'

export default function Register() {
  return (
    <div className={`${styles.register_body}`}>
      <Header />
      <div className={`${styles.side_border_container} d-none d-md-inline col-2 d-flex align-items-center position-absolute end-0 top-0`}> 
        <SideBorder />
      </div>
      <div className={`${styles.left_side_border_container} d-md-none col-2 d-flex align-items-center position-absolute start-0`}> 
        <LeftBorder />
      </div>
      <div className={`${styles.patas_container} position-absolute top-0 end-0`}>
        <Patas />
      </div>
      <Footer />
    </div>
  )
}