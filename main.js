//  Exercise 1
var button = document.getElementsByClassName("hoverButton")[0];
console.log(button);

button.addEventListener("mouseenter", function(event) {
    event.target.style.color = "blue";


// Exercise 1a.
// Add a mouseleave function
button.addEventListener("mouseleave", function(event) {
    event.target.style.color = "pink";
    });
});


// Exerciese 1b - on mouseover, change the text color
// var myDiv = document.getElementById('exerciseOne');
myDiv.onmouseenter = function() {
    event.target.style.color = "orange";
};

myDiv.onmouseleave = function() {
    event.target.style.color = "black";
};

// ** How do I isolate the button by itself? **//
// ** Error on line 5 in the console **//

// Exercise 2
var x = document.getElementById("btn-bg");
console.log(x);

x.addEventListener("click", function(event) {
    event.target.style.backgroundColor = "yellow";
});

// ** I'm supposed to change the background of the page. I tired **//
// var x = document.getElementById("body");
// console.log(x);

// x.addEventListener("click", function(event) {
//     event.body.style.backgroundColor = "yellow";
// });

// Exercise 3
var y = document.getElementById("container");

y.addEventListener("dblclick", function(event) {
    alert("Check it out.\nTwo lines.");
});

// Exercise 4
var z = document.getElementById("tofu");

z.addEventListener("click", function(event) {

    for(var i = 0; i < 1000; i++) {
        clone();
    }
});

