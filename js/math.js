const pi = 3.14;
const e = 2.71828;
const p = (1 + Math.sqrt(5)) / 2

function calculus(nums) {
    return nums / pi
}


console.log(calculus(159333))
console.log(calculus(96333))

let F = 20;
let M = 12;
let A = 35;

function force() {
    return "Force = " + M * A;
}

function mass() {
    return "Mass = " + F / A;
}

function acceleration() {
    return "Acceleration = " + F / M;
}

console.log(force())
console.log(mass())
console.log(acceleration())

function calc(num) {
    for (let i = 0; i < 25; i++) {
        console.log((num * (i / pi)).toFixed(3))
    }
}

calc(2)


function fibonacci() {
    for (let n = 1; n < 25; n++) {
        console.log(((p.toExponential(n) - (- 1/p).toExponential(n)) / Math.sqrt(5)))
    }
}

fibonacci()