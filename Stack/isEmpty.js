class Node{
  constructor(value){
    this.value
    this.next=null
  }
}
class Stack{
  constructor(){
    this.top=null
    this.size=0
  }
  push(value){
    let node=new Node(value)
    if(!this.top){
      this.top=node
    }else{
      node.next=this.top
    this.top=node
    }
    this.size++
  }
  isEmpty(){
    return this.size===0
  }
}
let stack=new Stack()
console.log(stack.isEmpty())