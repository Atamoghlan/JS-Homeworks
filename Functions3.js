//Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число.
let WordNum = "восемьдесять пять"; //<= Вводим сюда число в виде строки. !Пишем всё маленькими буквами!
let res = WordNum.split(" ");
let num = 0

for(char of res)
{
  num += hundreds(char)
  num += tens(char)
  num += Ones(char)
  num += specialNums(char)
}
console.log(num)

function hundreds (res)
{
switch (res) 
  {
    case "сто":
      return 100;
    case "двести":
      return 200;
    case "триста":
      return 300;
    case "четыреста":
      return 400;
    case "пятьсот":
      return 500;
    case "шестьсот":
      return 600;
    case "семьсот":
      return 700;
    case "восемьсот":
      return 800;
    case "девятьсот":
      return 900;
    default:
      return 0;
  }
}
  function tens (res){
  switch (res) 
  {
    case "десять":
      return 20;
      
    case "двадцать":
      return 20;
      
    case "тридцать":
      return 30;
      
    case "сорок":
      return 40;
      
    case "пятьдесять":
      return 50;
      
    case "шестьдесят":
      return 60;
      
    case "семьдесять":
      return 70;
      
    case "восемьдесять":
      return 80;
      
    case "девяносто":
      return 90;
      
    case "девяноста":
      return 90;
    default:
      return 0;
  }
}
  function Ones (res){
  switch (res) 
  {
    case "один":
      return 1;
      
    case "два":
      return 2;
      
    case "три":
      return 3;
      
    case "четыре":
      return 4;
      
    case "пять":
      return 5;
      
    case "шесть":
      return 6;
      
     case "семь":
      return 7;
      
    case "восемь":
      return 8;
      
    case "девять":
      return 9;
    default: 
      return 0;  
  }
}
  function specialNums (res){
  switch (res) 
  {
    case "одиннадцать":
      return 11;
      
    case "двенадцать":
      return 12;
      
    case "тринадцать":
        return 13;
        
    case "четырнадцать":
      return 14;
      
    case "пятнадцать":
      return 15;
      
    case "шестнадцать":
      return 16;
      
    case "семнадцать":
      return 17;
      
    case "восемнадцать":
      return 18;
      
    case "девятнадцать":
      return 19;
    default: 
      return 0;
  }
  
  }