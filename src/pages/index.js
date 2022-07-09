import Head from 'next/head'
import Home from '../pages/Home'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Adopet</title>
        <meta name="description" content="Adoption pets website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Home />
      </div>
    </div>
  )
}
