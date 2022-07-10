/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ COMPONENTS -------------------*/
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/Button'

/* ------------------ ICONS -------------------*/
import { Logo } from '../../assets/Logo'
import { Animais } from '../../assets/Animais'
import { Animais } from '../../assets/Animais'

export default function Home() {
  return (
    <div className={`${styles.home_body} `}>
      <Header/>
      <div className={`${styles.animals_container} col-12 position-absolute d-flex justify-content-center`}>
        <div className={`col-5 col-sm-4 col-md-3  col-xl-2`}>
          <Animais />
        </div>
      </div>
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
        <div className={`d-flex justify-content-center`}>
          <div className={`${styles.btn_container} shadow col-8 col-sm-6 col-md-4 col-xl-3`}>
            <Button content='Já tenho conta'/>
          </div>
        </div>
        <div className={`d-flex justify-content-center`}>
          <div className={`${styles.btn_container} shadow col-8 col-sm-6 col-md-4 col-xl-3`}>
            <Button content='Quero me cadastrar'/>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}