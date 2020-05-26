import '../css/tailwind.css'
import Head from 'next/head'
import Sidebar from "../components/Sidebar";

export default function App({Component, pageProps}){
  return(
    <>
      <Head />
      <Sidebar >
        <Component {...pageProps} />
      </Sidebar>
    </>
  )
}