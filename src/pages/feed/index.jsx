/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ COMPONENTS -------------------*/
import Head from 'next/head'
import Header from '../../components/Header'
import PetBox from '../../components/PetBox'
import Footer from '../../components/Footer'

/* ------------------ IMAGES -------------------*/
import amora from '../../assets/dogs-picture/amora.png'
import dunga from '../../assets/dogs-picture/dunga.png'
import felicia from '../../assets/dogs-picture/felicia.png'
import fiona from '../../assets/dogs-picture/fiona.png'
import lua from '../../assets/dogs-picture/lua.png'
import sid from '../../assets/dogs-picture/sid.png'
import sirius from '../../assets/dogs-picture/sirius.png'
import yoda from '../../assets/dogs-picture/yoda.png'
import zelda from '../../assets/dogs-picture/zelda.png'

export default function Feed() {
  return (
    <div>
      <Head>
        <title>Adopet 🐶</title>
        <meta name="description" content="Adoption pets website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${styles.feed_body} position-relative`}>
        <Header/>
        <main className={`${styles.content} `}>
          <div className={`${styles.page_description_container} position-relative d-flex justify-content-center`}>
            <div className={`col-10 col-sm-9 col-md-6 text-center d-flex justify-content-center`}>
              <h1 className={`${styles.page_description} `}>
                Olá! Veja os amigos disponíveis para adoção!
              </h1>
            </div>
          </div>
          <div className={`d-flex justify-content-center position-relative`}>
            <div className={`${styles.animals_list_container} d-flex justify-content-center gap-3 col-12 row row-cols-md-2 row-cols-lg-3`}>
              <PetBox 
              img_src={dunga} 
              img_alt='Foto do dunga' 
              name='Dunga'
              age='2 anos'
              size='Porte pequeno'
              behavior='Calma e educado'
              localization='Rio de Janeiro (RJ)'
              />
              <PetBox 
              img_src={felicia} 
              img_alt='Foto da Felícia' 
              name='Felícia'
              age='3 meses'
              size='Porte pequeno'
              behavior='Ativa e carinhosa'
              localization='Nova Iguaçu (RJ)'
              />
              <PetBox 
              img_src={sirius} 
              img_alt='Foto do Sirius' 
              name='Sirius'
              age='6 meses'
              size='Porte grande'
              behavior='Ativo e educado'
              localization='Duque de Caxias (RJ)'
              />
              <PetBox 
              img_src={fiona} 
              img_alt='Foto da Fiona' 
              name='Fiona'
              age='3 anos'
              size='Porte pequeno'
              behavior='Calma e carinhosa'
              localization='São Gonçalo (RJ)'
              />
              <PetBox 
              img_src={sid} 
              img_alt='Foto do Sid' 
              name='Sid'
              age='8 meses'
              size='Porte médio/grande'
              behavior='Brincalhão e amável'
              localization='Rio de Janeiro (RJ)'
              />
              <PetBox 
              img_src={yoda} 
              img_alt='Foto do yoda' 
              name='Yoda'
              age='1 ano'
              size='Porte médio'
              behavior='Ativo e carinhoso'
              localization='Nova Iguaçu (RJ)'
              />
              <PetBox 
              img_src={lua} 
              img_alt='Foto da lua' 
              name='Lua'
              age='6 meses'
              size='Porte médio'
              behavior='Ativa e carinhosa'
              localization='Duque de Caixas (RJ)'
              />
              <PetBox 
              img_src={amora} 
              img_alt='Foto da amora' 
              name='Amora'
              age='45 dias'
              size='Porte grande'
              behavior='Calma e carinhosa'
              localization='São Gonçalo (RJ)'
              />
              <PetBox 
              img_src={zelda} 
              img_alt='Foto da zelda' 
              name='Zelda'
              age='5 meses'
              size='Porte médio'
              behavior='Ativa e amável'
              localization='Rio de Janeiro (RJ)'
              />
            </div>
          </div>
        </main>
        <div className={`position-absolute bottom-0 `}>
          <Footer />
        </div>
      </div>
    </div>
  )
}