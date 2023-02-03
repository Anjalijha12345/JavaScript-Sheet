function isprime(num)
{
    if(num<=0|| num==1)
    return false;
    if(num==2||num==3)
    return true;

    for(let i=1;i<=Math.sqrt(num);i++)
    {
        if(num%i==0)
        return false;
    }
    return true;
}

console.log(isprime(7));
console.log(isprime(11));