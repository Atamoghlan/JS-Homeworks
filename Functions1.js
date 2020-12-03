let WeekDays = ["Понедельник","Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]
let NumberOfDay = 7;
Week(NumberOfDay)
function Week (NumberOfDay){
    switch (NumberOfDay){
        case 1:
            console.log(WeekDays[0]);
            break;
        case 2:
            console.log(WeekDays[1]);
            break;
        case 3:
            console.log(WeekDays[2]);
            break;
        case 4:
            console.log(WeekDays[3]);
            break;
        case 5:
            console.log(WeekDays[4]);
            break;
        case 6:
            console.log(WeekDays[5]);
            break;
        case 7:
            console.log(WeekDays[6]);
            break;
        default:
            console.log(`Такого дня недели не существует`)
            break;
    }

}
