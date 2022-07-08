import Head from 'next/head'
import Home from '../pages/Home'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Adopet</title>
        <meta name="description" content="Adoption pets website" />
      </Head>
      <div>
        <Home />
      </div>
    </div>
  )
}
