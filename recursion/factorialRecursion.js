//fibinacci
function fibinacci(n){
  if(n<2){
    return n
  }else{
    return fibinacci(n-1)+fibinacci(n-2)
  }
}
console.log(fibinacci(6));