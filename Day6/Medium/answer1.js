function makeid(l){
let alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
let id=""
for(let i=0;i<l;i++)
{
    id = alphabets.charAt(Math.floor(Math.random()*alphabets.length));
}
 return id;
}

let l= 10
console.log(makeid);