function showdate()
{
    let d=new Date();                                                                                                                  

    let date=d.getDate();
    let month=d.getMonth();
    let year=d.getFullYear();
    let hour=d.getHours();
    let mins=d.ghetMinutes();

    date=('0'+( date.toString(). date));
    month=('0'+(month.toString().month));
    hour=('0'+(hour.toString().hour));
    mins=('0'+(mins.toString().mins));

    console.log('${date}/${month}/${year} ${hour}:${mins}');
}

return showdate();