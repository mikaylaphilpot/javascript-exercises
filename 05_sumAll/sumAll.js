const sumAll = function(firstNumber, lastNumber) {
if (firstNumber < 0 || lastNumber < 0 ) {
    return 'ERROR';
}
else if (!Number.isInteger(firstNumber)||!Number.isInteger(lastNumber)) {
    return 'ERROR';
}
let firstNmbr;
let lastNmbr;
if (lastNumber < firstNumber) { 
    firstNmbr = lastNumber; 
    lastNmbr = firstNumber;
}
else {
    lastNmbr = lastNumber;
    firstNmbr = firstNumber;
}
let startingSum = 0;
for (let startingNumber = firstNmbr; startingNumber <= lastNmbr; startingNumber++) {
    startingSum = startingSum + startingNumber;
} 
return startingSum;
};

// Do not edit below this line
module.exports = sumAll;
