let countries=
["ALBANIA", 
"BOLIVIA",
 "CANADA", 
 "DENMARK", 
 "ETHIOPIA", 
 "FINLAND", 
 "GERMANY",
"HUNGARY",
 "IRELAND", 
 "JAPAN",
 "KENYA"]
 const capCountries=[]
 for(let i=0;i<countries.length;i++)
 {
    capCountries.push(countries[i].toLocaleUpperCase());
 }
 console.log(capCountries);