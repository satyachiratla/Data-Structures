class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    var newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleup;
  }
  bubbleup() {
    var index = this.values.length - 1;
    var element = this.values[index];

    while (index > 0) {
      var parentIndex = Math.floor((index - 1) / 2);
      var parentElement = this.values[parentIndex];
      if (element.priority >= parentElement.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parentElement;
      index = parentIndex;
    }
  }

  dequeue() {
    var min = this.values[0];
    var end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    var index = 0;
    var length = this.values.length;
    var element = this.values[0];

    while (true) {
      var leftChildIndex = 2 * index + 1;
      var rightChildIdx = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) {
          swap = leftChild;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < element.priority)
        ) {
          swap = rightChild;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

var ER = new PriorityQueue();
ER.enqueue('common cold', 2);
ER.enqueue('high fever', 4);
ER.enqueue('gunshot wound', 3);
ER.enqueue('small infection', 1);
ER.dequeue();
console.log(ER);
