const removeFromArray = function(array, valueToRemove, valueToRemove2 = null, 
    valueToRemove3 = null, valueToRemove4 = null) {
    
    while (array.includes(valueToRemove)) {
        array.splice(array.indexOf(valueToRemove), 1);
    }
    
    
    if (valueToRemove2) {
        while (array.includes(valueToRemove2)) {
            array.splice(array.indexOf(valueToRemove2), 1);
        }
    }
    
    if (valueToRemove3) {
        while (array.includes(valueToRemove3)) {
            array.splice(array.indexOf(valueToRemove3), 1);
        }
    }

    if (valueToRemove4) {
        while (array.includes(valueToRemove4)) {
            array.splice(array.indexOf(valueToRemove4), 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
