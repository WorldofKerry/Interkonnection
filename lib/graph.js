import getAllFilesRecursively from "./utils/files";

class Node {
  constructor(title, filePath, urlEnding, tags, links, backlinks, content) {
    this.title = title;
    this.filePath = filePath;
    this.fileName = urlEnding;
    this.tags = tags;
    this.links = links;
    this.backlinks = backlinks;
    this.content = content;
  }
}
class Edge {
  constructor(source, target) {
    this.source = source;
    this.target = target;
  }
}
class Graph {
  constructor(prefixPath) {
    this.filePath = prefixPath;
  }
  updateGraph() {
    var files = getAllFilesRecursively(this.filePath);
    // remove the prefix path
    files = files.map((file) =>
      file.slice(prefixPath.length + 1).replace(/\\/g, "/")
    );
    // remove the file extension
    files = files.map((file) => path.basename(file, path.extname(file)));
    // replace spaces with underscores
    files = files.map((file) => file.replace(/\s/g, "_"));

    var nodes = [];
    var edges = [];
    for (var i = 0; i < files.length; i++) {
      var node = new Node(files[i], files[i], files[i], [], [], [], "");
      nodes.push(node);
    }
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      var fileContent = fs.readFileSync(
        path.join(prefixPath, file + ".md"),
        "utf8"
      );
      var links = fileContent.match(/\[\[.*?\]\]/g);
      if (links != null) {
        for (var j = 0; j < links.length; j++) {
          var link = links[j];
          link = link.replace("[[", "");
          link = link.replace("]]", "");
          link = link.replace(/\s/g, "_");
          var target = nodes.find((node) => node.fileName == link);
          if (target != null) {
            var edge = new Edge(file, link);
            edges.push(edge);
          }
        }
      }
    }
    var graph = new Graph(prefixPath);
    graph.nodes = nodes;
    graph.edges = edges;
    return graph;
  }
  getNodes() {
    return this.nodes;
  }
}

export default Graph;
