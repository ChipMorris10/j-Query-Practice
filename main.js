$(document).ready (function() {
console.log("Sanity check");

// Exercise #1
// On hover, change the button to green
$('.red').hover(function() {
    $(this).css('background-color', 'green');

// When leaving the button, change the background color back to white
}, function() {
    $(this).css('background-color', 'white');
});


// Exercise #2
// On click, change the background color
$('#btn-bg').on('click', function() {
    $('body').css( {
        'background-color' :'#FFFA10',
    });
});


// Exercise #2a
// On double click, change the background color back to white
$('#btn-bg').on('dblclick', function() {
    $('body').css( {
        'background-color' :'white',
    });
});



// Exercise #3
// On double click, trigger an alert
$('body').dblclick (function() {
    alert("You just double-clicked somewhere on the page!");
});

// Exercise #4
// On click, clone the img i number of times
$('img').on('click', function() {
var e = $('img');
    for (var i = 0; i < 1000; i++) {
      e.clone().insertAfter(e);
    }
});












// var $col = $("#colgroup-compare > col");
// for(var i = 0; i < n; i++){
//     $col.clone().appendTo('#colgroup-compare');
// }



// Exercise #5
// Clicking id='up' makes all the <p> disappear (only those above the button)
$('#up').on('click', function() {
    $('p').hide();
});


// Exercise #6
// Change each li to a different color when clicked
$('#list').on('click', function() {
    $('ul li:first').css( {
        'color': 'red',
    });
    $('ul li:nth-child(2').css( {
        'color': 'green'
    });
    $('ul li:last').css( {
        'color': 'blue',
    });
});


// Exercise #7
// On click, randomly change the line to one of the colors in the array
$('#random').on('click', function() {
    var text = $('#random');
    var original = text.css('color');
    var colors = ['green', 'red', 'blue', 'purple', 'orange', 'pink'];
    var col = Math.floor(Math.random() * colors.length);
    text.css('color', colors[col]);
});


// Exercise #8
$('#number').on('click', function() {
    $(Math.floor(Math.random() * 1000) + 1);
});



});      // end document



