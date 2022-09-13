import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  /**
   * @param {import('next/document').DocumentContext} ctx
   */
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
          <link rel='icon' type='image/png' href='/favicon.png' />
          <meta name='theme-color' content='#ffffff' />
        </Head>
        <body className='relative font-sans antialiased'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
