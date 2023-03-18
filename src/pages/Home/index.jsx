/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ COMPONENTS -------------------*/
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/Button'

/* ------------------ ICONS -------------------*/
import { Logo } from '../../assets/Logo'
import { Animais } from '../../assets/Animais'
import { SideBorder } from '../../assets/SideBorder'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adopet </title>
        <meta name="description" content="Adoption pets website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${styles.home_body} position-relative`}>
        <Header profile={false}/>
        <div className={`${styles.animals_container} col-12 position-absolute d-flex justify-content-center`}>
          <div className={`col-5 col-sm-4 col-md-3 col-xl-2`}>
            <Animais />
          </div>
        </div>
          <div className={`${styles.side_border_container} col-2 d-flex align-items-center position-absolute end-0 top-0`}> 
            <SideBorder />
          </div>
        <main className={`${styles.home_content} `}>
          <div className={`d-flex justify-content-center position-relative`}>
            <div className={`col-10 col-sm-8 col-md-5 col-xl-4 col-xxl-3`}>
              <div className={`${styles.logo_container} `}>
              <Logo width='100%'/>
              </div>
              <div className={`d-flex justify-content-center`}>
                <h2 className={`${styles.welcome_msg}`}>Boas-vindas</h2>
              </div>
              <div className={`text-center d-flex justify-content-center`}>
                <h1 className={styles.description}>
                  Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!
                </h1>
              </div>
            </div>
          </div>
          <div className={`d-flex justify-content-center position-relative`}>
            <div className={`${styles.btn_container} shadow col-8 col-sm-6 col-md-4 col-xl-3`}>
              <Button content='Já tenho conta' href='/login' type='button' enabled={true} crossorigin/>
            </div>
          </div>
          <div className={`d-flex justify-content-center position-relative`}>
            <div className={`${styles.btn_container} shadow col-8 col-sm-6 col-md-4 col-xl-3`}>
              <Button content='Quero me cadastrar' href='/register' enabled={true} crossorigin/>
            </div>
          </div>
        </main>
        <div className={` position-absolute bottom-0`}>
          <Footer />
        </div>
      </div>
    </div>
  )
}