//it has constant time complexity
class Queue{
  constructor(){
    this.items={}
    this.rear=0
    this.front=0
  }
  enqueue(value){
    this.items[this.rear]=value
    this.rear++
  }
  dequeue(){
    let item=this.items[this.front]
    delete this.items[this.front]
    this.front++
    console.log(item);
  }
  peek(){
    console.log(this.items[this.front])
  }
  isEmpty(){
    return this.rear - this.front==0
  }
  size(){
   return this.rear-this.front
  }
  print(){
    console.log(this.items)
  }
}
let q=new Queue()
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.dequeue()
q.print()
