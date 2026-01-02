const sumAll = function(intOne, intTwo) {
    if (intOne < 0 || intTwo < 0){
        return "ERROR"
    }
    if (typeof intOne != "number" && Number.isNaN(intOne)) {
        return "ERROR"
    }
    if (typeof intTwo != "number" && Number.isNaN(intTwo)) {
        return "ERROR"
    }
    if (!Number.isInteger(intOne) || !Number.isInteger(intTwo)){
        return "ERROR"
    }
    if (intOne != Math.round(intOne) || intTwo != Math.round(intTwo)){
        return "ERROR"
    }

    let sum = 0;

    let smaller = intOne;
    let larger = intTwo;
    if (intOne > intTwo){ //Set the end number to whichever is larger.
        larger = intOne;
        smaller = intTwo; //Set smaller to intTwo if it is smaller.
    }

    for (i = 0; i <= larger; i++){
        if (i >= smaller){
            sum += i;
        }
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
