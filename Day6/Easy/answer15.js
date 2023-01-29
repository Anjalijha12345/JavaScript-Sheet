let alphabets='abcdefghijklmnopqrstuvwxyz';
let arr=[];
for(let i=0;i<6;i++)
{
    if(i%2==0)
    arr.push(i);
    else 
    arr.push(alphabets[Math.floor(Math.random()*25)])
    
}
console.log(arr.join(''));