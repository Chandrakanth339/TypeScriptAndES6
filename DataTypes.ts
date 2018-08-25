var a: number;
let b: boolean;
let c: any;
let d: number[] = [2,3,4];
let e: any[] = [1,'true',3.47];

var f;


const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color{Red = 0, Green = 1, Orange = 2};
let backgroundColor  = Color.Green;


// Type Casting
let message2;
message2 = '34';
// for initializing the objects in two steps -- we do not get any intellisense methods. as it is of type 'any'
// Hence, we need to use Type Assertions. (Similar to instanceof, isInstance() or isAssignableFrom() in java)
let val = (<string>message2).endsWith('4');
console.log(val);
let val2 = (message2 as string).endsWith('5');
console.log(val2);
val2 = (message2 as boolean).valueOf();
console.log(val2);