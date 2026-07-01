//javascript is a dynamic language

// let num=12
// let num2=13

// console.log(`Number 1 is ${num} and number 2 is ${num2} and their sum is ${num+num2}`)//${variable name}string interpolation 

//declaring
// let num3;

//initalzing
//num3=10;

//declaring and initializing
//let num3=10;

const PI = 3.14;

var num4 = 10;



//hositing -->> call ut before declaration 
//Temporal dead zone  --> the period between when let and const is hoisted in the memory and when the execution exists 
//  it means you can only call value when it is initialized (worked with let)
// console.log(num1);
// var num1=10;
// console.log(num1);

//"use strict"
//let a = 10;  //will create a variable
//b=20;  //this will give error in strict mode  //create a property on global object(window)

// let uname= prompt('enter name');
// console.log("name: ", uname);



// document.getElementById("head1").textContent= "Updated heading"
// document.getElementById("head1").innerText= "Updated inner html"
// document.getElementById("head1").innerHTML ="<i>changed to ittalic</i>"

// document.title="This is new title"

// document.getElementById("para").style.backgroundColor = "black"
// document.getElementById("para").style.color="white"
// document.getElementById("para").style.border=" 2px solid red"
// document.getElementById("para").style.fontSize="30px"



// const myPromise = new Promise((resolve, reject)=>{
//     let sucess = true;
//     if(sucess){
//         resolve("Data received successfully");
//     }
//     else{
//         reject("Something went wrong!");
//     }
// })

// myPromise.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// });

const download = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Download complete");
    }, 4000);
});

download.then((data)=>{
    console.log(data);
})
// console.log(download);


//Using callback hell 

loginUser(function(user){
    getProfile(user.id, function(profile){
        getPosts(profile.id, function(posts){
            console.log(posts);
        })
    })
})


//using promises

//Promise chaining
loginUser()
.then((user)=>{getProfile(user.id)})
.then((profile)=>{getposts(profile.id)})
.then((posts)=>{console.log(posts)})
.catch((error)=>{console.log(error)})
.finally(()=>{console.log("closing Promise")})


Promise.resolve("This issue has been resolved")
.then(console.log)

Promise.reject("Wrong password").catch(console.log)


//Promise all

const p1 = Promise.resolve("A")
const p2 = Promise.resolve("B")
const p3 = Promise.resolve("C")

Promise.all([p1, p2, p3])
.then((result)=>{
    console.log(result)
})
.catch((error)=>{console.log(`Error: ${error}`)})


//Promise race : returns whichever Promise settles first(resolve or reject)

const p1= new Promise(resolve=>{
    setTimeout(()=>{
        resolve("First");
    },3000)
})
const p2= new Promise(resolve=>{
    setTimeout(()=>{
        resolve("Second");
    },2000)
})

Promise.race([p1, p2])
.then(console.log);

//Promise.allSettled()  : waits for every promise, regardless of success or failure

Promise.allSettled([
    Promise.resolve("A"),
    Promise.reject("Error")
])
.then(console.log)

//Promise.any

Promise.any([
    Promise.reject("Error"),
    Promise.resolve("A"),
    Promise.resolve("B")
])
.then(console.log)

const title = document.querySelector('#postTitle');
const id = document.querySelector('#postId');
const body = document.querySelector('#postBody');


fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(res=>res.json())
.then(post=>{
    title.innerText=post.title;
    id.innerText= post.id;
    body.innerText= post.body;
    console.log(post)
})
.catch(error=>{
    console.log("server is not responding")
})




//Accept another function as an argument
//return another function


function greetA(){
    console.log("Hello A")
}

function greetB(){
    console.log("Hello B")
}

function greetC(){
    console.log("Hello C")
}

function greet(uname, callback){  //hof : high order function
    console.log("Hello ", uname);
    callback();
}

function done(){ //callback function
    console.log("greeting complete");
}

greet("A", done);



function calculate(num1, num2, operation){
    return operation(num1, num2);
}

function add(x,y){
    return x+y;
}

function multiply(x,y){
    return x*y;
}

console.log(calculate(10, 20, add));
console.log(calculate(10, 20, multiply));

// function returning another function

function multiply(multiplier){
    return function(num){
        return num*multiplier
    }
}

const double = multiply(2);


console.log(double(10));


//using array constructor
const arr1 = new Array(1,2,3,4);
console.log(arr1);

//create an array with fixed length
let arr1 = new Array(4);
arr1=[1,2,3,4];
console.log(arr1);

let arr2= new Array(3).fill(2);  // [2,2,2]

