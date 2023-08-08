class Node{
  constructor(value){
      this.value=value
      this.next=null
  }
}
class linkedList{
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
  apend(value){
    let node=new Node(value)
    if(!this.head){
      this.head=node
    }else{
      let curr=this.head
      while(curr.next){
        curr=curr.next
      } 
      curr.next=node
    }
    this.size++
  }
  insert(value,index){
    let node=new Node(value)
    if(index<0 || index>=this.size){
      return
    }
    if(index==0){
      node.next=this.head
      this.head=node
    }else{
      let prev=this.head
      for(let i=0; i<index-1; i++){
        prev=prev.next
      }
      node.next=prev.next
      prev.next=node
    }
    this.size++
  }
  reverse(){
      let curr=this.head
      let prev=null
      while(curr){
          let next=curr.next
          curr.next=prev
          prev=curr
          curr=next
      }
      this.head=prev
  }
  removeFrom(index){
      if(index<0 || index>=this.size){
          return null
      }
      let removedNode
      if(index==0){
          this.head=this.head.next
      }else{
          let prev=this.head
          for(let i=0; i<index-1; i++){
              prev=prev.next
          }
           removedNode=prev.next
          prev.next=removedNode.next
      }
       this.size--
       return removedNode.value
  }
  removeValue(value){
      if(!this.head)
      return null
      
      if(this.head.value==value){
          this.head=this.head.next
          this.size--
          return value
      }else{
          let prev=this.head
          let removed
          while(prev.next && prev.next.value !== value){
              prev=prev.next
          }
          if(prev.next){
              removed=prev.next
              prev.next=removed.next
                this.size--
               return value
             
          }
          return null
      }
      
      
  }
  search(value){
    if(!this.head){
      return `empty`
    }
    let i=0
    let curr=this.head
    while(curr){
      if(curr.value===value){
        return `found index at ${i}`
      }
      i++
      curr=curr.next
    }
    return `value not found`
  }
  print(){
      if(this.head==null){
          console.log("Empty")
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
list.apend(0)
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)
list.print()
list.insert(15,3)
list.print()
console.log(list.removeValue(20))
list.print()
console.log(list.removeValue(0))
list.print()