function arrayofHexaColors()
{
    let HexCodes='123456789abcdeef';
    let loopCount=Math.floor(Math.random()*10);
    let color=[];

    for(let x=1;x<=loopCount;x++){
        let hexChar=[];
        for(let i=0;i<6;i++)
        {
            hexChar.push(HexCodes[Math.floor(Math.random()*HexCodes.length)]);
        }
        color.push('#'+hexchar);
    }
     return color;
    }

    let color=arrayofHexaColors(6);
    console.log(color);
