function shuffleArray(arr)
{
    let len=arr.length;
    let Random=[];

    while(Random.length!=len){
        let randomNum=Math.floor(Math.random()*len);
        if(Random.indexOf(randomNum)===-1) random.push(randomNum);
    }

    let randomArr=[];
    for(const i=0; i<=random.length;i++)
    {
        randomArr.push(arr[index]);
    }
    return randomArr;
}
let arr=[1,24,32,1,2,4];
console.log(shuffleArray(arr));