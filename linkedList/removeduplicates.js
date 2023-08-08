class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicates(head) {
  let current = head;

  while (current !== null && current.next !== null) {
    if (current.value === current.next.value) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(1);
head.next.next.next.next = new Node(3);

console.log(removeDuplicates(head)); // Output: Node { value: 1, next: Node { value: 2, next: Node { value: 3, next: null } } }
