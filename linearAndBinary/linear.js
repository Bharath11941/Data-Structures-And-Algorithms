function linear(arr,x){
  for(i=0; i<arr.length; i++){
    if(arr[i]===x){
      return 1
    }
  }
  return -1
}
let arr=[4,5,3,6,8,9]
console.log(linear(arr,10))