/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ COMPONENTS -------------------*/
import { BordaTop } from '../../assets/Borda1.jsx'

export default function Home() {
  return (
    <div className={`${styles.body} `}>
      <div className={`${styles.border_top_container} position-absolute top-0 start-0`}>
        <BordaTop />
      </div>
      <div className={` position-relative`}>
        ...ola davi
      </div>
    </div>
  )
}