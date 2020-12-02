//Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.

let num = Math.round(Math.random()*10);
for (let i = num.toString().length-1; i >=0 ;i--)
{
    mirrorNum += num.toString()[i];
}
console.log(mirrorNum);