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

delete circle[fieldName];
console.log(circle);