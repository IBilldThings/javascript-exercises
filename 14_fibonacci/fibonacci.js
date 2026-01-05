const fibonacci = function(number) {
    let iteration = number;
    if (typeof number === "string"){
        iteration = Number(number);
    }

    if (number < 0){
        return "OOPS"
    }

    let current = 1;
    let previous = 0;
    let next = 0;

    for (let i = 0; i < iteration; i++){
        next = current + previous;
        previous = current;
        current = next;
    }
    return previous;
};

// Do not edit below this line
module.exports = fibonacci;
