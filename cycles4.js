//Вычислить факториал числа n. n! = 1*2*…*n-1*n;!

let factorial = 1;
let num = Math.round(Math.random()*10)

for (let i=1; i<=num; i++)
{
    factorial=factorial*i; 
}
console.log(`Факториал числа ${num} равен ${factorial}`)