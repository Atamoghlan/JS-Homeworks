//Написать программу определения оценки студента по его рейтингу, на основе следующих правил

let rating = Math.round(Math.random()*100);
let grade = ["F","E","D","C","B","A"];
if (rating >= 0 && rating <20)
{
    console.log(`${rating} - ${grade[0]}`);
}
else if (rating >= 20 && rating <40)
{
    console.log(`${rating} - ${grade[1]}`);
}
else if (rating >= 40 && rating <60)
{
    console.log(`${rating} - ${grade[2]}`);
}
else if (rating >= 60 && rating <75)
{
    console.log(`${rating} - ${grade[3]}`);
}
else if (rating >= 75 && rating <90)
{
    console.log(`${rating} - ${grade[4]}`);
}
else if (rating >= 90 && rating <= 100)
{
    console.log(`${rating} - ${grade[5]}`);
}
else {console.log("Введите правильное число")};

