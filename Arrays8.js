//Поменять местами первую и вторую половину массива, например, для массива 1 2 3  4, результат 3 4 1 2
let ArrayofNums = [6,5,3,12,7]
let FirstHalfOfArray = ArrayofNums.length/2
let SecondHalfOfArray = FirstHalfOfArray + ArrayofNums.length % 2 
let t = 0
for(let i = ArrayofNums.length/2; i < ArrayofNums.length ; i++)
{
    for (let m = 0; i < ArrayofNums.length/2; i++)
    {
    t = ArrayofNums[m]
    ArrayofNums[m] = ArrayofNums[i];
    ArrayofNums[i] = t
    }
}
console.log(ArrayofNums);
