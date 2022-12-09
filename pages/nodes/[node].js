// import generateRss from '@/lib/generate-rss'
// import { getAllFilesFrontMatter } from '@/lib/mdx'
// import { getAllTags } from '@/lib/tags'
// import kebabCase from '@/lib/utils/kebabCase'
import fs from 'fs'
import path from 'path'
import getAllFilesRecursively from '../../lib/utils/files'
import Graph from '../../lib/Graph.js'
// import ReactMarkdown from 'react-markdown'
import MarkdownRender from '../../lib/MarkdownRender'
import { useRouter } from 'next/router'

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
    return { props: { title: params.node, content: "No content", backlinks: []} };
  }
  return { props: { title: post.title, content: post.content, backlinks: post.backlinks} }
}

export default function Node({ title, content, backlinks}) {
  const router = useRouter()
  const fullPath = router.pathname;
  const urlPrefix = fullPath.substring(0, fullPath.lastIndexOf("/")) + "/";
  return (
    <>
      <h1>{title}</h1>
      <MarkdownRender>{content}</MarkdownRender>
      <h2>Backlinks</h2>
      <ul>
        {backlinks.map((backlink) => (
          <a href={urlPrefix + backlink} key={backlink}>
            <li>{backlink.replace(/_/g, " ")}</li>
          </a>
        ))}
      </ul>
    </>
  )
}
