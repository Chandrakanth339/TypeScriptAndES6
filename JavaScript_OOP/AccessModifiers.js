function Circle(num){
    this.radius = num,
    
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

