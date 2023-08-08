class Node{
  constructor(value){
    this.value=value
    this.next=null
  }
}
function removeDuplicates(head){
  let curr=head
  while(curr !== null && curr.next !== null){
    if(curr.value===curr.next.value){
      curr.next=curr.next.next
    }else{
      curr=curr.next
    }
  }
  return head
}
const head=new Node(1)
head.next=new Node(10)
head.next.next=new Node(1)
head.next.next.next=new Node(10)

console.log(removeDuplicates(head));