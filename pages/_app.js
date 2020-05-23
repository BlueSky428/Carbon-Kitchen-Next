import '../css/tailwind.css'
import Head from 'next/head'

export default function App({Component, pageProps}){
  return(
    <>
      <Head>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
