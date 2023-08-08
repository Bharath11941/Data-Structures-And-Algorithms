class Stack{
  constructor(){
      this.elements=[]
  }
  push(value){
      this.elements.push(value)
  }
  middle(){
      let mid=Math.floor(this.elements.length/2)
      this.elements.splice(mid,1)
      console.log(this.elements)
  }
  print(){
     console.log(this.elements)
  }
}
let s=new Stack()
let s1=new Stack()
s.push(34)
s.push(20)
s.push(63)
s.push(52)
s.push(90)
s.push(56)
s.print()
s.middle()
