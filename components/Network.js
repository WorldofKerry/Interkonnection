import React, { Component } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import Cytoscape from "cytoscape";
import COSEBilkent from "cytoscape-cose-bilkent";

Cytoscape.use(COSEBilkent);

class Network extends Component {
  constructor(props) {
    super(props);
    this.graph = props.graph;
    this.width = props.width;
    this.height = props.height;
  }
  cy = null;
  searchInput = null;
  highlightedNode = null; 

  searchNode = () => {
    const searchValue = this.searchInput.value;
    const matchingNode = this.cy.getElementById(searchValue);

    if (this.highlightedNode) {
      // If a node is already highlighted, reset its color to the default
      this.highlightedNode.style({ 'background-color': '' });
    }

    if (matchingNode.length > 0) {
      // If a matching node is found, change its color to red
      matchingNode.style({ 'background-color': 'red' });
      this.highlightedNode = matchingNode;
    } else {
      // If no matching node is found, display a message
      alert(`No node with id "${searchValue}" was found`);
    }
  };


  render() {
    var elements = [];
    for (var i = 0; i < this.graph.nodes.length; i++) {
      var node = this.graph.nodes[i];
      var element = { data: { id: node.title, label: node.title, urlEnding: node.urlEnding } };
      elements.push(element);
    }
    for (var i = 0; i < this.graph.edges.length; i++) {
      var edge = this.graph.edges[i];
      var element = { data: { source: edge.source, target: edge.target } };
      elements.push(element);
    }
    const layout = {
      name: "cose-bilkent",
    };
    return (
      <div>
        <input
          type="text"
          ref={(input) => (this.searchInput = input)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              this.searchNode();
            }
          }}
        />
        <button onClick={this.searchNode}>Search</button>
        <CytoscapeComponent
          elements={elements}
          layout={layout}
          style={{
            width: this.width,
            height: this.height,
            backgroundImage: "radial-gradient(#004954, #000000)",
          }}
          cy={(cy) => {
            this.cy = cy;
            cy.on("tap", "node", function (evt) {
              // redirect to the node's page
              window.location.href = "nodes/" + evt.target.data("urlEnding");
              // console.log(evt.target.style())
            });
          }}
        />
      </div>
    );
  }
}

export default Network;
