function naturalSum(n){
  if(n==1){
    return n
  }else{
    return n+naturalSum(n-1)
  }
}
console.log(`sum:${naturalSum(10)}`);