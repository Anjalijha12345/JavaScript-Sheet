const ages=[19,22,19,24,20,25,26,24,25,24];
// 1
ages.sort();
console.log(ages);

// 2
let len=ages.length;
let median=(ages[Math.floor(len/2)-1]+ages[Math.floor(len/2)])/2;
console.log(median);

// 3
const average=(ages[0]+ages[1]+ages[2]+ages[3]+ages[4]+ages[5]+ages[6]+ages[7]+ages[8]+ages[9]);
console.log(average);

// 4
let range=max-min;
console.log("Range of ages:",range);

// 5
console.log(Math.abs(ages[0]-average));
console.log(Math.abs(ages[ages.length-1]-average));