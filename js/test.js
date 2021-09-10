function fizzbuzz(x) {
    if (x % 5 === 0 || x % 3 === 0) {
        console.log("fizz")
    }else if (x % 5 === 0) {
        console.log("buzz")
    }else if (x % 3 === 0) {
        console.log("FizzBuzz")
    }
}

fizzbuzz(25);
fizzbuzz(9);
fizzbuzz(30);

function isOdd(num) {
    if (num % 2 !== 0) {
        return true;
    }else {
        return false;
    }
}

isOdd(11);
isOdd(20);

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
}

isEven(11);
isEven(20);

function identity(input) {
    return input;
}

console.log(identity());

function isFive(num) {
    if (num === 5) {
        return true;
    }
}

isFive(5);
isFive(6);
isFive(7);