/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ COMPONENTS -------------------*/
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Input from '../../components/Input'
import PasswordInput from '../../components/PasswordInput'
import Button from '../../components/Button'

/* ------------------ ICONS -------------------*/
import { Patas } from '../../assets/Patas'
import { SideBorder } from '../../assets/SideBorder'
import { LeftBorder } from '../../assets/LeftBorder'
import { LogoAzul } from '../../assets/LogoAzul'

export default function Login() {
  return (
    <div>
      <Head>
        <title>Adopet 🐶 | Login</title>
        <meta name="description" content="Adoption pets website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${styles.login_body} position-relative`}>
        <Header  profile={false}/>
        <div className={`${styles.side_border_container} d-none d-md-inline col-2 d-flex align-items-center position-absolute end-0 top-0`}> 
          <SideBorder />
        </div>
        <div className={`${styles.left_side_border_container} d-md-none col-2 d-flex align-items-center position-absolute start-0`}> 
          <LeftBorder />
        </div>
        <div className={`${styles.patas_container} position-absolute top-0 end-0`}>
          <Patas />
        </div>
        <main className={`${styles.content}`}>
          <div className={`text-center d-flex justify-content-center`}>
            <div className={`${styles.container} col-10 col-sm-7 col-md-5 col-xl-4`}>
              <div className={`${styles.logo_container} position-relative`}>
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
          <form id='creat_account_form'>
            <div className={`col-12 d-flex justify-content-center`}>
              <div className={`col-10 col-sm-8 col-md-7 col-lg-6 col-xl-5 col-xxl-4`}>
                <div className={`${styles.margin_bottom_field} position-relative text-center`}>
                  <label className={`${styles.label} `}>E-mail</label>
                  <div className={`col-12`}>
                    <Input 
                    placeholder='Insira seu email' 
                    dark={true} 
                    name='email' 
                    type='email'
                    required={true}/>
                  </div>
                </div>
                <div className={`${styles.margin_bottom_field} position-relative  text-center`}>
                  <label className={`${styles.label}`}>Senha</label>
                  <div className={`col-12`}>
                    <PasswordInput 
                    placeholder='Insira sua senha' 
                    dark={true} name='password' 
                    type='password'
                    required={true}/>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-12 d-flex justify-content-center`}>
              <a className={styles.forgot_password}>Esqueci minha senha</a>
            </div>
            <div className={`col-12 d-flex justify-content-center`}>
              <div className={`${styles.submit_btn_container}`}>
                <Button content='Entrar' href='/feed' type='submit'/>
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