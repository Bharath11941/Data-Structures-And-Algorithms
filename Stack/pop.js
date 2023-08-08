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
    if(!this.top){
      this.top=newNode
    }
    
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  pop() {
    if (!this.top) {
      return `underFlow condition`;
    }

    const poppedNode = this.top;
    this.top = poppedNode.next;
    poppedNode.next = null;
    this.length--;

    return poppedNode.data;
  }
};

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
const poppedElement = myStack.pop();
console.log(poppedElement);
console.log(myStack); 
