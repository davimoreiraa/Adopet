/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ COMPONENTS -------------------*/
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <body className={`${styles.body} `}>
      <Header/>
      <div className={`position-relative`}>
    
      </div>
      <Footer />
    </body>
  )
}