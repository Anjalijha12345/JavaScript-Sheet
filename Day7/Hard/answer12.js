function sumofArrayItems(arr)
{
    let sum=0;
    for(let i=0;i<=arr.length;i++)
    sum+=i;
    return sum;
}
let arr1=[10,20,30,40,50];
console.log(sumofArrayItems(arr1));
let arr2=[30,40,50,60];
console.log(sumofArrayItems(arr2));