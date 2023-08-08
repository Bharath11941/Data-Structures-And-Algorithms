class Node{
  constructor(value){
    this.value=value
    this.next=null
  }
}
class Queue{
  constructor(){
    this.rear=null
    this.front=null
  }
  enqueue(value){
    let node=new Node(value)
    if(this.rear==null){
      this.rear=node
      this.front=node
    }else{
      this.rear.next=node
      this.rear=node
    }
  }
  dequeue(){
    if(this.rear==null){
      return null
    }else{
      let removed=this.front
      this.front=removed.next
      if(this.front==null){
        this.rear=null
      }
      return removed.value
    }
  }
  print(){
    if(this.front==null){
      console.log("empty")
    }else{
      let curr=this.front
      let str=''
      while(curr){
        str+=`${curr.value} `
        curr=curr.next
      }
      console.log(str);
    }
  }
}
let q=new Queue()
q.enqueue(10)
q.enqueue(70)
q.enqueue(56)
q.enqueue(90)
q.print()
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());


q.print()
