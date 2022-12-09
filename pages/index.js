import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Network from '@/components/Network'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Interkonnection</title>
        <meta name="description" content="A web of knowledge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Network />
    </div>
  )
}
