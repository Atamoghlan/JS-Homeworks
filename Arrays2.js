//Найти максимальный элемент массива
let ArrayofNums = [2,4,1,6,3]
let Max = ArrayofNums[0]
for (let i = 0; i < ArrayofNums.length; i++)
{
    Max < ArrayofNums[i] ? Max = ArrayofNums[i] : null ;
}
console.log(`Максимальный элемент массива: ${Max}`);
