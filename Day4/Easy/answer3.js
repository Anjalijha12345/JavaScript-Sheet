let a=parseInt(prompt("Enter the value of a:"));
let b=parseInt(prompt("Enter the value of b"));

//By using if-else

if(a>b)
{
    console.log(a,"is greater than",b);
    
}
else{
    console.log(b,"is greater than",a);
}

//By using ternary operator
a>b?
console.log(a,"is greater than",b)
:console.log(b,"is greater than",a);
