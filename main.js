//  Exercise 1
var button = document.getElementsByClassName("hoverButton")[0];
console.log(button);

button.addEventListener("mouseenter", function(event) {
    event.target.style.color = "blue";


// Exercise 1a.
// Add a mouseleave function
button.addEventListener("mouseleave", function(event) {
    event.target.style.color = "red";
    });
});


// Exerciese 1b - on mouseover, change the text color
// var myDiv = document.getElementById('exerciseOne');
myDiv.onmouseenter = function() {
    event.target.style.color = "orange";
};

myDiv.onmouseleave = function() {
    event.target.style.color = "blue";
};

// ** How do I isolate the button by itself? **//
// ** console shows an error on line 5, but I don't know why **//

// Exercise 2
var changeColor = document.getElementById("btn-bg");

changeColor.addEventListener("click", function(event) {
    event.target.style.backgroundColor = "yellow";
});

// ** I'm supposed to change the background of the page. I tired **//
// var changeColor = document.getElementById("body");
// console.log(changeColor);

// changeColor.addEventListener("click", function(event) {
//     event.body.style.backgroundColor = "yellow";
// });

// Exercise 3
var twoClicks = document.getElementById("container");

twoClicks.addEventListener("dblclick", function(event) {
    alert("Check it out.\nTwo lines.");
});

// Exercise 4
// var foodPicture = document.getElementById("tofu");

// foodPicture.addEventListener("click", function(event) {
//     console.log(foodPicture);

//     for(var i = 0; i < 1000; i++) {
//         clone();
//     }
// });

// Exercise 5
// Skip. Too much css according to Zach


// Exercise 6
// var changeLines = document.getElementById("list").children;

// changeLineColor.addEventListener("click", function() {
//     event.target.children.backgroundColor = (changeLineColor)[0],"red";
// });


    // var changeLines = document.getElemenById("list").children[0];

    // changeLines.addEventListener("click", function(event) {
    //     event.body.style.backgroundColor = "red";
    // });


// Exercise 7
var newLineColor = document.getElementById("random");
changeColor.addEventListener("click", function() {
    event.target.style.color = "yellow";
});




