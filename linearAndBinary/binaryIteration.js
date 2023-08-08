function binary(arr,x){
  let left=0
  let right=arr.length-1
  console.log(mid);
  while(left<=right){
    let mid=Math.floor((left+right)/2)
   
    if(arr[mid]===x){
      return `found at index ${mid}`
    }
    if(arr[mid]>x){
      right=mid-1
    }else{
      left=mid+1
    }
  }
  return -1
}
let arr=[2,4,5,6,8,12]
console.log(binary(arr,12))