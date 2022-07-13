/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ COMPONENTS -------------------*/
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Input from '../../components/Input'

/* ------------------ ICONS -------------------*/
import { Patas } from '../../assets/Patas'
import { SideBorder } from '../../assets/SideBorder'
import { LeftBorder } from '../../assets/LeftBorder'
import { LogoAzul } from '../../assets/LogoAzul'

export default function Register() {
  return (
    <div>
      <Head>
        <title>Adopet 🐶 | Registrar</title>
        <meta name="description" content="Adoption pets website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={`${styles.register_body} position-relative`}>
        <Header />
        <div className={`${styles.side_border_container} d-none d-md-inline col-2 d-flex align-items-center position-absolute end-0 top-0`}> 
          <SideBorder />
        </div>
        <div className={`${styles.left_side_border_container} d-md-none col-2 d-flex align-items-center position-absolute start-0`}> 
          <LeftBorder />
        </div>
        <div className={`${styles.patas_container} position-absolute top-0 end-0`}>
          <Patas />
        </div>
        <main className={`${styles.content} position-relative`}>
          <div className={`text-center d-flex justify-content-center`}>
            <div className={`${styles.container} col-10 col-sm-7 col-md-5 col-xl-4`}>
              <div className={styles.logo_container}>
                <LogoAzul width='100%'/>
              </div>
              <div className={`d-flex justify-content-center`}>
                <h2 className={styles.text}>Ainda não tem cadastro?</h2>
              </div>
              <div className={`text-center d-flex justify-content-center`}>
                <p className={styles.text}>Então, antes de buscar seu melhor amigo, precisamos de alguns dados:
                </p>
              </div>
            </div>
          </div>
          <form className={`col-12 d-flex justify-content-center`}>
            <div className={`col-10`}>
              <div className={`${styles.margin_bottom_field} text-center`}>
                <label className={`${styles.label} `}>E-mail</label>
                <div className={`col-12`}>
                  <Input placeholder='Escolha seu melhor email' dark={true} name='email' type='email'/>
                </div>
              </div>
              <div className={`${styles.margin_bottom_field} text-center`}>
                <label className={`${styles.label} `}>E-mail</label>
                <div className={`col-12`}>
                  <Input placeholder='Escolha seu melhor email' dark={true} name='email' type='email'/>
                </div>
              </div>
              <div className={`${styles.margin_bottom_field} text-center`}>
                <label className={`${styles.label} `}>E-mail</label>
                <div className={`col-12`}>
                  <Input placeholder='Escolha seu melhor email' dark={true} name='email' type='email'/>
                </div>
              </div>
              <div className={`${styles.margin_bottom_field} text-center`}>
                <label className={`${styles.label} `}>E-mail</label>
                <div className={`col-12`}>
                  <Input placeholder='Escolha seu melhor email' dark={true} name='email' type='email'/>
                </div>
            </div>
            </div>
          </form>
        </main>
        <div className={`${styles.footer_container} position-absolute bottom-0`}>
          <Footer />
        </div>
      </div>
    </div>
  )
}