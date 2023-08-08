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
        this.insertHelper(this.root,node)
    }
  }
  insertHelper(curr,node){
    if(node.value<curr.value){
        if(curr.left==null){
            curr.left=node
        }else{
          this.insertHelper(curr.left,node)
        }
    }else{
        if(curr.right==null){
            curr.right=node
        }else{
            this.insertHelper(curr.right,node)
        }
    }
  }
  search(curr,value){
    
    if(!curr){
      return false
    }else{
      if(curr.value===value){
        return true
      }
      else if(value<curr.value){
        return this.search(curr.left,value)
      }else{
        return this.search(curr.right,value)
      }
    }
  }
  Min(curr){
    if(!curr.left){
      return curr.value
    }else{
      return this.Min(curr.left)
    }
  }
  Max(curr){
    if(!curr.right){
      return curr.value
    }else{
      return this.Max(curr.right)
    }
  }
  remove(value){
    this.removeHelper(value,this.root,null)
  }
  removeHelper(value,current,parrent){
    while(current){
      if(value<current.value){
        parrent=current
        current=current.left
      }else if(value>current.value){
        parrent=current
        current=current.right
      }else{
        if(current.right && current.left){
          current.value=this.Min(current.right)
          this.removeHelper(current.value,current.right,current)
        }else{
          if(parrent==null){
            if(current.right==null){
              this.root=current.left
            }else{
              this.root=current.right
            }
          }else{
            if(parrent.left==current){
              if(current.right==null){
                parrent.left=current.left
              }else{
                parrent.left=current.right
              }
            }else{
              if(current.left==null){
                parrent.right=current.left
              }else{
                parrent.right=current.right
              }
            }
          }
        }
        break
      }
    }
  }
  inOrder(curr, output=""){
    if(curr){
      output=this.inOrder(curr.left,output)
      output+=curr.value+' '
      output=this.inOrder(curr.right,output)
    }
    return output
  }
  preOrder(curr, output=""){
    if(curr){
      output += curr.value + " "
      output = this.preOrder(curr.left, output)
      output = this.preOrder(curr.right, output)
    }
    return output
  }
  postOrder(curr,output=''){
    if(curr){
     output=this.postOrder(curr.left,output)
     output=this.postOrder(curr.right,output)
     output+=curr.value+' '
    }
    return output
  }
  
  

}
let b=new BinarySearchTree()
b.insert(10)
b.insert(15)
b.insert(5)
b.insert(20)
b.insert(3)
b.insert(14)
b.insert(8)
b.insert(2)
console.log(b.inOrder(b.root));
b.remove(14)
console.log(b.inOrder(b.root));
// console.log(b.preOrder(b.root));
// console.log(b.postOrder(b.root))
// console.log(b.Min(b.root));
// console.log(b.Max(b.root));

