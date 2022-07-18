/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ COMPONENTS -------------------*/
import Link from 'next/link'

/* ------------------ ICONS -------------------*/
import { BordaTop } from '../../assets/BordaTop'
import { Logo } from '../../assets/Logo'
import { CasaIcon } from '../../assets/CasaIcon'
import { MensagemIcon } from '../../assets/MensagemIcon'

export default function Header() {
  return (
    <header className={`${styles.header_body} position-absolute top-0 start-0`}>
      <div className={`${styles.border_container} col-10 col-sm-7 col-lg-5 col-xl-4`} >
        <h1><BordaTop/></h1>
      </div>
      <nav className={`${styles.icons_container} col-4 col-sm-5 col-lg-4 col-xl-3 d-flex justify-content-around  position-absolute top-0 start-0`}>
        <div className={`${styles.logo_container}`} >
          <Logo width='128px'/>
        </div>
        <Link href='/home'>
          <span className={`${styles.icon}`}>
            <CasaIcon/>
          </span>
          </Link>
        <Link href='/'>
          <span className={`${styles.icon}`}>
            <MensagemIcon/>
          </span>
        </Link>  
      </nav>
    </header>
  )
}