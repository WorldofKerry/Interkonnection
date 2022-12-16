import path from 'path'
import Graph from '@/lib/Graph'
import MarkdownRender from '@/lib/MarkdownRender'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '@/styles/Node.module.css'

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
  const post = posts.filter((post) => post.urlEnding === params.node)[0];
  if (!post) {
    return { props: { title: params.node, content: "No content", backlinks: []} };
  }
  return { props: { title: post.title, content: post.content, backlinks: post.backlinks, urlEnding: post.urlEnding} }
}

export default function Node({ title, content, backlinks, urlEnding}) {
  const router = useRouter()
  const fullPath = router.pathname;
  const urlPrefix = fullPath.substring(0, fullPath.lastIndexOf("/")) + "/";
  
  return (
    <div style={{ padding: "1%" }}>
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
      <Link href={{
        pathname: "/graph/" + urlEnding,
      }}>
        <button
          className={styles.backButton}
        >
          Graph
        </button>
      </Link>
    </div>
  );
}
