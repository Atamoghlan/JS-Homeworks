//Посчитать сумму элементов массива с нечетными индексами
let ArrayofNums = [6,5,3,12,7]
let SumOfOddIndexes = 0
for(let i = 0; i < ArrayofNums.length; i++)
{
    if(i % 2 == 0)
    {
        SumOfOddIndexes+=ArrayofNums[i]
    }
}
console.log(`Сумма элементов массива с нечетными индексами: ${SumOfOddIndexes}`);
