// import generateRss from '@/lib/generate-rss'
// import { getAllFilesFrontMatter } from '@/lib/mdx'
// import { getAllTags } from '@/lib/tags'
// import kebabCase from '@/lib/utils/kebabCase'
// import fs from 'fs'
import path from 'path'
import getAllFilesRecursively from '../../lib/utils/files'

const root = process.cwd()

export async function getStaticPaths() {
  const prefixPaths = path.join(root, "data", "Knowledge");
  var files = getAllFilesRecursively(prefixPaths);
  // remove the prefix path
  files = files.map((file) =>
    file.slice(prefixPaths.length + 1).replace(/\\/g, "/")
  );
  // remove the file extension
  files = files.map((file) => path.basename(file, path.extname(file)));
  // replace spaces with underscores
  files = files.map((file) => file.replace(/\s/g, "_"));

  return {
    paths: files.map((file) => ({
        params: {
            node: file,
        },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
const prefixPaths = path.join(root, "data", "Knowledge");
var files = getAllFilesRecursively(prefixPaths);
// remove the prefix path
files = files.map((file) => file.slice(prefixPaths.length + 1).replace(/\\/g, '/'))
// remove the file extension
files = files.map((file) => path.basename(file, path.extname(file)))
// replace spaces with underscores
files = files.map((file) => file.replace(/\s/g, '_'))

const posts = files[5]
  return { props: { posts: posts, tag: "" } }
}

export default function Tag({ posts, tag }) {
  return (
    <>
      <h1>Node Content</h1>
      <h1>{posts}</h1>
    </>
  )
}
