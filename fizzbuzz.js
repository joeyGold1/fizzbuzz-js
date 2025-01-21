const basicRules = {3: 'Fizz', 13: 'Fezz', 5: 'Buzz', 7: 'Bang'}
// Here, we create our main function.
function fizzbuzz() {
    for (let i = 1; i <= 260; i++) {
        console.log(getFizzBuzzOutput(i));
    }
}

function getFizzBuzzOutput(i) {
    let output = [];
    for (let key in basicRules) {
        if (i % key === 0) {
            output.push(basicRules[key]);
        }
    }
    if (i % 11 === 0) {
        output = output.filter((val) => val === 'Fezz')
        output.push('Bong');
    }
    if(i % 17 === 0) {
        output.reverse();
    }
    if (output.length !== 0) {
        return output.join('');
    }
    return i;
}

// Now we run the main function...
fizzbuzz();