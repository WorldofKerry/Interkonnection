import React, { Component } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import * as graph  from '../data/graph.json'

const root = process.cwd();

function fileNameFilter(fileName) {
  // Filter out xxxx-xx-xx in the file name
  const dateRegex = /\d{4}-\d{2}-\d{2}/;
  // Filter out .webm .png .jpg .jpeg .gif
  const extensionRegex = /\.(webm|png|jpg|jpeg|gif)$/;
  return !dateRegex.test(fileName) && !extensionRegex.test(fileName);
}

var nodes = graph.elements.nodes.filter((node) => {
    return fileNameFilter(node.data.name)
  })
  nodes = nodes.map((node) => {
    var newNode = {}
    newNode.data = {}
    newNode.data.id = node.data.id
    newNode.data.label = node.data.name
    newNode.position = {}
    newNode.position.x = Math.round(node.position.x)
    newNode.position.y = Math.round(node.position.y)
    newNode.data.href = 'obsidian/' + node.data.name.replaceAll(' ', '-')
    return newNode
  })
  var edges = graph.elements.edges.filter((edge) => {
    return fileNameFilter(edge.data.source) && fileNameFilter(edge.data.target)
  })
  edges = edges.map((edge) => {
    var newEdge = {}
    newEdge.data = {}
    newEdge.data.source = edge.data.source
    newEdge.data.target = edge.data.target
    newEdge.label = edge.data.context
    return newEdge
  })
  const elements = [...nodes, ...edges]

class Network extends Component {  
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Network</h1>
        <CytoscapeComponent
          elements={elements}
          style={{
            width: "900px",
            height: "506px",
            backgroundColor: "#ffffff",
          }}
          stylesheet={[
            {
              selector: "node",
              style: {
                label: "data(label)",
                color: "#000000",
                "text-valign": "center",
                "text-halign": "center",
                "background-color": "#A020F0",
                "text-outline-color": "#FFFF00",
                "text-outline-width": 1,
                "text-outline-opacity": 0.75,
                "font-size": 5,
                "font-weight": "bold",
                "text-wrap": "wrap",
                "text-max-width": "15px",
                "text-margin-x": "0px",
                "text-events": "yes",
                "text-rotation": "autorotate",
              },
            },
            {
              selector: "edge",
              style: {
                width: 0.75,
              },
            },
          ]}
          cy={(cy) => {
            cy.on("tap", "node", function (evt) {
              // redirect to the node's page
              window.location.href = evt.target.data("href");
              // console.log(evt.target.style())
            });
            let options = {
              name: "cose",
            };
            cy.layout(options);
          }}
        />
      </div>
    );
  }
}

export default Network;