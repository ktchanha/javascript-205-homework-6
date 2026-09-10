function printDouble(n) {
    console.log(n * 2);
}

function doubleOf(n) {
    return n * 2;
}

printDouble(5);
console.log(doubleOf(5));

const result = doubleOf(8);
console.log(result);

console.log(doubleOf(5) + doubleOf(10));

// printDouble(5) + printDouble(10) ვერ მოგვცემს 30-ს,
// რადგან printDouble() არაფერს აბრუნებს და მისი დაბრუნებული მნიშვნელობა არის undefined.