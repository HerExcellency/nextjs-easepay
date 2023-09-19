// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Faq from '../components/Faq'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
        {/* <Header /> */}
        <Head>
          <Header />
        </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Banner />
        <Faq />
      </main>
    </div>
  )
}
