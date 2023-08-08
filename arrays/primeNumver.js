//print prime numbers in the array
function prime(arr){
  let n=arr.length
  let flag
  for(let i=0; i<n; i++){
    flag=0
    for(let j=2; j<=arr[i]/2; j++){
      if(arr[i]%j==0){
        flag=1
        break;
      }
    }
    if(flag==0)
      console.log("primeNumber: ",arr[i])
  }
}
prime([4,5,8,11,13,15,7])