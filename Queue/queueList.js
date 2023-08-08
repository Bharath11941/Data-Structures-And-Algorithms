class Queue{
  constructor(){
    this.items=[]
  }
  enqueue(value){
    this.items.push(value)
  }
  dequeue(){
    let re=this.items.shift()//it has linear time complexity
    console.log(re);
  }
  peek(){
    if(this.items.length){
      console.log(this.items[0])
    }else{
      return null
    }
  }
  size(){
    console.log(this.items.length)
  }
  print(){
    console.log(this.items)
  }
}
let q=new Queue()
q.peek()
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.enqueue(50)
q.peek()
q.size()
q.dequeue()
q.print()