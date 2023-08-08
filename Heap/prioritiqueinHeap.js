class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  heapifyUp(index) {
    const parentIndex = this.getParentIndex(index);
    if (parentIndex >= 0 && this.heap[index].priority < this.heap[parentIndex].priority) {
      this.swap(index, parentIndex);
      this.heapifyUp(parentIndex);
    }
  }

  heapifyDown(index) {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);
    let smallest = index;

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].priority < this.heap[smallest].priority) {
      smallest = leftChildIndex;
    }

    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority < this.heap[smallest].priority) {
      smallest = rightChildIndex;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  enqueue(item, priority) {
    const element = { item, priority };
    this.heap.push(element);
    this.heapifyUp(this.heap.length - 1);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop().item;
    }

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return root.item;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.heap[0].item;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  size() {
    return this.heap.length;
  }
}

// Example usage:
const pq = new PriorityQueue();
pq.enqueue('Task 1', 3);
pq.enqueue('Task 2', 1);
pq.enqueue('Task 3', 2);

console.log(pq.dequeue()); // Output: 'Task 2'
console.log(pq.dequeue()); // Output: 'Task 3'
console.log(pq.dequeue()); // Output: 'Task 1'
console.log(pq.dequeue()); // Output: null
