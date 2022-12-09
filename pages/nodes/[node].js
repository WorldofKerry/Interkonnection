import path from 'path'
import Graph from '@/lib/Graph'
import MarkdownRender from '@/lib/MarkdownRender'
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
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = graph.getNodes();
  var post = posts[10]; 
  const urlEndings = posts.map((post) => post.urlEnding);
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
