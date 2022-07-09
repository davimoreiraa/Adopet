import Head from 'next/head'
import Home from '../pages/Home'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Adopet</title>
        <meta name="description" content="Adoption pets website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <Home />
      </div>
    </div>
  )
}
