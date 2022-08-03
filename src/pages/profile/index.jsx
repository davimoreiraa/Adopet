/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ COMPONENTS -------------------*/
import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Input from '../../components/Input'
import Button from '../../components/Button'

/* ------------------ IMAGES -------------------*/
import pic from '../../assets/pic.jpg'

/* ------------------ ICONS -------------------*/
import { SideBorder } from '../../assets/SideBorder'

export default function Profile() {
  return (
    <div>
      <Head>
        <title>Adopet 🐶 | Perfil </title>
        <meta name="description" content="Adoption pets website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${styles.profile_body} position-relative`}>
        <div className={`${styles.side_border_container} d-none d-md-inline d-flex align-items-center position-absolute end-0 top-0`}> 
          <SideBorder />
        </div>
        <Header profile={true}/>
        <main className={`${styles.content}`}>
          <div className={`d-flex justify-content-center text-center position-relative`}>
            <div className={`col-10 col-sm-9 col-md-6 text-center d-flex justify-content-center`}>
              <h1 className={`${styles.page_description}`}>
                Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.
              </h1>
            </div>
          </div>
          <div className={`d-flex justify-content-center`}>
            <form className={`${styles.profile_infos_container} rounded-3 col-10 col-sm-9 col-md-6`}>
              <div className={`d-flex justify-content-center`}>
                <h2 className={styles.title}>Perfil</h2>
              </div>
              <div className={styles.margin_top}>
                <label className={styles.color_blue}>Foto</label>
                <div className={`d-flex justify-content-center`}>
                  <div className={`${styles.profile_pic_container} `}>
                    <Image src={pic} layout='responsive'/>
                  </div>
                </div>
              </div>
              <div className={`d-flex justify-content-center`}>
                <a className={styles.forgot_password}>Trocar foto de perfil</a>
              </div>
              <div className={styles.gap}>
                <label className={styles.color_blue}>Nome</label>
                <Input 
                  placeholder='Davi Moreira'
                  dark={false}
                  name='name'
                  type='text'
                  required={true}
                />
              </div>
              <div className={styles.gap}>
                <label className={styles.color_blue}>Telefone</label>
                <Input 
                  placeholder='55 11 XXXXXXXXX'
                  dark={false}
                  name='telefone'
                  type='tel'
                  required={true}
                />
              </div>
              <div className={styles.gap}>
                <label className={styles.color_blue}>Cidade</label>
                <Input 
                  placeholder='São Paulo'
                  dark={false}
                  name='city'
                  type='text'
                  required={true}
                />
              </div>
              <div className={styles.gap}>
                <label className={styles.color_blue}>Sobre</label>
                <Input 
                  placeholder='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.'
                  dark={false}
                  name='about'
                  type='text'
                  required={true}
                />
              </div>
              <div className={`${styles.margin_top} d-flex justify-content-center `}>
                <div className={`${styles.btn_container} col-3`}>
                  <Button content='Salvar' href='/' enabled={true}/>
                </div>
              </div>
            </form>
          </div>
        </main>
        <div className={`position-absolute bottom-0 `}>
          <Footer />
        </div>
      </div>
    </div>
  )
}