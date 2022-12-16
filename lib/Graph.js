import getAllFilesRecursively from "./utils/files";
import path from "path";
import fs from "fs";

class Node {
  constructor(title, urlEnding, tags, links, backlinks, content) {
    this.title = title; // this is used as the id for edges
    this.urlEnding = urlEnding; 
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
    const filePaths = getAllFilesRecursively(prefixPath);
    var nodes = [];
    var edges = [];
    // nodes
    for (var i = 0; i < filePaths.length; i++) {
      // preprocessing
      const filePath = filePaths[i];
      const fileName = filePath
        .slice(prefixPath.length + 1)
        .replace(/\\/g, "/");
      const title = path.basename(fileName, path.extname(fileName));
      const urlEnding = title.replace(/\s/g, "_");
      var fileContent = fs.readFileSync(filePath, "utf8");

      // links
      const linkRegex = /\[\[(.*?)\]\]/g;
      const links = [];
      fileContent.replace(linkRegex, function (match, group1) {
        links.push(group1);
      });
      // remove [[name]] and replace with [name](/nodes/name)
      fileContent = fileContent.replace(linkRegex, function (match, p1) {
        return "[" + p1 + "](/nodes/" + p1.replace(/\s/g, "_") + ")";
      });
      
      // tags
      const tagRegex = /#([a-zA-Z0-9_]+)/g;
      const tags = [];
      fileContent.replace(tagRegex, function (match, group1) {
        tags.push(group1);
      });

      // backlinks
      var backlinks = [];
      for (var j = 0; j < filePaths.length; j++) {
        if (i == j) {
          continue;
        }
        const otherFilePath = filePaths[j];
        const otherFileName = otherFilePath
          .slice(prefixPath.length + 1)
          .replace(/\\/g, "/");
        const otherTitle = path.basename(
          otherFileName,
          path.extname(otherFileName)
        );
        var otherFileContent = fs.readFileSync(otherFilePath, "utf8");
        var otherUrlEnding = otherTitle.replace(/\s/g, "_");
        if (title.includes('[[') || title.includes(']]')) {
          break; 
        } // BUG1
        var otherLinkRegex = new RegExp("\\[\\[" + title + "\\]\\]", "g");
        var otherLinkMatch = otherLinkRegex.exec(otherFileContent);
        while (otherLinkMatch != null) {
          backlinks.push(otherUrlEnding);
          otherLinkMatch = otherLinkRegex.exec(otherFileContent);
        }
      }
      var node = new Node(
        title,
        urlEnding,
        tags,
        links,
        backlinks,
        fileContent
      );      
      if (!(title.includes('[[') || title.includes(']]'))) {
        nodes.push(node);
      } // BUG1
    }
    // edges
    for (var i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        for (var j = 0; j < node.links.length; j++) {
            const link = node.links[j];
            for (var k = 0; k < nodes.length; k++) {
                const otherNode = nodes[k];
                if (otherNode.title == link) {
                    var edge = new Edge(node.title, otherNode.title);
                    edges.push(edge);
                }
            }
        }
    }
    this.nodes = nodes;
    this.edges = edges;
  }
  getNodes() {
    return this.nodes;
  }
  getEdges() {
    return this.edges;
  }
}

export default Graph;
