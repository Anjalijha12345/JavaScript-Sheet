function sumofEven(num1,num2)
{
    let sum=0;
    for(let i=num1;i<=num2;i++)
    {
        if(i%2==0)
        sum+=i;
    }
    console.log('The sum of even numbers',num1,num2,sum);
}
sumofEven(2,4);
