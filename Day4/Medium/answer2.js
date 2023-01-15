let month=prompt("Enter the month:");
let season;

switch(month)
{
    case "September": 
    case  "october":
    case   "November":
    season="Autumn";
    break;

    case"December":
    case "January":
    case "February":
    season="Winter";
    break;

    case"March":
    case"April":
    case"May":
    season="Spring";

    case"June":
    case"July":
    case"August":
    season="Summer";
    break;
}
console.log("Season is:",season);