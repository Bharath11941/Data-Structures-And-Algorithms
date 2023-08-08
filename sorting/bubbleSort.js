function bubbleSort(arr){
  for(let i=0; i<arr.length; i++){
      for(let j=0; j<arr.length-1-i; j++){
          if(arr[j]>arr[j+1]){
              [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
          }
      }
  }
  return arr
}
let arr=[545,3578,5533,6,349,98,357,38]
let arr1=bubbleSort(arr)
console.log(arr1)
console.log(arr)
