class MinHeap{
  constructor(){
    this.heap=[]
  }
  shiftDown(currIdx){
    let endIdx=this.heap.length-1
    let leftIdx=this.leftChild(currIdx)
    while(leftIdx<=endIdx){//becoz left is present then only want to check.its property of heap
      let righIdx=this.rightChild(currIdx)
      let indexToShift;
      if(righIdx<=endIdx && this.heap[righIdx]<this.heap[leftIdx]){
        indexToShift=righIdx
      }else{
        indexToShift=leftIdx
      }
      if(this.heap[currIdx]>this.heap[indexToShift]){
        [this.heap[currIdx],this.heap[indexToShift]]=[this.heap[indexToShift],this.heap[currIdx]]
        currIdx=indexToShift
        leftIdx=this.leftChild(currIdx)
      }else{
        return
      }
    }
  }
  shiftUp(currIdx){
    let parrentIdx=this.parrent(currIdx)
    while(currIdx>0 && this.heap[parrentIdx]>this.heap[currIdx]){
      [this.heap[parrentIdx],this.heap[currIdx]]=[this.heap[currIdx],this.heap[parrentIdx]]
      currIdx=parrentIdx
      parrentIdx=this.parrent(currIdx)
    }
  }
  peek(){
    return this.heap[0]
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
  rightChild(i){
    return 2*i+2
  }
  leftChild(i){
    return 2*i+1
  }
  display(){
    console.log(this.heap)
  }
  heapSort(){
    const sorted=[]
    while(this.heap.length){
      sorted.push(this.heap[0])
      this.heap[0]=this.heap[this.heap.length-1]
      this.heap.pop()
      this.shiftDown(0)
    }
    console.log(sorted);
  }
}
let M=new MinHeap()
M.insert(1)
M.insert(2)
M.insert(8)
M.insert(4)
M.insert(16)

// M.remove()
M.display()
M.heapSort()