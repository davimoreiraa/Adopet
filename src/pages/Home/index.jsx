/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ COMPONENTS -------------------*/
import Header from '../../components/Header'
import Footer from '../../components/Footer'

/* ------------------ ICONS -------------------*/
import { Logo } from '../../assets/Logo'

export default function Home() {
  return (
    <body className={`${styles.home_body} `}>
      <Header/>
      <main className={`${styles.home_content} position-relative d-flex justify-content-center`}>
        <div className={`${styles.logo_container}`}>
          <Logo width='100%'/>
        </div>
      </main>
      <Footer />
    </body>
  )
}