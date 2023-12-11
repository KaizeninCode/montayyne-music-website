//create the callback function that will be called in each iteration of the for loop
function alerts() {
    alert('This feature is coming soon!')
}

//select all the buttons with the common class name
var buttons = document.getElementsByClassName('button')

//iterate over each button and attach a mouse click event listener to each 
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mousedown', alerts)
}


