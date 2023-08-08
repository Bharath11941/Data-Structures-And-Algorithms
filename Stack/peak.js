const Node = class {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
};

const Stack = class {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  peek() {
    if (!this.top) {
      return null;
    }

    return this.top.data;
  }
};

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
const topElement = myStack.peek();
console.log(topElement);
console.log(myStack);
