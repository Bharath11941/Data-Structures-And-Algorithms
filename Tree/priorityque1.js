class priority{
  constructor(){
    this.queue=[]

  }
  enqueue(element,priority){
    const item={element,priority}
    let added=false
    for(let i=0; i<this.queue.length; i++){
      if(item.priority<this.queue[i].priority){
        this.queue.splice(i,0,item)
        added=true
        break
      }
    }
    if(!added){
      this.queue.push(item)
    }
  }
  duqueue(){
    return this.queue.shift().element
  }
  display(){
    console.log(this.queue);
  }
 
}
let p=new priority()
p.enqueue('task1',1)
p.enqueue('task2',5)
p.enqueue('task3',4)
p.enqueue('task4',8)
p.enqueue('task5',2)
p.display()
console.log(p.duqueue());
console.log(p.duqueue());
console.log(p.duqueue());
console.log(p.duqueue());

