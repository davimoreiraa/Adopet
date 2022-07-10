/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ COMPONENTS -------------------*/
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/Button'

/* ------------------ ICONS -------------------*/
import { Logo } from '../../assets/Logo'

export default function Home() {
  return (
    <div className={`${styles.home_body} `}>
      <Header/>
      <main className={`${styles.home_content} position-relative `}>
        <div className={`d-flex justify-content-center`}>
          <div className={`col-10 col-sm-8 col-md-5 col-xl-4 col-xxl-3`}>
            <h1 className={styles.logo}><Logo width='100%'/></h1>
            <div className={`d-flex justify-content-center`}>
              <h2 className={`${styles.welcome_msg}`}>Boas-vindas</h2>
            </div>
            <div className={`text-center d-flex justify-content-center`}>
              <p className={styles.description}>
                Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}