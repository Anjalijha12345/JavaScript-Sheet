let countries=
[
"ALBANIA", 
"BOLIVIA",
 "CANADA", 
 "DENMARK", 
 "ETHIOPIA", 
 "FINLAND", 
 "GERMANY",
"HUNGARY",
 "IRELAND", 
 "JAPAN",
 "KENYA"
]

let maxlength=0;
let index=0;
for(let i=0;i<countries.length;i++)
{
    if(countries[i].length>maxlength){
        maxlength=countries[i].length;
        index=i;
    }
}
console.log(countries[index]);