class Node{
  constructor(value){
      this.value=value
      this.next=null
  }
}
class linkedList{
  constructor(){
      this.head=null
      this.tail=null
      this.size=0
  }
  prepend(value){
      let node=new Node(value)
      if(!this.head){
          this.head=node
          this.tail=node
      }else{
          node.next=this.head
          this.head=node
      }
      this.size++
  }
  apend(value){
      let node=new Node(value)
      if(!this.head){
          this.head=node
          this.tail=node
      }else{
          this.tail.next=node
          this.tail=node
      }
      this.size++
  }
  removeFront(){
      if(!this.head){
          console.log("empty")
      }else{
          let value=this.head.value
          this.head=this.head.next
          this.size--
          return value
      }
  }
  removeBack(){
      if(!this.head){
          console.log("empty")
      }
      let removed=this.tail.value
      if(this.size==1){
          this.head=null
          this.tail=null
          }
          else{
          let prev=this.head
          
          while(prev.next != this.tail){
              prev=prev.next
          }
          prev.next=null
          this.tail=prev
      }
       this.size--
       return removed
  }
  print(){
      if(!this.head){
          console.log('empty')
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
let list = new linkedList()
list.prepend(10)
list.prepend(3)
list.prepend(6)
list.apend(8)
list.apend(7)
list.print()
console.log(list.removeFront())
list.print()
console.log(list.removeBack())
list.print()