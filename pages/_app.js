import '@fontsource/poppins/latin.css'
import Head from 'next/head'
import '../styles/index.css'

/**
 * @param {import('next/app').AppProps} props
 */
const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
