function factorial(num)

{
    let arr=num*factorial(num-1);
    if(num<=1)
    return 1;
    else 
    return arr;

}

  let a=6;
  console.log(factorial(a));
