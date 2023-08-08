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
  removeMiddle(){
    let slow=this.top
    let fast=this.top
    let prev=this.top
    while(fast!=null && fast.next!=null){
      prev=slow
      slow=slow.next
      fast=fast.next.next
    }
    prev.next=slow.next
  }
  display(){
    let curr=this.top
    let str=''
    while(curr){
      str+=`${curr.value} `
      curr=curr.next
    }
    console.log(str)
  }
}
let s=new Stack()
s.push(13)
s.push(20)
s.push(30)
s.push(7)
s.push(50)
s.push(60)
s.display()
s.removeMiddle()
s.display()

