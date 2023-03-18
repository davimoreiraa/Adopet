import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/x-icon" href="/dog.png"/>
          <meta name="description" content="Encontre o companheiro peludo perfeito em nosso site de adoção de animais de estimação. Navegue pela nossa ampla seleção de cães, gatos e outros animais de estimação disponíveis para adoção e dê um lar amoroso a um animal necessitado. Nosso processo de adoção é fácil e livre de estresse. Comece sua jornada para encontrar seu novo melhor amigo hoje mesmo!" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
