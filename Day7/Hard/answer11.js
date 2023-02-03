let  sum=(...args)=>
{
    let result=0;
    for( const element of args)
    result+=element;
    return result;
}

console.log(sum(4,50,32));