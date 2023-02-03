function randomMacAddress()
{
    let arr=[];
    let hexDigits="0123456789ABCDEF";
    for(let i=0;i<6;i++)
    {
        let arr1=hexDigits.charAt(Math.ceil(Math.random()*15));
        let arr2=hexDigits.charAt(Math.ceil(Math.random()*15));

        arr.push(hexDigits[arr1] + hexDigits[arr2]);
    }
    return arr;

}

console.log(randomMacAddress());