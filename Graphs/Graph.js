class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v != vertex2
        )
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v != vertex1
        )
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacencyList = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacencyList)
        }
        delete this.adjacencyList[vertex];
    }
}

var graph = new Graph();
graph.addVertex('Vivek');
graph.addVertex('Satya')
graph.addVertex('Chow')
graph.addEdge('Vivek', 'Chow');
graph.addEdge('Vivek', 'Satya');
graph.removeEdge('Vivek', 'Chow')
graph.removeVertex('Vivek')
console.log(graph.adjacencyList);

