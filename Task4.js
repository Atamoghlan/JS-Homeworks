//Посчитать выражение макс (а*б*с,  а+б+с)+3
let a = 10 ;
let b = 1;
let c = 1;
let FirstNum = a * b * c ;
let SecondNum = a + b + c;
let max = FirstNum > SecondNum ? console.log(`Max = ${FirstNum}`) : console.log(`Max = ${SecondNum+3}`);