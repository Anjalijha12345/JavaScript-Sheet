let sumOfNums=(...args)=>
{
    let sum=0;
    for(const x of args)
    {
        sum+=x;
    }
    return sum;
}
console.log(sumOfNums(20,30,40,17));
