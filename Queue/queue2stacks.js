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
  pop(){
    if(!this.top){
      return null
    }else{
      let remove=this.top
      this.top=remove.next
      this.size--
    }

  }
  print(){
    let str=''
    let curr=this.top
    while(curr){
      str+=`${curr.value} `
      curr=curr.next
    }
    console.log(str)
  }
}
class Queue{
  constructor(){
    this.front=null
    this.rear=null
  }

}
function queue(){
  let size=s1.getSize()
  console.log(size)
  for(let i=0; i<size; i++){
    s2.push(s1.pop())
  }
  
}
let s1=new Stack()
let s2=new Stack()
s1.push(10)
s1.push(20)
s1.push(30)
s1.push(40)
s1.print()
queue()
s2.print()



