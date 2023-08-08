// class ListNode {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// function arrayToLinkedList(arr) {
//   if (!arr || !arr.length) {
//     return null;
//   }

//   let head = new ListNode(arr[0]);
//   let current = head;

//   for (let i = 1; i < arr.length; i++) {
//     current.next = new ListNode(arr[i]);
//     current = current.next;
//   }

//   return head;
// }
// let arr=[4,6,8,23,89,21]
// let list=arrayToLinkedList(arr)
// console.log(list)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function arrayToLinkedList(arr) {
  if (arr.length === 0) {
    return null;
  }
  const head = new Node(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    const node = new Node(arr[i]);
    current.next = node;
    current = node;
  }
  return console.log(JSON.stringify(head));;
}
const arr = [1, 2, 3, 4, 5];
arrayToLinkedList(arr);

 // Output: Node { value: 1, next: Node { value: 2, next: Node { value: 3, next: Node { value: 4, next: Node { value: 5, next: null } } } } } 
