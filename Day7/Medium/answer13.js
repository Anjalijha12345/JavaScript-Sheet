function evenAndodds(num)
{
    let even=0;
    let odd=0;
    for(let i=0;i<=num;i++)
    {
        if(i%2==0)
        {
            even++;
        }
        else{
            odd++;
        }
    }

    console.log("Numbers of odd are:",odd);
    console.log("numbers of evens are:",even);
}
evenAndodds(100);