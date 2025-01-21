

// Here, we create our main function.
function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        console.log(getFizzBuzzOutput(i));
    }
}

function getFizzBuzzOutput(i) {
    let output = '';
    if (i % 3 === 0) {
        output += 'Fizz';
    }
    if (i % 5 === 0) {
        output += 'Buzz';
    }
    if (output !== '') {
        return output
    }
    return i;
}

// Now we run the main function...
fizzbuzz();
