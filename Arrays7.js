//Посчитать количество нечетных элементов массива
let ArrayofNums = [6,5,3,12,7]
let SumOfOddElements = 0
for(let i = 0; i < ArrayofNums.length; i++)
{
    if(ArrayofNums[i] % 2 != 0)
    {
        SumOfOddElements+=1
    }
}
console.log(`Количество нечетных элементов массива: ${SumOfOddElements}`);
