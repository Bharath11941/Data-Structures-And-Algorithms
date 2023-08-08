class HashTable{
  constructor(size){
    this.table=new Array(size)
    this.size=size
    for(let i=0; i<size; i++){
      this.table[i]=new LinkedList()
    }
  }
  hash(key){
    let total=0
    for(let i=0; i<key.length; i++){
      total+=key.charCodeAt(i)
    }
    return total % this.size
  }
  set(key,value){
    let index=this.hash(key)
    let bucket=this.table[index]
    let node=bucket.find(node=>node.key==key)
    if(!node){
      bucket.apend({key,value})
    }else{
      node.value=value
    }
  }
  get(key){
    let index=this.hash(key)
    let bucket=this.table[index]
    let node=bucket.find(node=>node.key==key)
    return node?node.value:undefined;
  }
  remove(key){
    let index=this.hash(key)
    let bucket=this.table[index]
    let node=bucket.find(node=>node.key==key)
    if(node){
      bucket.remove(node)
      return node.value
    }else{
      return undefined
    }
  }
  print(){
    for(let i=0; i<this.table.length; i++){
      let bucket=this.table[i]
      let node=bucket.head
      while(node){
        console.log(`key:${node.key} value:${node.value}`)
        node=node.next
      }
    }
  }
}
class LinkedList{
  constructor(){
    this.head=null
    this.tail=null
  }
  apend(node){
    if(!this.head){
      this.head=node
      this.tail=node
    }else{
      this.tail.next=node
      this.tail=node
    }
  }
  find(samekey){
    let node=this.head
    while(node){
      if(samekey(node)){
        return node
      }
      node=node.next
    }
    return null
  }
  remove(node){
    if(node==this.head){
      this.head=this.head.next
    }else if(node==this.tail){
      this.tail=null
    }else{
      let prev=null
      let curr=this.head
      while(curr && curr!=node){
        prev=curr
        curr=curr.next
      }
      if(curr){
        prev.next=curr.next
      }
      
    }
  }
}
let h=new HashTable(40)
h.set('name','Bharath')
h.set('age','23')
h.set('mane','arun')
console.log(h.get('name'));
console.log(h.remove('name'));
h.print()
