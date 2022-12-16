import Head from "next/head";
import Network from "@/components/Network";
import fs from "fs";
import path from "path";
import Graph from "@/lib/Graph";

export async function getStaticProps( context ) {
  const root = process.cwd()
  const prefixPaths = path.join(root, "data", "Knowledge");
  const graph = new Graph(prefixPaths);
  const seralizeableGraph = JSON.parse(JSON.stringify(graph)); 
  const node = context.params.node;
  return {
    props: {
      seralizeableGraph,
      node,
    },
  };
}

export default function Home({ seralizeableGraph, node }) {
  return (
    <div>
      <Head>
        <title>Interkonnection</title>
        <meta name="description" content="A web of knowledge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      <text>Context: {node}</text>  
      <Network graph={seralizeableGraph} width={"100vw"} height={"100vh"} />
    </div>
  );
}
