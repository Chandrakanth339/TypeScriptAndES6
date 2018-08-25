()=>{
    console.log("Sample Using var after compilation");
    for(var i=0;i<5;i++){
        console.log(i);
    };
    console.log("Out Of Loop value of i "+i);
};

()=>{
  console.log("Sample Using let - transpiled into var after compilation");
    for(let i=0;i<5;i++){
        console.log(i);
    };
    console.log("Out Of Loop value of i "+i);
};