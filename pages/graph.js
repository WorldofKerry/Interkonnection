import Network from '../components/Network'
import fs from 'fs'
import path from 'path'

const root = process.cwd()

export default function Graph({ graph }) { 
  return (
    <>
      <Network graph={graph}/>    
    </>
  )
}

export async function getStaticProps() {
  const graph = JSON.parse(fs.readFileSync(path.join(root, 'data', 'graph.json'), 'utf8'))
  return {
    props: {
      graph,
    },
  }
}
