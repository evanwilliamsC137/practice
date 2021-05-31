"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

function isItANumber(num) {
    if (typeof num === "number"){
        return "number"
    }else {
        return "not a number"
    }
}
//
// Write a function named evenOrOdd that returns the string "even" or "odd" when passed a numeric argument. The resulting string should represent whether the number is even or odd.

function evenOrOdd(num) {
    if (num % 2 === 0){
        return "even"
    }else {
        return "odd"
    }
}

// Write a function named doubleTheElements that accepts an array of numbers and returns an array with double the value of each number.


function doubleTheElements(arr) {
    var doubledNumbers = [];
    for (var i = 0; i < arr.length; i++) {
        var dub = arr[i];
        var dubb = dub * 2;
        doubledNumbers.push(dubb);
    }
    return doubledNumbers;
}

// Write a function named sumOfElements that accepts an array of numbers and returns the sum of those numbers

function sumOfElements(arr) {
    var sum = arr.reduce(function (a,b){
        return a + b;
    })
    return sum
}


// Write a function named totalPrice that accepts an array of objects where each object represents a product from a store, that has a price property. The function should return the total of every object's price property.


// function totalPrice(arr) {
//     var productArray = arr.split(" ")
//     var total = [];
//    productArray.forEach(function (price){
//        total.push(price);
//    })
//     return total;
// }
// console.log(totalPrice())

// Write a function named highestPricedItem that accepts an array of objects where each object represents a product from a store, that has a price property. The function should return the object with the greatest price property from the array. highestPricedItem should return the earlier item in the event of a tie.

//Write a function named discountCheck. The function should accept an object that represents a customer's transaction. The object passed into the function should have customerName, items, and clubMember properties. A customer will qualify for a discount if they have a total from the items property of 150 or greater, or if they are a club member. discountCheck should return a boolean representing whether the customer described by the object qualifies for a discount.

//Write a function named newProduct with two parameters, a string that contains a name, and a number representing the product's price, and returns an object with properties name and price

function newProduct(object, num){
    var array = num.split(", ");
    var names = array[0];
    var nums = array[1];
    return {
        product: object,
        num: {
            name: names,
            price: nums
        }

    }
}

//Write a function named countWords that accepts a string and returns the number of words in that string.

function countWords(str){
    var counter = 0;
    for (var i = 0; i < str.length; i++){
        if (str.charAt(i) === " "){
            counter++
        }else if (str.charAt(i) === "") {
            break;
        }
    }
    return counter;
}


//Write a function named describeNumber that takes in an integer and will return an object describing different features of the input as a number. If the input is a number, the object should have three properties: value for the value passed, evenOrOdd which should be a string to identify whether the passed argument is evenly divisible by 2, and numberOfDigits which should count the number of digits in the argument passed into the function

function describeNumber(int) {

}

//Write a function named screamingSnakeCase that accepts a string that has several words each separated by a space, and returns a string with each word in all caps, and with the spaces replaced by underscores (ex. SCREAMING_SNAKE_CASE).

function screamingSnakeCase(str){
    // for (var i = 0; i < string.length; i++){
    str = str.split(" ").toUpperCase().join("_");
    // }
    return str;
}