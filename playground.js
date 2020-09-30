class Vertex {
  constructor(value) {
    this.value;
    this.neighbors = [];
  }
}

class Graph {
  constructor() {
    this.graff = new Object();
  }

  addVertex(value) {
    this.graff[value] = new Vertex(value);
  }

  addEdge(value1, value2) {
    // if they do not exist in graff, we have to add them
    if (!this.graff[value1]) this.addVertex(value1);
    if (!this.graff[value2]) this.addVertex(value2);
    // just create vars for each vertex
    const value1Vertex = this.graff[value1];
    const value2Vertex = this.graff[value2];
    //make sure the neighbor connection is accomplished
    value2Vertex.neighbors.push(value1Vertex);
    value1Vertex.neighbors.push(value2Vertex);
  }

  getVertices() {
    return Object.keys(this.graff);
  }

  getEdges() {
    const li = [];
    for (let srcValue in this.graff) {
      const vertex = this.graff[srcValue];
      //push the connection between two vertices into the list
      vertex.neighbors.forEach((neiVertex) =>
        li.push([srcValue, neiVertex.value])
      );
    }
    return li;
  }

  adjList() {
    const adjList = new Object();
    for (let scrValue in this.graff) {
      // sets up var and grabs vertex
      const vertex = this.graff[srcValue];
      // sets up the 'neighbors' array
      adjList[srcValue] = new Array();
      // we want push each neighboring vertex in the neighbors array
      vertex.neighbors.forEach((neighbor) =>
        adjList[srcValue].push(neighbor.value)
      );
    }
    return adjList;
  }
  breadthFirstTraversal(startValue) {
    const adjList = this.adjList;
    const queue = [startValue];
    const resLi = [];
    const visted = new Set();

    //we want to use queue to pop off and continually add neighbors to iterate
    while (queue.length > 0) {
      //shift off current value in 'front of line'
      const value = queue.shift();
      if (visited.has(value)) continue;
      resLi.push(value);
      visited.add(value);
      // use spread operator to spread 'neighbor' values into the queue
      queue.push(...adjList[value]);
    }
  }
}

//unweighted, undirected
const di = {
  a: ["b", "c", "d"],
  b: ["a", "c", "e"],
  c: ["a", "b", "f", "g"],
  d: ["a", "g"],
  e: ["b"],
  f: ["c", "g"],
  g: ["c", "f", "g"],
  h: [],
};

const graph = new Graph();
graph.addEdge("a", "b");
graph.addEdge("a", "c");
graph.addEdge("a", "d");
graph.addEdge("d", "g");
