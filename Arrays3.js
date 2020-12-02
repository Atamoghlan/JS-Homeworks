//Найти индекс минимального элемента массива

let ArrayofNums = [6,5,3,12,7]
let Min = ArrayofNums[0]
let IndexOfMinElement = 0
for (let i = 0; i < ArrayofNums.length; i++)
{
    if(Min > ArrayofNums[i])
    {
    Min = ArrayofNums[i];
    IndexOfMinElement = i;
    }
}
console.log(`Индекс минимального элемента: ${IndexOfMinElement}`);
