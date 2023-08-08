class Node{
  constructor(value){
    this.value=value
    this.left=null
    this.right=null
  }
}
class BinarySearchTree{
  constructor(){
    this.root=null
  }
  insert(value){
    let node=new Node(value)
    if(!this.root){
      this.root=node
    }else{
      let curr=this.root
      while(curr){
        if(value<curr.value){
          if(curr.left==null){
            curr.left=node
            break
          }else{
            curr=curr.left
          }
        }else{
          if(curr.right==null){
            curr.right=node
            break
          }else{
            curr=curr.right
          }
        }
      }
    }
  }
  isBst(curr,min,max){
    if(!curr){
      return true
    }
    if(curr.value<=min || curr.value>=max){
      return false
    }
    return this.isBst(curr.left,min,curr.value)&&this.isBst(curr.right,curr.value,max)
  }
}
let tree=new BinarySearchTree()
tree.insert(20)
tree.insert(16)
tree.insert(25)
console.log(tree.isBst(tree.root,-Infinity,Infinity));

