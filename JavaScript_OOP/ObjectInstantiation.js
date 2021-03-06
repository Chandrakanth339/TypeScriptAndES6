// the element defined with {} is said to be an Object in OOJS terminology.
// Object is defined on the right handside and assigned to const or let or var variable.
// Direct Declaration of object
// Object Literal
const circle = {
    radius: 1,
    location: {
        x: 2,
        y: 3
    },
    // Using Fat Arrow, declaring an anonymous function.
    draw: (argumentz) => {
        console.log('Function call : draw (' + argumentz + ')');
    }
}
// circle.draw('Circle');
// console.log("Radius of circle "+circle.radius);
// console.log("location values"+circle.location);
// console.log("Location Parameters "+circle.location.x);


// var number = {value: 5};
// function increase(obj){
//    obj.value++;
// }
// increase(number);
// console.log(number);


// Using Generic Constructor - Object()
var objectsample = new Object();
objectsample.newarg = 8;

console.log("\n/\/\/\/\/\/\/\/\/\/\/\ Object instantiation using new KeyWord /\/\/\/\/\/\/\/\/\/\/\/\/");
//DOT NOTATION
console.log("Dot Notation to access fields/properties and methods " + objectsample.newarg);
// Bracket notation to get the fields/properties and methods
console.log("Bracket Notation to access fields/properties and methods " + objectsample['newarg']);

// Empty Object instantiation using {} object literal notation
var objectEmpty = {};
console.log("Empty Object Creation " + objectEmpty);

// var objectsample2  = Object.create();
// console.log("\n/\/\/\/\/\/\/\/\/\/\/\ Object instantiation using Object.create(o: object) method /\/\/\/\/\/\/\/\/\/\/\/\/");

// Factory method - Using Functions -- Helps in reducing redundant code and increase reusability
function createObject(radius) {
    return {
        radius: radius,
        location: {
            x: 5,
            y: 4
        },
        draw: () => {
            console.log("To Draw the circle with radius " + radius);
        }
    }
}

// Instantiation and Initialization of object
const newObject = createObject(2);
newObject.draw();

// Class declaration - as per ES5 using function
function Circle2(radius) {
    this.radius = radius;
    this.draw = () => {
        console.log("Constructer Object Instantiation " + this.radius);
    }
}
const circle2 = new Circle2(4);
circle2.draw();
console.log(circle2);

// Using Object.create with object reference
var circle3 = Object.create(circle2);
circle3.additionalParam = 'abc';
console.log(circle3);

var circle4 = Object.create(circle3, {
    releaseDate: {
        value: '2019'
    }
});


console.log(circle4);