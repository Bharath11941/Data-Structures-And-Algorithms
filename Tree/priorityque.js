class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element, priority) {
    const item = { element, priority };
    let added = false;
    for (let i = 0; i < this.queue.length; i++) {
      if (item.priority < this.queue[i].priority) {
        this.queue.splice(i, 0, item);
        added = true;
        break;
      }
    }
    if (!added) {
      this.queue.push(item);
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue.shift().element;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }
}
const pq = new PriorityQueue();
pq.enqueue('Task 1', 2);
pq.enqueue('Task 2', 1);
pq.enqueue('Task 3', 3);

console.log(pq.dequeue()); // Output: Task 2
console.log(pq.dequeue()); // Output: Task 1
console.log(pq.dequeue()); // Output: Task 3
