class MaxHeap{
  constructor(){
    this.heap=[]
  }
  buildHeap(){
    let parrentIdx=this.parrent(this.heap.length-1)
    for(let i=parrentIdx; i>=0; i--){
      this.shiftDown(i)
    }
  }
  shiftDown(currIdx){
    let endIdx=this.heap.length-1
    let leftIdx=this.leftChild(currIdx)
    while(leftIdx<=endIdx){
      let rightIdx=this.rightChild(currIdx)
      let indToShift
      if(rightIdx<=endIdx && this.heap[rightIdx]>this.heap[leftIdx]){
        indToShift=rightIdx
      }else{
        indToShift=leftIdx
      }
      if(this.heap[currIdx]<this.heap[indToShift]){
        [this.heap[currIdx],this.heap[indToShift]]=[this.heap[indToShift],this.heap[currIdx]]
        currIdx=indToShift
        leftIdx=this.leftChild(currIdx)
      }else{
        return
      }
    }
  }
  shiftUp(currIdx){
    let parrentIdx=this.parrent(currIdx)
    while(currIdx>0 && this.heap[currIdx]>this.heap[parrentIdx]){
        [this.heap[parrentIdx],this.heap[currIdx]]=[this.heap[currIdx],this.heap[parrentIdx]]
        currIdx=parrentIdx
        parrentIdx=this.parrent(currIdx) 
    }
  }
  insert(value){
    this.heap.push(value)
    this.shiftUp(this.heap.length-1)
  }
  remove(){
    [this.heap[0],this.heap[this.heap.length-1]]=[this.heap[this.heap.length-1],this.heap[0]]
    this.heap.pop()
    this.shiftDown(0)

  }
  parrent(i){
    return Math.floor((i-1)/2)
  }
  leftChild(i){
    return i*2+1
  }
  rightChild(i){
    return i*2+2
  }
  deletevalue(value){
    for(let i=0; i<this.heap.length; i++){
      if(value==this.heap[i]){
        [this.heap[i],[this.heap[this.heap.length-1]]]=[this.heap[this.heap.length-1],[this.heap[i]]]
        this.heap.pop()
        this.shiftDown(i)
      }
    }
    
  }
  heapSort() {
    const sorted = [];
    while (this.heap.length > 0) {
      
      sorted.push(this.heap[0]);
      this.heap[0]=this.heap[this.heap.length-1]
      this.heap.pop();
      this.shiftDown(0)
    }
    console.log(sorted);
    //     this.heap = sorted;
  }
  
  
  display(){
    console.log(this.heap)
  }
}
let m=new MaxHeap()

m.insert(80)
m.insert(60)
m.insert(70)
m.insert(40)
m.insert(10)
m.insert(2)
m.insert(67)
m.insert(45)
m.display()
// m.remove()
// m.heapSort()
m.deletevalue(70)
m.display()




// m.remove()
// m.remove()
// m.display()