class GraphNode {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}

let a = new GraphNode("a");
let b = new GraphNode("b");
let c = new GraphNode("c");
let d = new GraphNode("d");
let e = new GraphNode("e");
let f = new GraphNode("f");

a.neighbors = [e, c, b];
c.neighbors = [b, d];
e.neighbors = [a];
f.neighbors = [e];

//mySet.has - to check if you have the letter in the array.
function depthFirst(node, visited = new Set()) {
  if (visited.has(node.val)) return; //base case
  visited.add(node.val);
  console.log(node.val);
  node.neighbors.forEach((neighbor) => depthFirst(neighbor, visted));
}

depthFirst(a);

//example 2 for the graph object

let graph = {
  a: ["b", "c", "e"],
  b: [],
  c: ["b", "d"],
  d: [],
  e: ["a"],
  f: ["e"],
};

function depthFirst(graph, node, visited = new Set()) {
  if (visited.has(node)) return;
  console.log(node);
  visited.add(node);
  graph[node].forEach((neighbor) => depthFirst(graph, neighbor, visited));
}

depthFirst(graph, "a");
