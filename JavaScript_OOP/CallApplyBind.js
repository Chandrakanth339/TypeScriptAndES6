var obj = {
    x: 4
};

let func = function ( /* functiongs goes here*/ arg) {
    return this.x + arg;
};

// Call can be made using the current object and functionargs - where functionargs are losely
// declared within call method declared.
var value = func.call(obj, 9);
console.log("Call method " + value);

// Whereas, apply(o,[]) will be used to declare the applying object with array of functionargs
var value2 = func.apply(obj, [6]);
console.log("apply method " + value2);

// we bind the objects to the function -- but we do not get the value 
var value3 = func.bind(obj);
console.log(value3(7));





