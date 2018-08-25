class Point
{
    x1: number;
    x2: number;


    draw(){
        console.log('x1 Value '+ this.x1 +'x2 Value '+this.x2);
    }
}


let value1 = new Point();
value1.x1 = 4;
value1.x2 = 5;
value1.draw();