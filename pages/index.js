import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Network from '@/components/Network'
import fs from 'fs'
import path from 'path'


export async function getStaticProps() {
  const root = process.cwd()
  const graph = JSON.parse(fs.readFileSync(path.join(root, 'data', 'graph.json'), 'utf8'))
  return {
    props: {
      graph,
    },
  }
}

export default function Home({ graph }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Interkonnection</title>
        <meta name="description" content="A web of knowledge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Network graph={graph}/>
    </div>
  )
}
