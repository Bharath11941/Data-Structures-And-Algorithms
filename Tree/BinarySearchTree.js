// class Node{
//   constructor(value){
//     this.value=value
//     this.left=null
//     this.right=null
//   }
// }
// class BinarySearchTree{
//   constructor(){
//     this.root=null
//   }
//   insertion(value){
//     let node=new Node(value)
//     if(!this.root){
//       this.root=node
//     }else{
//    let curr=this.root
//     while(curr){
//       if(value<curr.value){
//         if(curr.left==null){
//           curr.left=node
//           break;
//         }else{
//           curr=curr.left
//         }
//       }else{
//         if(curr.right==null){
//           curr.right=node
//           break;
//         }else{
//           curr=curr.right
//         }
//       }
//     }
//    }
//   }
//   contains(value){
//     let curr=this.root
//     while(curr){
//       if(value<curr.value){
//         curr=curr.left
//       }else if(value>curr.value){
//         curr=curr.right
//       }else{
//         return true
//       }
//     }
//     return false
//   }
//   Min(){
//     let curr=this.root
//     while(curr.left){
//       curr=curr.left
//     }
//     console.log('min:',curr.value)
//   }
//   Max(){
//     let curr=this.root
//     while(curr.right){
//       curr=curr.right
//     }
//     console.log('Max:',curr.value)
//   }
//   remove(value){
//     this.removeHelper(value,this.root,null)
//   }
//   removeHelper(value,current,parrent){
//     while(current){
//       if(value<current.value){
//         parrent=current
//         current=current.left
//       }else if(value>current.value){
//         parrent=current
//         current=current.right
//       }else{
//         if(current.left && current.right){
//           current.value=this.getMin(current.right)
//           this.removeHelper(current.value,current.right,current)
//         }else{
//           if(parrent==null){
//             if(current.right==null){
//               this.root=current.left
//             }else{
//               this.root=current.right
//             }
//           }else{
//             if(parrent.left==current){
//               if(current.right==null){
//                 parrent.left=current.left
//               }else{
//                 parrent.left=current.right
//               }
//             }else{
//               if(current.right==null){
//                 parrent.right=current.left
//               }else{
//                 parrent.right=current.right
//               }
//             }
//           }
//         }
//         break;
//       }
//     }
//   }
//   getMin(current){
//     if(current.left==null){
//       return current.value
//     }else{
//       return this.getMin(current.left)
//     }
//   }
//   FindClosest(target){
//     let curr=this.root
//     let closest=curr.value
//     while(curr){
//       if(Math.abs(target-closest)>Math.abs(target-curr.value)){
//         closest=curr.value
//       }
//       if(target<curr.value){
//         curr=curr.left
//       }else if(target>curr.value){
//         curr=curr.right
//       }else{
//         break
//       }
//     }
//     console.log(closest);
//   }
  
//   inOrder(){
//     this.inOrderHelper(this.root)
//   }
//   inOrderHelper(node){
//     if(node){
//       this.inOrderHelper(node.left)
//       console.log(node.value);
//       this.inOrderHelper(node.right)
//     }
//   }
//   preOrder(){
//     this.preOrderHelper(this.root)
//   }
//   preOrderHelper(node){
//     if(node){
//       console.log(node.value);
//       this.preOrderHelper(node.left)
//       this.preOrderHelper(node.right)
//     }
//   }
//   postOrder(){
//     this.postOrderHelper(this.root)
//   }
//   postOrderHelper(node){
//     if(node){
//       this.postOrderHelper(node.left)
//       this.postOrderHelper(node.right)
//       console.log(node.value);
//     }
//   }
// }


// let b=new BinarySearchTree()
// b.insertion(10)
// b.insertion(18)
// b.insertion(34)
// b.insertion(6)
// b.insertion(8)
// b.remove(6)
// console.log(b.contains(6));
// b.insertion(14)
// b.insertion(20)
// b.insertion(2)
// b.FindClosest(30)
// b.inOrder()
// console.log('')
// b.preOrder()
// console.log();
// b.postOrder()
// b.remove(50)
// console.log();
// b.inOrder()

(function he(){
  console.log("hi");
})();