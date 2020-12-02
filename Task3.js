//Найти суммы только положительных из трех чисел
let a = 0;
let b = 3;
let c = -5;
SumOfPositiveNums = 0
if (a > 0 || b > 0 || c > 0)
{
    if (a > 0)
    {
        SumOfPositiveNums+=a;
    }
    if (b > 0)
    {
        SumOfPositiveNums+=b;
    }
    if (c > 0)
    {
        SumOfPositiveNums+=c;
    }
    console.log(`Сумма положительных чисел: ${SumOfPositiveNums}`);
}
else {console.log("Положительных чисел нет")};