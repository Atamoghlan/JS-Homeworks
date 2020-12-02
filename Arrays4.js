//Найти индекс максимального элемента массива
//Найти индекс минимального элемента массива

let ArrayofNums = [6,5,3,12,7]
let Max = ArrayofNums[0]
let IndexOfMaxElement = 0
for (let i = 0; i < ArrayofNums.length; i++)
{
    if(Max < ArrayofNums[i])
    {
    Max = ArrayofNums[i];
    IndexOfMaxElement = i;
    }
}
console.log(`Индекс максимального элемента: ${IndexOfMaxElement}`);
