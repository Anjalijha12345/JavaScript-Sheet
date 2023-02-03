function sameType(arr)
{
    let type=typeof arr[0];
    for(const i=0;i<arr.length;i++)
    {
        if(type!=i)
        return false;
    }
    return true;
}
let arr1=[1,2,3,4,5,6];
 SameType(arr1);
let arr2=[2,4,5,6,8.6];
sameType(arr2);