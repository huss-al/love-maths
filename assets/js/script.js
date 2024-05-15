
// This code will listen to all the bouttons using their "data-type" attribute and a special one for the submit button
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
         button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`)
            }
         })
    }
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed. 
 */
function runGame () {
    let num1 = Math.ceil(Math.random() * 25)
    let num2 = Math.ceil(Math.random() * 25)
}


function checkAnswer () {

}

function calculateCorrectAnswer () {

}

function incrementScore () {

}

function incrementWrongAnswer () {

}

function displayAdditionQuestion () {

}

 function displaySubtractQuestion () {

 }

 function displayMultiplyQuestion () {

 }
  