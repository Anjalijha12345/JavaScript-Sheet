function solveLinearEquation(x,y,z)
{
 for(let i=0;i*x<=z;i++){
  if((z-(i*x))%y==0){
 console.log("a=",i,",b=",(z-(i*x))/y);
  return;
  }
 }
 console.log("No solution");
}

solveLinearEquation(2,3,4);