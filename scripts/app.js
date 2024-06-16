// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34

// This one seems to be very simlier to the returning negative number kata. This doesn't work on decimals. need to rethink this.
function opposite(num){
    if (num > 0){
        return num * -1;
    }else{
        return num * 1;
    }
}

// maybe if I just returned the number with a - in front of it, that should give me the opposite of it.
// it worked

function opposite(num){
    return -num;
}