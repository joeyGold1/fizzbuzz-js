const basicRules = {3: 'Fizz', 5: 'Buzz', 7: 'Bang'}
// Here, we create our main function.
function fizzbuzz() {
    for (let i = 1; i <= 200; i++) {
        console.log(getFizzBuzzOutput(i));
    }
}

function getFizzBuzzOutput(i) {
    let output = '';
    for (let key in basicRules) {
        if (i % key === 0) {
            output += basicRules[key]
        }
    }
    if (i % 11 === 0) {
        output = 'Bong';
    }
    if (output !== '') {
        return output
    }

    return i;
}

// Now we run the main function...
fizzbuzz();