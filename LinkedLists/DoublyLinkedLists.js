class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedLists {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    print() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        const lastNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = lastNode.prev;
            this.tail.next = null;
            lastNode.prev = null;
        }
        this.length--;
        return lastNode;
    }

    shift() {
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead
    }

    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let mid = this.length / 2
        let current, count
        if (index <= mid) {
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current.val;
    }

    set(index, val) {
        let foundNode = this.get(index)
        if (foundNode !== null) {
            foundNode.val = val;
            return true
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index ===  this.length) return !!this.push(val);
        let newNode = new Node(val);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return !!this.shift();
        if (index ===  this.length) return !!this.pop();
        let removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
}

const list = new DoublyLinkedLists();
list.push(45)
list.push(83)
list.push(34)
list.unshift(43)
list.remove(2)
console.log(list)
console.log(list.print())
console.log(list.get(2))