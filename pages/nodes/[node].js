// import generateRss from '@/lib/generate-rss'
// import { getAllFilesFrontMatter } from '@/lib/mdx'
// import { getAllTags } from '@/lib/tags'
// import kebabCase from '@/lib/utils/kebabCase'
// import fs from 'fs'
import path from 'path'
import getAllFilesRecursively from '../../lib/utils/files'
import Graph from '../../lib/graph'

const root = process.cwd()
const prefixPaths = path.join(root, "data", "Knowledge");
const graph = new Graph(prefixPaths);

export async function getStaticPaths() {
  const posts = graph.getNodes();
  const urlEndings = posts.map((post) => post.urlEnding);
  return {
    paths: urlEndings.map((urlEnding) => ({
      params: { node: urlEnding },
    })),
    // paths: [{params: {node: "test"}}],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
//   var posts = graph.getNodes();
// const post = posts.find((post) => post.urlEnding === params.node);
  const posts = graph.getNodes();
  var post = posts[10]; 
  const urlEndings = posts.map((post) => post.urlEnding);
  // return { props: { title: params.node, content: posts[10].urlEnding.toString()} }
  post = posts.filter((post) => post.urlEnding === params.node)[0];
  if (!post) {
    return { props: { title: params.node, content: "No content"} };
  }
  return { props: { title: params.node, content: post.content} }
}

export default function Node({ title, content }) {
  return (
    <>
      <h1>{title}</h1>
      <text>{content}</text>
    </>
  )
}
