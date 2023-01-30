function checkSeason(month)
{
    let season;

    switch(month.toLowercase())
    {
        case 'december':
        case 'january':
        case 'february':

        season= 'winter';
        break;

        case 'march':
        case 'april':
        case  'may':

        season='spring';
        break;

        case 'june':
        case 'july':
        case 'august':

        season='summer';
        break;

        case 'september':
        case 'october':
        case  'november':

        season='Autumn';
        break;
    }

    return season;

}

console.log(checkSeason('december'));