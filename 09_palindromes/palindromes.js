const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g,"");
    let newString = string.split("").reverse().join("");


    if (newString === string) {return true;} else {return false;} 
};

// Do not edit below this line
module.exports = palindromes;
