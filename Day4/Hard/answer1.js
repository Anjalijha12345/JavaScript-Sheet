let month=prompt("Enter a month:").toLowerCase();
let daysCount;
switch(month){
    case"january":
    days=31;
    break;

    case"February":
    days=28;
    break;

    case"March":
    days=31;
    break;

    case"April":
    days=30;
    break;

    case"May":
    days=31;
    break;

    case"june":
    days=30;
    break;

    case"july":
    days=31;
    break;

    case"August":
    days=31;
    break;

    case"September":
    days=30;
    break;

    case"october":
    days=31;
    break;

    case"November":
    days=30;
    break;

    case"December":
    days=31;
    break;


    default:
        console.log(month,"has",daysCount,"days:");
}