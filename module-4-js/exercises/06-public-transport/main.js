function getTravelRoute(input, fromStation, toStation) {
  const Edge = function(from, to, duration, direction) {
    this.from = "";
    this.to = "";
    this.duration = "";
    this.direction = "";
  };

  const Node = function(node, weight = Infinity) {
    this.name = node;
    this.weight = weight;
    this.visited = false;
    this.path = [];
  };

  function parseCSVFrom(input) {
    let edges = [];
    for (let i = 0; i < input.split("\n").length; i++) {
      let edge = new Edge();
      for (let j = 0; j < Object.keys(edge).length; j++) {
        edge[Object.keys(edge)[j]] = input.split("\n")[i].split(",")[j];
        if (Object.keys(edge)[j] === "duration") {
          edge.duration = parseInt(edge.duration);
        }
      }
      edges.push(edge);
    }
    return edges;
  }
  let edges = parseCSVFrom(input);

  function extractNodesFrom(edges) {
    let nodes = [];
    let nodeExists;
    let uniqueNodes = [];
    for (let i = 0; i < edges.length; i++) {
      nodeExists = false;
      for (let j = 0; j < uniqueNodes.length; j++) {
        if (uniqueNodes[j] === edges[i].from) {
          nodeExists = true;
        }
      }
      if (nodeExists === false) {
        uniqueNodes.push(edges[i].from);
        let node = new Node(edges[i].from);
        nodes.push(node);
      }
    }
    return nodes;
  }
  let nodes = extractNodesFrom(edges);

  function spfDijkstra(fromStation) {
    let currentNode = nodes.filter(function(node) {
      return node.name === fromStation;
    });
    let visited = [];
    var minimumWeight = [];
    currentNode[0].weight = 0;

    for (let j = 0; j < edges.length; j++) {
      let edge = edges.filter(function(edge) {
        return edge.from === fromStation && !visited.includes(edge.to);
      });

      for (let i = 0; i < edge.length; i++) {
        let node = nodes.filter(function(node) {
          return node.name === edge[i].to;
        });
        if (currentNode[0].weight + edge[i].duration < node[0].weight) {
          node[0].weight = currentNode[0].weight + edge[i].duration;
          if (currentNode[0].path.length > 0) {
            node[0].path.push(currentNode[0].path);
          }
          node[0].path.push(edge[i]);
        }
        minimumWeight.push(node[0].weight);
      }

      currentNode[0].visited = true;
      const isToBeDeleted = element => element === currentNode[0].weight;
      let index = minimumWeight.findIndex(isToBeDeleted);
      if (index >= 0) {
        minimumWeight.splice(index, 1);
      }
      visited.push(currentNode[0].name);
      currentNode = nodes.filter(function(node) {
        return (
          node.weight === Math.min.apply(Math, minimumWeight) &&
          node.visited === false
        );
      });

      if (currentNode.length > 0) {
        fromStation = currentNode[0].name;
      } else break;
    }

    let connections = nodes.filter(function(node) {
      return node.name === toStation;
    });
    connections = connections[0].path.flat(Infinity);
    let travel_time = 0;
    for (let i = 0; i < connections.length; i++) {
      travel_time += connections[i].duration;
    }
    let route = {
      connections: connections,
      duration: travel_time
    };
    return route;
  }

  console.log(spfDijkstra(fromStation));
}

input = `A,B,10,EAST
B,A,10,WEST
B,C,10,EAST
B,D,15,EAST
C,B,10,WEST
C,E,20,EAST
D,B,15,WEST
D,F,10,EAST
E,C,20,WEST
E,G,30,EAST
F,D,10,WEST
F,G,25,EAST
G,E,30,WEST
G,F,25,WEST`;
from = "C";
to = "F";

/* input = `A,B,10,EAST
B,A,10,WEST
B,C,15,EAST
C,B,15,WEST
C,D,30,EAST
D,C,30,WEST`;
from = "A";
to = "D"; */

/* input = `A,B,10,EAST
B,A,10,WEST
B,C,10,EAST
B,D,15,EAST
C,B,10,WEST
C,E,20,EAST
C,J,10,WEST
D,B,15,WEST
D,F,10,EAST
E,C,20,WEST
E,G,30,EAST
F,D,10,WEST
F,G,25,EAST
G,E,30,WEST
G,F,25,WEST
G,H,10,WEST
H,G,10,EAST
H,I,8,EAST
I,H,8,WEST
I,J,5,EAST
J,I,5,WEST
J,C,10,EAST`;
from = "I";
to = "D"; */

/* input = `A,B,10,EAST
B,A,10,WEST
B,C,15,EAST
C,B,15,WEST`;
from = "C";
to = "A"; */

getTravelRoute(input, from, to);
