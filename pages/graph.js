import Network from '../components/Network'

export default function Graph({ graph }) {
 
  return (
    <>
      <Network />    
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
