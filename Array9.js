//Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert)) 

//Buuble:
let ArrayofNums = [6,5,3,12,7];
let temp = 0;
for(let i = ArrayofNums.length; i > 0 ; i--)
{
    for (let m = 0; m < i; m++)
    {
        if(ArrayofNums[m]>ArrayofNums[m+1]){
            temp = ArrayofNums[m];
            ArrayofNums[m]=ArrayofNums[m+1];
            ArrayofNums[m+1] = temp;
        }
    }
}
console.log(`Сортировка пузырьком: ${ArrayofNums}`)



