//Найти суммы только положительных из трех чисел
var a = 0
var b = 3
var c = -5
SumOfPositiveNums = 0
if (a > 0 || b > 0 || c > 0)
{
    if (a > 0)
    {
        SumOfPositiveNums+=a
    }
    if (b > 0)
    {
        SumOfPositiveNums+=b
    }
    if (c > 0)
    {
        SumOfPositiveNums+=c
    }
    console.log(`Сумма положительных чисел: ${SumOfPositiveNums}`)
}
else {console.log("Положительных чисел нет")}