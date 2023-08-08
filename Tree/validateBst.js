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
  insertion(value){
    let node=new Node(value)
    if(!this.root){
      this.root=node
    }else{
   let curr=this.root
    while(curr){
      if(value<curr.value){
        if(curr.left==null){
          curr.left=node
          break;
        }else{
          curr=curr.left
        }
      }else{
        if(curr.right==null){
          curr.right=node
          break;
        }else{
          curr=curr.right
        }
      }
    }
   }
  }
  validateBST(){
    return this.validateBSTHelper(this.root,-Infinity,Infinity)
  }
  validateBSTHelper(node,min,max){
    if(!node){
      return true
    }
    if(node.value<=min || node.value>=max ){
      return false
    }
    return this.validateBSTHelper(node.left,min,node.value)&&this.validateBSTHelper(node.right,node.value,max)
  }
}
let b=new BinarySearchTree()
b.insertion(5)
b.insertion(1)
b.insertion(4)
b.insertion(null)
b.insertion(null)
b.insertion(3)
b.insertion(6)

console.log(b.validateBST())