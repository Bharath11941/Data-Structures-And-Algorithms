class Node{
  constructor(value){
    this.value=value
    this.next=null
  }
}
class LinkedList{
  constructor(){
    this.head=null
    this.size=0
  }
  prepend(value){
    let node=new Node(value)
    if(!this.head){
      this.head=node
    }else{
      node.next=this.head
      this.head=node
    }
    this.size++
  }
  remove(value){
    let removed
    if(this.head.value==value){
      removed=this.head
      this.head=removed.next
      this.size--
      return removed.value
    }else{
      let prev=this.head
      while(prev.next && prev.next.value!==value){
        prev=prev.next
      }
      if(prev.next){
        removed=prev.next
        prev.next=removed.next
        this.size--
        return removed.value
      }
    }
    return null
  }
  print(){
    if(!this.head){
      console.log("empty")
    }else{
      let curr=this.head
      let str=''
      while(curr){
        str+=`${curr.value} `
        curr=curr.next
      }
      console.log(str)
    }
  }
}
let list=new LinkedList()
list.prepend(10)
list.prepend(20)
list.prepend(30)
console.log(list.remove(10))
list.print()
