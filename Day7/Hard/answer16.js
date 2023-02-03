function areAllUnique(arr)
{
    for(let x=1;x<arr.length;x++)
    {
        for(let i=0;i<x;i++)
        {
            if(arr[x]==arr[i])

            return false;
        }

        return true;
    }
}

let arr1=[1,2,3,4,5,6];
areAllUnique(arr1);
let arr2=[4,5,6,8.6]
areAllUnique(arr2);