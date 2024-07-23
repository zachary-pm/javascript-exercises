const sumAll = function(num1, num2) {
    let result = 0;

    if (num1 < 0 || num2 < 0){return 'ERROR';}
    
    if (typeof num1 == "number" && typeof num2 == "number") {
        if (num1 > num2) {
            let x = num1;
            num1 = num2;
            num2 = x;
        }
        for (let i = num1; i <= num2; i++) {
            result += i;
        }
        return result;

    } else {return 'ERROR';}

    
};

// Do not edit below this line
module.exports = sumAll;
