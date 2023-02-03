function average(arr)
{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        if(typeof(arr[i]=="number"))
        {
            sum+=arr[i];
        }
        else{
            return 'Array not containing all items of number types'
        }
    }
    let ave=sum(arr)/arr.length;
    return ave;
}
let arr1=[10,20,30,40,50];
console.log(sumofArrayItems(arr1));
let arr2=[30,40,50,60];
console.log(sumofArrayItems(arr2));