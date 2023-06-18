class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    var current = this.root;
    var found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  BreadthFirstSearch() {
    var node = this.root;
    var data = [];
    var queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    var data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) data.push(node.left);
      if (node.right) data.push(node.right);
    }
    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    var data = [];
    function traverse(node) {
      if (node.left) data.push(node.left);
      if (node.right) data.push(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    var data = [];
    function traverse(node) {
      if (node.left) data.push(node.left);
      data.push(node.value);
      if (node.right) data.push(node.right);
    }
    traverse(this.root);
    return data;
  }
}

var tree = new BinarySearchTree();
console.log(tree.insert(10));
console.log(tree.insert(5));
console.log(tree.insert(25));
console.log(tree.insert(3));
console.log(tree.DepthFirstSearch());
// console.log(tree.find(35));
// console.log(tree)
