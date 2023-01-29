const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
    ]

    let maxlength=0;
    let index=0;
    for(let i=0;i<webTechs.length;i++)
    {
        if(webTechs[i].length>maxlength)
        {
            maxlength=webTechs[i].length;
            index=i;
        }
    }
    console.log(webTechs[index]);