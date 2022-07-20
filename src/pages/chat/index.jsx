/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ COMPONENTS -------------------*/
import Head from 'next/head'
import Header from '../../components/Header'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Footer from '../../components/Footer'

/* ------------------ ICONS -------------------*/
import { SideBorder } from '../../assets/SideBorder'

export default function chat() {
  return (
    <div>
      <Head>
        <title>Adopet 🐶</title>
        <meta name="description" content="Adoption pets website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${styles.chat_body} position-relative`}>
        <div className={`${styles.side_border_container} d-none d-md-inline d-flex align-items-center position-absolute end-0 top-0`}> 
          <SideBorder />
        </div>
        <Header profile={true}/>
          <div className={`${styles.content}`}>
            <div className={`d-flex justify-content-center`}>
              <h2 className={`${styles.description} position-relative text-center col-7 col-sm-6 col-md-5 col-xxl-4`}>
                Envie uma mensagem para a pessoa ou instituição que está cuidando do animal:
              </h2>
            </div>
            <div className={`col-12 d-flex justify-content-center`}>
              <form className={`${styles.form} col-10 col-sm-7 col-md-6 col-xxl-4`}>
                <div className={`${styles.margin_bottom} position-relative`}>
                  <label className={styles.color_blue}>Nome</label>
                  <Input 
                  placeholder='Insira seu nome completo'
                  dark={false}
                  name='name'
                  type='text'
                  required={true}
                  />
                </div>
                <div className={`${styles.margin_bottom} position-relative`}>
                  <label className={styles.color_blue}>Telefone</label>
                  <Input 
                  placeholder='Insira seu telefone e/ou whatsapp'
                  dark={false}
                  name='tel'
                  type='tel'
                  required={true}
                  />
                </div>
                <div className={`${styles.margin_bottom} position-relative`}>
                  <label className={styles.color_blue}>Nome do animal</label>
                  <Input 
                  placeholder='Por qual animal você se interessou?'
                  dark={false}
                  name='pet_name'
                  type='text'
                  required={true}
                  />
                </div>
                <label className={`${styles.color_blue}`}>Mensagem</label>
                <div className={`${styles.margin_bottom} position-relative`}>
                  <Input 
                  placeholder='Escreva sua mensagem.'
                  dark={false}
                  name="message"
                  type='text'
                  required={true}
                  />
                </div>
                <div className={`${styles.margin_top} d-flex justify-content-center `}>
                  <div className={`col-3`}>
                    <Button content='Enviar' href='/'/>
                  </div>
                </div>
              </form>
            </div>
          </div>
        <div className={`position-absolute bottom-0 `}>
          <Footer />
        </div>
      </div>
    </div>
  )
}