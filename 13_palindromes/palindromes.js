const palindromes = function (text) {
    let reversed = '';
    const newText = text.replace(/[^a-z0-9]/gi, '').toLowerCase();

    for (let i = newText.length - 1; i >= 0; i--){
        reversed += newText[i];
    }

    return reversed === newText;
};

// Do not edit below this line
module.exports = palindromes;
