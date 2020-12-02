//Посчитать сумму цифр заданного числа

let a = Math.round(Math.random()*10);
let b = 0;
while( a > 0 )
{
    b += a % 10;
    a = (a - a % 10) /10;
}
console.log(`Число: ${a} - Сумма цифр: ${b}`)