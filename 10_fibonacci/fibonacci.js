const fibonacci = function(x) {
    parseInt(x);
    if (x == 0) {return 0;}
    if (x < 0) {return "OOPS";} 
    let a = 0;
    let b = 1;
    let c = 0;
    for (let i = 0; i < x-1; i++) {
        c = a + b;
        a = b;
        b = c; 
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
