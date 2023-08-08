function binaryRecursive(arr,x,left,right){
  if(left>right){
    return false
  }
  let mid=Math.floor((left+right)/2)
  if(arr[mid]===x){
    return true
  }else if(arr[mid]>x){
    return binaryRecursive(arr,x,left,mid-1)
  }else{
    return binaryRecursive(arr,x,mid+1,right)
  }
}
let arr=[3,4,6,8,9,12,14,15]
let x=50
console.log(binaryRecursive(arr,x,0,arr.length-1));