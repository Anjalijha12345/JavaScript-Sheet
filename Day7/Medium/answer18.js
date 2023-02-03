function userIdGenerator()
{
    let char='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let id=[];
    for(let x=0;x<7;x++)
    {
       id+=char.charAt(Math.floor(Math.random()*char.length)-1);
        id.push(char[index]);
    }
    return id;

}

console.log(userIdGenerator(7));

