import getAllFilesRecursively from "./utils/files";
import path from "path";
import fs from "fs";

class Node {
  constructor(title, filePath, urlEnding, tags, links, backlinks, content) {
    this.title = title;
    this.filePath = filePath;
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
    for (var i = 0; i < filePaths.length; i++) {
        const filePath = filePaths[i];
        const fileName = filePath.slice(prefixPath.length + 1).replace(/\\/g, "/");
        const title = path.basename(fileName, path.extname(fileName));
        var fileContent = fs.readFileSync(filePath, "utf8");
        var urlEnding = title.replace(/\s/g, "_");        
        var links = [];
        var backlinks = [];
        var tags = [];
        var linkRegex = /\[\[(.*?)\]\]/g;
        var tagRegex = /#([a-zA-Z0-9_]+)/g;
        var linkMatch = linkRegex.exec(fileContent);
        var tagMatch = tagRegex.exec(fileContent);
        while (linkMatch != null) {
            links.push(linkMatch[1]);
            linkMatch = linkRegex.exec(fileContent);
        }
        while (tagMatch != null) {
            tags.push(tagMatch[1]);
            tagMatch = tagRegex.exec(fileContent);
        }
        for (var j = 0; j < filePaths.length; j++) {
            if (i == j) {
                continue;
            }
            const otherFilePath = filePaths[j];
            const otherFileName = otherFilePath.slice(prefixPath.length + 1).replace(/\\/g, "/");
            const otherTitle = path.basename(otherFileName, path.extname(otherFileName));
            var otherFileContent = fs.readFileSync(otherFilePath, "utf8");
            var otherUrlEnding = otherTitle.replace(/\s/g, "_");
            var otherLinkRegex = new RegExp("\\[\\[" + title + "\\]\\]", "g");
            var otherLinkMatch = otherLinkRegex.exec(otherFileContent);
            while (otherLinkMatch != null) {
                backlinks.push(otherUrlEnding);
                otherLinkMatch = otherLinkRegex.exec(otherFileContent);
            }
        }        
        var node = new Node(title, filePath, urlEnding, tags, links, backlinks, fileContent);
        nodes.push(node);
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
