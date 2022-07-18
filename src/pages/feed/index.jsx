/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ COMPONENTS -------------------*/
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Feed() {
  return (
    <div>
      <Head>
        <title>Adopet 🐶</title>
        <meta name="description" content="Adoption pets website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={`${styles.feed_body}`}>
        <Header/>
        <main className={`${styles.content} col-12`}>
          <div className={`${styles.page_description_container} position-relative d-flex justify-content-center`}>
            <div className={`col-10 col-sm-9 col-md-6 text-center d-flex justify-content-center`}>
              <h1 className={`${styles.page_description} `}>
                Olá! Veja os amigos disponíveis para adoção!
              </h1>
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