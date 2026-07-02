// A closure remembers variables from its outer function
function outer() {
    let count = 0;

    return function () {
        count++;
        console.log("Count:", count);
    };
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3