const arr3 = new Array(4);
for(let i=0; i<arr3.length; i++){
    arr3[i]=i++;
}



// ================================
// JavaScript DOM Manipulation Examples
// ================================

// 1. Change Text
function changeText() {
    document.getElementById("heading").innerHTML = "Welcome Ankit!";
}

// 2. Change Style
function changeStyle() {
    let p = document.getElementById("para");

    p.style.color = "red";
    p.style.backgroundColor = "yellow";
    p.style.fontSize = "25px";
    p.style.border = "2px solid black";
}

// 3. Change Image
function turnOn() {
    document.getElementById("img").src = "on.png";
}

function turnOff() {
    document.getElementById("img").src = "off.png";
}

// 4. Change Link
function changeLink() {
    let link = document.getElementById("link");

    link.href = "https://www.google.com";
    link.innerHTML = "Go to Google";
}

// 5. Hide Element
function hideText() {
    document.getElementById("text").style.display = "none";
}

// 6. Show Element
function showText() {
    document.getElementById("text").style.display = "block";
}

// 7. Read User Input
function displayName() {
    let name = document.getElementById("name").value;

    document.getElementById("result").innerHTML =
        "Welcome " + name;
}

// 8. Change Background Color
function changeBackground() {
    document.body.style.backgroundColor = "lightblue";
}

// 9. Create New Element
function addParagraph() {
    let p = document.createElement("p");

    p.innerHTML = "This paragraph is created by JavaScript.";

    document.getElementById("container").appendChild(p);
}

// 10. Remove Element
function removeParagraph() {
    document.getElementById("removeMe").remove();
}

// 11. Event Listener
document.getElementById("btn").addEventListener("click", function () {
    alert("Button Clicked!");
});

// 12. Change All Elements of Same Class
function changeAll() {
    let items = document.getElementsByClassName("demo");

    for (let i = 0; i < items.length; i++) {
        items[i].style.color = "blue";
        items[i].style.fontSize = "22px";
    }
}

// 13. Query Selector
function queryExample() {
    document.querySelector(".first").style.color = "green";
}

// 14. Query Selector All
function queryAllExample() {
    let items = document.querySelectorAll(".all");

    items.forEach(function (item) {
        item.style.color = "purple";
        item.style.fontWeight = "bold";
    });
}

// 15. Change Attribute
function setAttributeExample() {
    document.getElementById("image")
        .setAttribute("width", "300");
}

// 16. Get Attribute
function getAttributeExample() {
    let value = document.getElementById("image")
        .getAttribute("src");

    console.log(value);
}

// 17. Add CSS Class
function addClass() {
    document.getElementById("box")
        .classList.add("active");
}

// 18. Remove CSS Class
function removeClass() {
    document.getElementById("box")
        .classList.remove("active");
}

// 19. Toggle CSS Class
function toggleClass() {
    document.getElementById("box")
        .classList.toggle("active");
}

// 20. Change Text Content
function changeTextContent() {
    document.getElementById("demo")
        .textContent = "New Text";
}

// 21. Get HTML Content
function getHTML() {
    console.log(
        document.getElementById("demo").innerHTML
    );
}

// 22. Set HTML Content
function setHTML() {
    document.getElementById("demo").innerHTML =
        "<b>Hello JavaScript</b>";
}

// 23. Change Input Value
function setValue() {
    document.getElementById("input").value =
        "Ankit Kumar";
}

// 24. Get Input Value
function getValue() {
    let value = document.getElementById("input").value;

    console.log(value);
}

// 25. Change Multiple Styles
function multipleStyle() {
    let box = document.getElementById("box");

    box.style.width = "200px";
    box.style.height = "200px";
    box.style.backgroundColor = "orange";
    box.style.borderRadius = "20px";
}

// 26. Window Alert
function showAlert() {
    alert("Hello!");
}

// 27. Confirm Box
function showConfirm() {
    let result = confirm("Are you sure?");

    console.log(result);
}

// 28. Prompt Box
function showPrompt() {
    let name = prompt("Enter your name");

    console.log(name);
}

// 29. Current Date
function currentDate() {
    console.log(new Date());
}

// 30. Current Time
function currentTime() {
    console.log(new Date().toLocaleTimeString());
}

// 31. Random Number
function randomNumber() {
    console.log(Math.random());
}

// 32. Redirect to Another Page
function redirectPage() {
    window.location.href = "https://www.google.com";
}

// 33. Reload Page
function reloadPage() {
    location.reload();
}

// 34. Go Back
function goBack() {
    history.back();
}

// 35. Go Forward
function goForward() {
    history.forward();
}

