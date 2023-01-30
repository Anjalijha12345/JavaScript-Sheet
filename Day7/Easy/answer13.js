function calcBMI(weight,height)
{
    let BMI= calcBMI(66,1.78);
    
    if(BMI<18.5){
        console.log("Underweight");
    }
    else if(BMI<=24.9)
    {
        console.log("Normal weight");
    }

    else if(BMI<=29.9)
    {
        console.log("overweight");
    }

     else if(BMI>=30)
     {
        console.log("OBESE!");
     }
}