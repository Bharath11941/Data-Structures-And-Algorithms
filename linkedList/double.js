class Node{
  constructor(value){
    this.value=value
    this.next=null
    this.prev=null
  }
}
class linkedList{
  constructor(){
    this.head=null
    this.tail=null
    this.size=0
  }
  prepend(value){
    let node = new Node(value)
    if(!this.head){
      this.head=node
      this.tail=node
    }else{
      node.next=this.head
      this.head.prev=node
      this.head=node
    }
    this.size++
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }
  print(){
    if(this.head==null){
      console.log("empty");
    }else{
      let curr=this.head
      let values=''
      while(curr){
        values+=`${curr.value} `
        curr=curr.next
      }
      console.log(values)
    }
  }
}
let list=new linkedList()
list.prepend(30)
list.prepend(45)
list.prepend(49)
list.print()