/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ COMPONENTS -------------------*/
import Head from 'next/head'
import Header from '../../components/Header'
import PetBox from '../../components/PetBox'
import Footer from '../../components/Footer'

/* ------------------ IMAGES -------------------*/
import amora from '../../assets/dogs-picture/amora.png'

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
        <main className={`${styles.content} position-relative`}>
          <div className={`${styles.page_description_container} d-flex justify-content-center`}>
            <div className={`col-10 col-sm-9 col-md-6 text-center d-flex justify-content-center`}>
              <h1 className={`${styles.page_description} `}>
                Olá! Veja os amigos disponíveis para adoção!
              </h1>
            </div>
          </div>
          <div className={`d-flex justify-content-center`}>
            <div className={`${styles.animals_list_container} container col-12 row row-cols-md-2 row-cols-lg-3`}>
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
              img_src={amora} 
              img_alt='Foto da amora' 
              name='Amora'
              age='45 dias'
              size='Porte grande'
              behavior='Calma e carinhosa'
              localization='São Gonçalo (RJ)'
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
              img_src={amora} 
              img_alt='Foto da amora' 
              name='Amora'
              age='45 dias'
              size='Porte grande'
              behavior='Calma e carinhosa'
              localization='São Gonçalo (RJ)'
              />
            </div>
          </div>
        </main>
        <div className={` position-absolute bottom-0 `}>
          <Footer />
        </div>
      </div>
    </div>
  )
}