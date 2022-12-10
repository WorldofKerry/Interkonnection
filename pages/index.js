import Head from "next/head";
import Network from "@/components/Network";
import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const root = process.cwd();
  const graph = JSON.parse(
    fs.readFileSync(path.join(root, "data", "graph.json"), "utf8")
  );
  return {
    props: {
      graph,
    },
  };
}

export default function Home({ graph }) {
  return (
    <div>
      <Head>
        <title>Interkonnection</title>
        <meta name="description" content="A web of knowledge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{position: 'absolute', 
      top: '50%', 
      left: '50%', 
      marginRight: '-50%', 
      transform: 'translate(-50%, -50%)'}}>
        <Network graph={graph} width={"100vw"} height={"100vh"} />
      </div>
    </div>
  );
}
