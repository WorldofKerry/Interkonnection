import React, { Component } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import Cytoscape from "cytoscape";
import COSEBilkent from "cytoscape-cose-bilkent";
import styles from "../styles/Network.module.css";

Cytoscape.use(COSEBilkent);

const styleSheet = [
  {
    selector: "node",
    style: {
      label: "data(label)",
      "text-valign": "center",
      "text-halign": "center",
      "background-color": "#008094",
      "text-outline-color": "#00C2E0",
      "text-outline-width": 0.5,
      "text-outline-opacity": 1,
      "font-size": 5,
      "font-weight": "bold",
      "text-wrap": "wrap",
      "text-max-width": "15px",
      "text-margin-x": "0px",
      "text-events": "yes",
      "text-rotation": "autorotate",
      color: "#000000",
    },
  },
  {
    selector: "edge",
    style: {
      width: 0.75,
      "line-color": "#00C2E0",
    },
  },
];

class Network extends Component {
  constructor(props) {
    super(props);
    this.graph = props.graph;
    this.width = props.width;
    this.height = props.height;
    // replace _ with space
    if (props.prevNodeUrlEnding) {
      this.prevNodeTitle = props.prevNodeUrlEnding.replace(/_/g, " ");
    }
  }
  cy = null;
  searchInput = null;
  highlightedNode = null;

  searchNode = () => {
    const searchValue = this.searchInput.value.toLowerCase();
    const matchingNode = this.cy.nodes().filter((node) => {
      return RegExp(searchValue).test(node.id().toLowerCase());
    });

    if (this.highlightedNode) {
      this.highlightedNode.style({ "background-color": "" });
    }

    if (matchingNode.length > 0) {
      matchingNode.style({ "background-color": "white" });
      this.highlightedNode = matchingNode;
    } else {
      alert(`No node with id "${searchValue}" was found`);
    }
  };

  render() {
    var elements = [];
    for (var i = 0; i < this.graph.nodes.length; i++) {
      var node = this.graph.nodes[i];
      var element = {
        data: { id: node.title, label: node.title, urlEnding: node.urlEnding },
      };
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
        <text className={styles.title}>Interkonnection</text>
        <input
          type="text"
          ref={(input) => (this.searchInput = input)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              this.searchNode();
            }
          }}
          className={styles.search}
        />
        <button className={styles.button} onClick={this.searchNode}>Search</button>
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
              window.location.href = "/nodes/" + evt.target.data("urlEnding");
            });
            
            if (this.prevNodeTitle) {
              const matchingNode = cy.nodes().filter((node) => {
                return node.id() === this.prevNodeTitle;
              });
              if (matchingNode.length > 0) {
                matchingNode.style({ "background-color": "white" });
              }
              this.highlightedNode = matchingNode;
            }
          }}
          stylesheet={styleSheet}
        />
      </div>
    );
  }
}

export default Network;
