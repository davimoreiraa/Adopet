/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ COMPONENTS -------------------*/
import Header from '../../components/Header'
import Footer from '../../components/Footer'

/* ------------------ ICONS -------------------*/
import { Logo } from '../../assets/Logo'

export default function Home() {
  return (
    <div className={`${styles.home_body} `}>
      <Header/>
      <main className={`${styles.home_content} position-relative d-flex justify-content-center`}>
        <div className={`${styles.logo_container} `}>
          <h1><Logo width='100%'/></h1>
          <div className={`d-flex justify-content-center`}>
            <h2 className={`${styles.welcome_msg}`}>Boas-vindas</h2>
          </div>
          <div className={`text-center d-flex justify-content-center`}>
            <p className={styles.description}>
              Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}