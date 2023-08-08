let arr=[4,3,2,2,5,4,6,7]
let n=arr.length
let flag
for(let i=0; i<n;  i++){
    flag=0
  for(j=0; j<n; j++){
    if(i!=j){
      if(arr[i]==arr[j]){
        flag=1
        break;
      }
    }
  }
  if(flag==0){
    console.log(arr[i])
  }
}