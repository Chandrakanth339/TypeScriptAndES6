var a;
var b;
var c;
var d = [2, 3, 4];
var e = [1, 'true', 3.47];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Orange"] = 2] = "Orange";
})(Color || (Color = {}));
;
var backgroundColor = Color.Green;
// Type Casting
var message2;
message2 = '34';
// for initializing the objects in two steps -- we do not get any intellisense methods. as it is of type 'any'
// Hence, we need to use Type Assertions. (Similar to instanceof, isInstance() or isAssignableFrom() in java)
var val = message2.endsWith('4');
console.log(val);
var val2 = message2.endsWith('5');
console.log(val2);
val2 = message2.valueOf();
console.log(val2);
