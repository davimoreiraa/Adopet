/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ COMPONENTS -------------------*/
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Talk() {
  return (
    <div>
      <Head>
        <title>Adopet 🐶</title>
        <meta name="description" content="Adoption pets website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${styles.talk_body} position-relative`}>
        <Header profile={true}/>
        
           
             
        <div className={`position-absolute bottom-0 `}>
          <Footer />
        </div>
      </div>
    </div>
  )
}