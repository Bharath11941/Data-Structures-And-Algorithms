function max(arr){
  let max=0
  for(let i=0; i<arr.length; i++){
    if(arr[i]>max){
      max=arr[i]
    }
  }
  for(let i=0; i<arr.length;i++){
    arr[i]=arr[i]+3
    if(arr[i]>max){
      console.log(true)
    }
  }
  
  
}
let arr=[4,6,3,8,10]
max(arr)
