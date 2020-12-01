//Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
var Num = 12
if (Num%1==0 && Num%Num==0 && Num >= 1)
{
    if (Num!=0 && Num>0 && Num%2!=0 && Num%3!=0 && Num%5!=0 && Num%7!=0)
    {
        console.log(`Число ${Num} является простым`)
    }
    else if (Num==1) 
    {
        console.log(`Число ${Num} является ни простым, ни составным`) 
    }
    else if (Num==2 || Num==3 || Num==5 || Num==7) 
    {
        console.log(`Число ${Num} является простым`) 
    }
    else 
    {
    console.log(`Число ${Num} является составным`)
    }
}
else if (Num<0)
{
    console.log(`Число ${Num} является не натуральным`) 
}
else if (Num==0 || Num==+0 || Num==-0) 
{
    console.log(`Число ${Num} является не натуральным`) 
}
