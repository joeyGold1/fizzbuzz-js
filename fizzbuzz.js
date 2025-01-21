

// Here, we create our main function.
function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        console.log(getFizzBuzzOutput(i));
    }
}

function getFizzBuzzOutput(i) {
    if (i % 3 == 0) {
        return 'fizz';
    }
    return i;
}

// Now we run the main function...
fizzbuzz();
