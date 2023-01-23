const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
    ]

    // slicling out the first ten countries aaray
    console.log(countries.slice(0,10));

    // Finding out the middle country(ies)
    if(countries.length%2===0){
        let firstMid=(countries.length)/2-1;
        let secondMid=(countries.length)/2;
        console.log(countries[firstMid,countries[secondMid]]);
    }else console.log(countries[Math.floor(countries.length/2)-1]);


    //Dividing the array into two equal arrays if it is even. If countries
    //array is not even,one country ,one more country from the first half

    const firstHalf=countries.slice(0,Math.ceil(countries.length/2));
    const secondHalf=countries.slice(0,Math.ceil(countries.length/2));
    console.log(firstHalf);
    console.log(secondHalf);