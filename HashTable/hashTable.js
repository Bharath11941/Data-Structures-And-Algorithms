class hashTable{
  constructor(size){
    this.table=new Array(size)
    this.size=size
  }
  hash(key){
    let total=0
    for(let i=0; i<key.length;i++){
      total+=key.charCodeAt(i)
    }
    return total % this.size
  }
  set(key,value){
    let index=this.hash(key)
    this.table[index]=value
  }
  get(key){
    let index=this.hash(key)
    return this.table[index]
  }
  remove(key){
    let index=this.hash(key)
    this.table[index]=undefined
  }
  prime(key){
    let index=this.hash(key)
    let num=this.table[index]
    let flag=0
    for(let i=2; i<num/2; i++){
      if(num%i==0){
        flag=1
        break;
      }
    }
    if(flag==0){
      console.log('prime')
    }else{
      console.log('not a prime');
    }
  }
  display(){
    for(let i=0; i<this.table.length; i++){
      if(this.table[i]){
      console.log(i,this.table[i])
      }
    }
  }
}
const map=new hashTable(50)
map.set('name','Bharath')
map.set('age',23)
console.log(map.get('name'));
map.display()

