

// Here, we create our main function.
function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        console.log(getFizzBuzzOutput(i));
    }
}

function getFizzBuzzOutput(i) {
    if (i % 3 == 0 && i % 5 == 0) {
        return 'FizzBuzz'
    } else if (i % 3 == 0) {
        return 'Fizz';
    } else if (i % 5 == 0) {
        return 'Buzz';
    }
    return i;
}

// Now we run the main function...
fizzbuzz();
