function solveQuadEquation(x,y,z)
{
    let det=(b*b)-(4*a*c);

    let root1=(-b+Math.pow(det))/(2*a);
    let root2=(-bMath.pow(det))/(2*a);
    return(root1,root2);
}

console.log(solveQuadEquation(4,5,6));