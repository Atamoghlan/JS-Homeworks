//Если а – четное посчитать а*б, иначе а+б
let a = Math.round(Math.random()*10);
let b = Math.round(Math.random()*10);
if (a % 2 === 0)
{
    console.log(a * b);
}
else 
{
    console.log(a+b);
}