let alphabets='abcdefghijklmnopqrstuvwxyz0123456789';
let id=" "
for(let i=0;i<6;i++)
{
    
    id = alphabets.charAt(Math.floor(Math.random()*alphabets.length));
    
}
console.log(id);