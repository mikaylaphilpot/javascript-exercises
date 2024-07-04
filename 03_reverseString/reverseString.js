const reverseString = function(originalString) {
    let wordArray = originalString.split("");
    let reversedArray = wordArray.reverse();
    let reversedString = reversedArray.join("");
    //for (let i = 0; i < originalString.length(); i++)
return reversedString;
}

// Do not edit below this line
module.exports = reverseString;
