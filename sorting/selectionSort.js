// we are using array.slice for if it not provide the orginal array is mutated
function selectionSort(array){
  let arr=array.slice()
  console.log(arr)
  for(let i=0; i<arr.length-1; i++){
    let minIndex=i
    for(let j=i+1; j<arr.length; j++){
      if(arr[minIndex]>arr[j]){
        minIndex=j
      }
    }
    /*
    we can also use this method
    let temp=arr[i]
        arr[i]=arr[mindIndex]
        arr[minIndex]=arr[i]
    */
      [arr[minIndex],arr[i]]=[arr[i],arr[minIndex]]
   
    
  }
  return arr
}
let array=[5,3,6,77,33,22,754,3345,221]
console.log(selectionSort(array));


