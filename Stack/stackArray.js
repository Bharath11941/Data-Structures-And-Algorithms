class Stack{
  constructor(){
    this.elements=[]
    this.top=-1
    this.b=[]
  }
  undo(){
    this.b.push(this.elements.pop())
    this.top--
  }redo(){
    this.elements.push(this.b.pop())
    this.top++
  }

  push(element){
    this.top++
    this.elements[this.top]=element
  }
  pop(){
    let remove=this.elements.splice(this.top,1)[0]
    this.top--
    return remove
  }
  print(){
    console.log(this.elements)
  }
}
let s=new Stack()
s.push(20)
s.push(30)
s.push(40)
s.push(50)

s.undo()
s.print()
s.redo()
s.print()