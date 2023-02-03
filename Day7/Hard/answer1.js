function userIDGeneratedByUser()
{
    let len=Math.floor(prompt("Enter length of ID"));
    let idCount=Math.floor(prompt("Enter number of IDs"));
    let char='123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    let id=[];
    for(let x=1;x<=idCount;x++)
    {
        let random=[];
        for(let i=1;i<=len;i++)
        {
            id+=char.charAt(Math.floor(Math.random()*char.length)-1);
        }
        console.log (id);
    }
}
    userIDGeneratedByUser(5,6)