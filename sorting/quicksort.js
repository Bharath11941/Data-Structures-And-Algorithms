//first select a pivot element.if pivot element geaterthan arr[i] put into right array
//else put into a left array.then compined 3.
//........................................
//pivot element is last element
//important it's recursive function .must provide base condition
function quickSort(arr){
  if(arr.length<2){
    return arr
  }
  let pivot=arr[arr.length-1]
  let left=[]
  let right=[]
  for(let i=0; i<arr.length-1; i++){
    if(pivot>arr[i]){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return [...quickSort(right),pivot,...quickSort(left)]
}
let arr=[4,3,5,1,7,9]
console.log(quickSort(arr))