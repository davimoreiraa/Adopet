/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ ICONS -------------------*/
import { BordaTop } from '../../assets/BordaTop'
import { Logo } from '../../assets/Logo'
import { CasaIcon } from '../../assets/CasaIcon'
import { MensagemIcon } from '../../assets/MensagemIcon'

export default function Header() {
  return (
    <header className={`${styles.header_body} position-absolute top-0 start-0`}>
      <div className={`${styles.border_container} col-11 col-sm-8 col-lg-6 col-xl-5`} >
       <BordaTop/>  
      </div>
      <nav className={`${styles.icons_container} col-4 col-sm-5 col-lg-4 col-xl-3 d-flex justify-content-around justify-content-md-between position-absolute top-0 start-0`}>
        <div className={`${styles.logo_container}`} >
          <Logo />
        </div>
        <CasaIcon/>
        <MensagemIcon />
      </nav>
    </header>
  )
}