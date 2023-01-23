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

    for(let i=0;i<countries.length;i++){
      if(countries[i]==='Ethiopia'){
        console.log('Ethiopia');
        break;
      } else if(i===countries.length-1){
        countries.push('Ethiopia');
      }
    }