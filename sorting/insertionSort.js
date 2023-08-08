function insert(arr){
  for(let i=1; i<arr.length; i++){
    let temp=arr[i]
    let j=i-1;
    while(j>=0 && arr[j]>temp){
      arr[j+1]=arr[j]
      j--
    }
    arr[j+1]=temp
  }
  console.log(arr)
}
let arr=[4,3,5,1,7,9]
insert(arr)