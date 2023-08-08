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
    let node=new Node(value);
    if(!this.head){
      this.head=node
    }
    else{
      node.next=this.head
      this.head=node
    }
    this.size++
  }
  apend(value){
    let node=new Node(value)
    if(!this.head){
      this.head=node
    }
    else{
      let prev=this.head
      while(prev.next){
        prev=prev.next
      }
      prev.next=node
    }
    this.size++
  }
  insert(value,index){
    let node=new Node(value)
    if(index<0 || index>this.size){
      return null
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
    let prev=null
    let curr=this.head
    while(curr){
      let next=curr.next
      curr.next=prev
      prev=curr
      curr=next
    }
    this.head=prev
  }
  search(value){
    if(!this.head){
      return console.log("empty")
    }
    let curr=this.head
    let i=0
    while(curr){
      if(curr.value==value){
        return `found at index ${i}`
      }
      curr=curr.next
      i++
    }
    return -1
  }
  removeValue(value){
    let removed
    if(this.head.value==value){
      removed=this.head.value
      this.head=this.head.next
      this.size--
      return removed
    }else{
      let prev=this.head
      while(prev.next && prev.next.value!=value){
        prev=prev.next
      }
      if(prev.next){
        removed=prev.next
        prev.next=removed.next
        this.size--
        return removed.value
      }
    }
    return -1
  }
  remove(index){
    if(!this.head){
      return null
    }
    if(index<0 || index>this.size){
      return null
    }
    let removed
    if(index==0){
      let removed=this.head.value
      this.head=this.head.next
      this.size--
      
      return removed
    }else{
      let prev=this.head
      for(let i=0; i<index-1; i++){
        prev=prev.next
      }
      removed=prev.next
      prev.next=removed.next
      this.size--
      return removed.value

    }
   
  }
  prime(){
    let curr=this.head
    let flag
    let str=''
    for(let i=0; i<this.size; i++){
      flag=0
      for(let j=2; j<=curr.value/2; j++){
        if(curr.value%j==0){
          flag=1
          break
        }
      }
      if(flag==0){
        str+=`${curr.value} `
      }
     
      curr=curr.next
    }
    console.log(str)
  }
  print(){
    if(!this.head){
      console.log("Empty")
    }else{
      let curr=this.head
      let values=''
      while(curr){
        values+=`${curr.value}->`
        curr=curr.next
      }
      console.log(values)
    }
  }
}
let list =  new linkedList()

list.print()
list.insert(7,0)
list.insert(20,0)
list.insert(45,1)
list.apend(5)
list.apend(11)
list.apend(34)
list.print()
list.prime()

