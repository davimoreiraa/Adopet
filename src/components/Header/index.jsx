/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ COMPONENTS -------------------*/
import Link from 'next/link'

/* ------------------ ICONS -------------------*/
import { BordaTop } from '../../assets/BordaTop'
import { Logo } from '../../assets/Logo'
import { CasaIcon } from '../../assets/CasaIcon'
import { MensagemIcon } from '../../assets/MensagemIcon'
import { Profile } from '../../assets/Profile'

export default function Header(props) {
  return (
    <header className={`${styles.header_body} position-absolute top-0 start-0`}>
      <div className={`${styles.border_container} col-10 col-sm-7 col-lg-5 col-xl-4`} >
        <h1><BordaTop/></h1>
      </div>
        <div className={`col-12 position-absolute top-0 d-flex justify-content-end`}>
          <div className={`${props.profile ? '' : styles.dnone} ${styles.profile_container}`}>
            <Link href='/profile'>
              <span>
                <Profile />
              </span>
            </Link>
          </div>
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
          <Link href='/chat'>
            <span className={`${styles.icon}`}>
              <MensagemIcon/>
            </span>
          </Link>  
        </nav>
    </header>
  )
}