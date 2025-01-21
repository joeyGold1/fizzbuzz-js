const addToOutput = (toAdd) => (output) => {
    output.push(toAdd);
    return output;
};
const bongRule = (output) => {
    output = output.filter((val) => val === 'Fezz')
    addToOutput('Bong')(output)
    return output;
}
const reverseRule = (output) => output.reverse();
const rules = [
    [3, addToOutput('Fizz')],
    [13, addToOutput('Fezz')],
    [5, addToOutput('Buzz')],
    [7, addToOutput('Bang')],
    [11, bongRule],
    [17, reverseRule]
];

function getFizzBuzzOutput(i) {
    let output = [];
    for (const rule of rules) {
        if (i % rule[0] === 0) {
            output = rule[1](output);
        }
    }
    if (output.length !== 0) {
        return output.join('');
    }
    return i;
}

// Here, we create our main function.
function fizzbuzz() {
    for (let i = 1; i <= 260; i++) {
        console.log(getFizzBuzzOutput(i));
    }
}

// Now we run the main function...
fizzbuzz();