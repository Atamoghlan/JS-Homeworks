//Вводим число (0-999), получаем строку с прописью числа.
let input = "40"; //<= Вводим сюда число 

let WordNum = ""

if(input.length ===3)
{
    if(input[1]!== 1)
    {
        WordNum += hundreds(parseInt(input[0])) + " "
        WordNum += tens(parseInt(input[1])) + " "
        WordNum += Ones(parseInt(input[2]))
    }
    else if(input[1]=== 1)
    {
        WordNum += hundreds(parseInt(input[0])) + " "
        WordNum += specialNums(parseInt(input[2]))
    }
}
else if(input.length === 2)
{
    if(input[0]!== 1)
    {
        WordNum += tens(parseInt(input[0])) + " "
        WordNum += Ones(parseInt(input[1]))
    }
    else if(input[0]=== 1)
    {
        WordNum += specialNums(parseInt(input[0]))
    }
}
else if (input.length ===1)
{
    input += Ones(parseInt(input[0]))
}
console.log(WordNum)

function hundreds (res)
{
switch (res) 
  {
    case 1:
      return "сто";
    case 2:
      return "двести";
    case 3:
      return "триста";
    case 4:
      return "четыреста";
    case 5:
      return "пятьсот";
    case 6:
      return "шестьсот";
    case 7:
      return "семьсот";
    case 8:
      return "восемьсот";
    case 9:
      return "девятьсот";
    default:
      return "";
  }
}
  function tens (res){
  switch (res) 
  {
    case 2:
      return "двадцать";
      
    case 3:
      return "тридцать";
      
    case 4:
      return "сорок";
      
    case 5:
      return "пятьдесять";
      
    case 6:
      return "шестьдесят";
      
    case 7:
      return "семьдесять";
      
    case 8:
      return "восемьдесять";
      
    case 9:
      return "девяносто";
      
    case 9:
      return "девяноста";
    default:
      return "";
  }
}
  function Ones (res){
  switch (res) 
  {
    case 1:
      return "один";
      
    case 2:
      return "два";
      
    case 3:
      return "три";
      
    case 4:
      return "четыре";
      
    case 5:
      return "пять";
      
    case 6:
      return "шесть";
      
     case 7:
      return "семь";
      
    case 8:
      return "восемь";
      
    case 9:
      return "девять";
    default: 
      return "";  
  }
}
  function specialNums (res){
  switch (res) 
  {
    case 10:
        return "десять";  
    case 11:
      return "одиннадцать";
      
    case 12:
      return "двенадцать";
      
    case 13:
        return "тринадцать";
        
    case 14:
      return "четырнадцать";
      
    case 15:
      return "пятнадцать";
      
    case 16:
      return "шестнадцать";
      
    case 17:
      return "семнадцать";
      
    case 18:
      return "восемнадцать";
      
    case 19:
      return "девятнадцать";
    default: 
      return "";
  }
}
