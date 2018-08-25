var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('x1 Value ' + this.x1 + 'x2 Value ' + this.x2);
    };
    return Point;
}());
var value1 = new Point();
value1.x1 = 4;
value1.x2 = 5;
value1.draw();
