const numbers = [5, 7, 10, 11, 3];

function sum(numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
}

function biggestOf(numbers) {
    let biggest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > biggest) {
            biggest = numbers[i];
        }
    }

    return biggest;
}

function average(numbers) {
    return sum(numbers) / numbers.length;
}

console.log(`Sum: ${sum(numbers)}`);
console.log(`Biggest: ${biggestOf(numbers)}`);
console.log(`Average: ${average(numbers)}`);
console.log(`Sum of [1, 2, 3]: ${sum([1, 2, 3])}`);