class Stack{
  constructor(){
    //in js list can be easily represented as an array
    this.elements=[]
  }
  push(element){
    this.elements.push(element)
  }
  pop(){
    return this.elements.pop()
  }
  peek(){
    console.log(this.elements[this.elements.length-1])
  }
  isEmpty(){
    return this.elements.length==0
  }
  isSize(){
    console.log(this.elements.length)
  }
  print(){
    console.log(this.elements.toString())
  }
}
let stack=new Stack()
console.log(stack.isEmpty())
stack.push(34)
stack.push(44)
stack.push(56)
stack.push(78)
stack.isSize()
console.log(stack.pop())
stack.isSize()
stack.print()