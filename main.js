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
var myDiv = document.getElementById('exerciseOne');
myDiv.onmouseenter = function() {
    event.target.style.color = "orange";
};

myDiv.onmouseleave = function() {
    event.target.style.color = "blue";
};

// ** How do I isolate the button by itself? **//
// ** document.body.style.backgroundColor = "red"; **//

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
    alert("ZACH - check it out.\nThree lines.\nSmall wins");
});

// Exercise 4
// var foodPicture = addEventListener("click", function() {

// var foodPicture = document.getElementById("tofu");
// for(var i = 0; i < 1000; i++) {
//     var clonedImage = foodPicture.cloneNode(true);
//     foodPicture.parentElement.appendChild(clonedImage);
//     }
// });


// Exercise 5
// Skip. Too much css according to Zach


// Exercise 6
var changeLines = document.getElementById("list").children;
for (i = 0; i < changeLines.length; i ++) {
    changeLines[i].addEventListener("click", function () {
        this.style.color = this.innerHTML;
    });
}


// Exercise 7
var colorArr = ["green", "red", "blue", "purple", "orange", "pink"];
var newLineColor = document.getElementById("random");

newLineColor.addEventListener("click", function() {
    var color = colorArr[Math.floor(Math.random()*colorArr.length -1)];
    event.target.style.color = color;
});

// Exercise 8
var randomNumbers = document.getElementById("number");
randomNumbers.addEventListener("click", function() {
var numArr = [];

for (i = 0; i < 50; i ++) {
    var random = Math.floor(Math.random() * 1000) + 1;
    numArr.push(random);
    }
    this.innerHTML=numArr;
});
