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

let noCountry=0;
let landCountriesList=[];
for(let i=0;i<countries;i++)
{
    if(countries[i].includes('land')){
        landCountriesList.push(countries[i]);
        noCountry=false;
    }
}

if(noCountry>0){
    console.log(" All these Countries are with land:",landCountriesList);
}
else{
    console.log("All these countries are without land:",countries);
}