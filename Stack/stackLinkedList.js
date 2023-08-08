class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
    this.max=5
  }

  push(value) {
    const newNode = new Node(value);
    if(this.size>=this.max) return `overFlow condition`
    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++;
  }

  pop() {
    if (!this.top) {
      return `underFlow condition`;
    }
    const poppedNode = this.top;
    this.top = poppedNode.next;
    this.size--;
    return poppedNode.value;
  }

  peek() {
    // return this.top ? this.top.value : null;
    if(!this.top){
      return null
    }
    return this.top.value
  }

  isEmpty() {
    return this.size === 0;
  }
  print() {
    let current = this.top;
    let stackStr = "";
    while (current) {
      stackStr += `${current.value} `;
      current = current.next;
    }
    console.log(stackStr);
  }
}

let stack=new Stack()
// console.log(stack.pop());//underflow condition -when you try to pop from empty stack
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.push(60)
stack.push(80)
stack.push(90)
console.log(stack.push(100));
stack.print()
console.log(stack.size);

