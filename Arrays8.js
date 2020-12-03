//Поменять местами первую и вторую половину массива, например, для массива 1 2 3  4, результат 3 4 1 2
let ArrayofNums = [6,5,3,12,7,2]
let SecondArray = []
/*let FirstHalfOfArray = ArrayofNums.length/2
let SecondHalfOfArray = FirstHalfOfArray + ArrayofNums.length % 2 */
let t = 0
for(let i = Math.floor(ArrayofNums.length/2); i < ArrayofNums.length ; i++)
{ 
    SecondArray.push(ArrayofNums[i]); 
}
for (let m = 0; m < ArrayofNums.length/2; m++)
    {
    SecondArray.push(ArrayofNums[m])
    }
for(let i = 0; i < ArrayofNums.length; i ++){
    console.log(SecondArray[i])
}
