class Node{
  constructor(value){
    this.value=value
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

  getSize(){
    return this.size
  }
  reverse(){
    let prev=null
    let curr=this.top
    while(curr){
      let next=curr.next
      curr.next=prev
      prev=curr
      curr=next
    }
    this.top=prev
  }
  pop(){
    let removed
    if(!this.pop){
      console.log('empty')
    }else{
      removed=this.top
      this.top=removed.next
      this.size--
      return removed.value
    }
  }
  print(){
    if(!this.top){
      console.log("empty");
    }else{
      let str=''
      let curr=this.top
      while(curr){
        str+=`${curr.value} `
        curr=curr.next
      }
      console.log(str);
    }
  }
} 
let stack=new Stack()
let s2=new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
middle()
stack.print()
function middle(){
  let mid = Math.floor(stack.getSize()/2)
  
 for(let i=0; i<mid;i++){
  s2.push(stack.pop())
 }
 stack.pop()
 for(let i=0;i<mid; i++){
  stack.push(s2.pop())
 }
  
  
}
