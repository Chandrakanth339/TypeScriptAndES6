function Circle(num){
    let computeMethod = {x:4, y:3};
    var local = 5;
    this.radius = num;
    
    draw = () =>{
        console.log("Funny");
    }
}

var circle = new Circle(3);
// Bracket Accessor - []
console.log("Field accessor using second variable "+circle['radius'] );
// You may assign the field name accessor to a variable and reuse
var fieldName = 'radius';
console.log("Field accessor example using third variable "+circle[fieldName]);
// Delete a property from an Object
// delete circle[fieldName];
console.log(circle);

// Loop through key value pairs
for(let key in circle){
    if(typeof circle[key] !== 'function')
        console.log(key);
}

// to get all property names from a given object - as an array of keys (starting from indx 0)
const keyz = Object.keys(circle);
console.log(keyz);

// To check if a property exists in an object
if('radius' in circle)
    console.log("Radius property exists in Circle");

// if a variable is defined within the function, then, 
// it won't be accessible from outside of function
// it returns value "undefined"
console.log("Local Variable in Circle object "+circle.local);

Object.defineProperty(circle,'x',{value:0, 
    // writable: true enables manipulation of object
    writable:true});

circle.x+= 1;// wont throw error as we are not using 'use strict' mode 
console.log(circle);

var cir2 = Object.create(Circle);
console.log(cir2);

// Redeclaring let or const variables is not allowed with in same block.
let a = 5;
var b = 6;
// Redeclaring var is allowed at any level within JS file
var b  =7;
const c = 7;
function e(){
    let a = 6;
    var b = 5;
    console.log("Inside Function Declaration "+ a +"\t"+b);
}
e();
console.log("Out of Function Declaration " + a + "\t"+b);

