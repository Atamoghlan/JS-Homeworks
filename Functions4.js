//Найти расстояние между двумя точками в двумерном декартовом пространстве.

class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    distance(p1,p2){
        return Math.sqrt(((p2.x - p1.x) ** 2) + ((p2.y - p1.y) **2));
    }
}
const point = new Point();
console.log(point.distance(new Point(2,1), new Point(4,6)));