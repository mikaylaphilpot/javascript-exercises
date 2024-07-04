const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    }
    let newerString = '';
    for(let i = 0; i < num; i++) {
        newerString = (newerString.concat(string));
        }
    return newerString;
}

// Do not edit below this line
module.exports = repeatString;
