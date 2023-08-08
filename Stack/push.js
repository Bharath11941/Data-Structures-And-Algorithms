 class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

 class Stack{
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(data) {
    const node = new Node(data);
    if(!this.top){
      this.top=node
    }
    node.next = this.top;
    this.top = node;
    this.length++;
  }
  print(){
    if(!this.top){
      console.log('empty')
    }else{
      let curr=this.top
      let str=''
      while(curr){
        str+=`${curr.data} `
        curr=curr.next
      }
      console.log(str);
    }
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.print()
