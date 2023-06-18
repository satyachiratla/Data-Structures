class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleup();
    }

    bubbleup() {
        let index = this.values.length - 1;
        let element = this.values[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1)/2);
            let parentElement = this.values[parentIndex];
            if (element <= parentElement) break;
            this.values[parentIndex] = element;
            this.values[index] = parentElement;
            index = parentIndex;
        }
    }

    extractMax() {
        let max = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown() {
        let idx = 0;
        let length = this.values.length;
        let element = this.values[0];

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

const heap = new MaxBinaryHeap();
heap.insert(34);
heap.insert(11);
heap.insert(59);
heap.insert(25);
heap.insert(98);
heap.insert(63);
heap.extractMax();
console.log(heap);