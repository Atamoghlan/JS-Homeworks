//Найти минимальный элемент массива

let ArrayofNums = [6,5,3,12,7]
let Min = ArrayofNums[0]
for (let i = 0; i < ArrayofNums.length; i++)
{
    Min > ArrayofNums[i] ? Min = ArrayofNums[i] : null ;
}
console.log(`Минимальный элемент массива: ${Min}`);
