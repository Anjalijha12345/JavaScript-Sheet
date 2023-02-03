function randomUserIP()
{
    let a=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let c=Math.floor(Math.random()*255);
    let d=Math.floor(Math.random()*255);
    return('${a}.${b}.${c}.${d}');

}

console.log(randomUserIP());