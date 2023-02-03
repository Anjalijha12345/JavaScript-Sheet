function randomHexaNumberGenerator()
{
    let  hexDigits="0123456789ABCDEF";
    let arr=[];
    let len=Math.floor(Math.random()*11);
    for(let i=0;i<len;i++)
    {
        arr=hexDigits.charAt(Math.floor(Math.random()*hexDigits.length)-1);
    }
    return arr;
}

console.log(randomHexaNumberGenerator(6));