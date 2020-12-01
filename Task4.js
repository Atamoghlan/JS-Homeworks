//Посчитать выражение макс (а*б*с,  а+б+с)+3
var a = 10 
var b = 1
var c = 1
var FirstNum = a * b * c 
var SecondNum = a + b + c
var max = FirstNum > SecondNum ? console.log(`Max = ${FirstNum}`) : console.log(`Max = ${SecondNum+3}`)