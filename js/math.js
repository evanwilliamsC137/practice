let pi = 3.14;

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