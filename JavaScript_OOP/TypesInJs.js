
// Using Fields ---- Start
let x = 10;
let y = x;

y = 5;
console.log("Primitive values "+y+"\t"+x);
let x2 = {val:20};
let y2 = x2;

y2.val = 5;
console.log("Object Values "+y2.val+"\t"+x2.val);
// Using Fields ---- End

// Using methods - with primitive
let num = 5;
function increase(num){
    num++;
}

increase(num);
console.log("Function manipulation using primitives "+num);
// Using methods - with primitive

// Using methods - with Object
let num2 = {x:5};
function increase2(num){
    num.x++;
}

increase2(num2);
console.log(num2.x);



let v1 = new Number(3);
console.log(v1);
// v2 on manipulation, does not change the actual value of v1
let v2 = v1;
v2++;
console.log(v2+"\t"+v1);


let v3 = new Boolean(true);
let v4 = v1;
v4 = !v4;
console.log(v3+"\t"+v4);