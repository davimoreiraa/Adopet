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
      <div className={`${styles.border_container} col-10 col-sm-7 col-lg-5`} >
       <BordaTop width='80%' />  
      </div>
      <nav className={`${styles.icons_container} d-flex justify-content-evenly position-absolute top-0 start-0`}>
        <div className={`${styles.logo_container}`} >
          <Logo />
        </div>
        <CasaIcon/>
        <MensagemIcon />
      </nav>
    </header>
  )
}