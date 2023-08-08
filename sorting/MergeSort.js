//Merge sort using recursion
function mergeSort(arr){
  if(arr.length<2){
    return arr
  }
  let mid=Math.floor(arr.length/2)
  let leftarr=arr.slice(0,mid)
  let rightarr=arr.slice(mid)
  return merge(mergeSort(leftarr),mergeSort(rightarr))
}
function merge(leftarr,rightarr){
  let temp=[]
  while(leftarr.length && rightarr.length){
    if(leftarr[0]<=rightarr[0]){
      temp.push(leftarr.shift())
    }else{
      temp.push(rightarr.shift())
    }
  }
  return [...temp,...leftarr,...rightarr]
}
let arr=[4,3,5,1,7,456,21,67,89,374,47,9]
console.log(mergeSort(arr));