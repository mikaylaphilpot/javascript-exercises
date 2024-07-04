const removeFromArray = function(removeThisArray, ...args) {
    return removeThisArray.filter(arrayMembers => !args.includes(arrayMembers)); 
}

// Do not edit below this line
module.exports = removeFromArray;
