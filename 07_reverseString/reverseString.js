const reverseString = function(str) {
    let reversed = ""
    for (i = String(str).length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed
};

// Do not edit below this line
module.exports = reverseString;
