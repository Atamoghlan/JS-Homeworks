//Написать программу определения оценки студента по его рейтингу, на основе следующих правил

var rating = 101
var grade = ["F","E","D","C","B","A"]
if (rating >= 0 && rating <20)
{
    console.log(grade[0])
}
else if (rating >= 20 && rating <40)
{
    console.log(grade[1])
}
else if (rating >= 40 && rating <60)
{
    console.log(grade[2])
}
else if (rating >= 60 && rating <75)
{
    console.log(grade[3])
}
else if (rating >= 75 && rating <90)
{
    console.log(grade[4])
}
else if (rating >= 90 && rating <= 100)
{
    console.log(grade[5])
}
else {console.log("Введите правильное число")}

