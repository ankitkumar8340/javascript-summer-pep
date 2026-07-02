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
counter(); // 2]
counter(); // 3



function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function goodbye() {
    console.log("Good Bye");
}

greet("Ankit", goodbye);




const promise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Data Loaded Successfully");
    } else {
        reject("Something went wrong");
    }

});

promise
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("Promise Completed");
});





















