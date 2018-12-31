// Store random number from between 1 and 10
const target_index = Math.floor((Math.random() * 10) + 1);

// Create array of colors
const colors = [
    'blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'
];

// Sort the colors in the colors array in alphabetical order incase they aren't
colors.sort(); 

// Select a color in the colors array with the randomly generated number
const target = colors[target_index]; 

// Button for guessing again
const button = document.getElementById("try-again");

// Prompt the user to input a color
let guess_input = prompt("I am thinking of one of these colors: \n \n \
blue, cyan, gold, gray, green, magenta, orange, red, white, yellow \n \n\
What color am I thinking of? "); 

let tries = 1; 

// Check if the input matches the selected color and give hints.
if( colors.includes(guess_input) && guess_input == target) {
    const background = document.getElementById("background"); 
    background.style.backgroundColor = guess_input; 
    alert(`Congratulations! You have guessed the color! \n\ It took you ${tries} guesses to finish the game! \
    You can see the colour in the background.`);
    button.style.visibility = "hidden";

} else if ( colors.includes(guess_input) && guess_input < target ) {
    
    alert("Sorry, your guess is not correct! \n\ \n\ \
Hint: Your color is alphabetically lower than mine \n\ \n\ Please try again.");
} else if ( colors.includes(guess_input) && guess_input > target){
    alert("Sorry, your guess is not correct! \n\ \n\ \
Hint: Your color is alphabetically higher than mine \n\ \n\ Please try again.");
} else {
    alert( "Sorry, I don't recognize your color. \n\ \n\ Please try again.")
} 


// Event handler for button
const newAttempt = () => {
    tries++;

        // Prompt the user to input a color
    let guess_input = prompt("I am thinking of one of these colors: \n \n \
    blue, cyan, gold, gray, green, magenta, orange, red, white, yellow \n \n\
    What color am I thinking of? "); 

        // Check if the input matches the selected color and give hints.
    if( colors.includes(guess_input) && guess_input == target) {
        //The color was guessed correctly

        const background = document.getElementById("background"); 
        background.style.backgroundColor = guess_input; 

        button.style.visibility = "hidden";

        alert(`Congratulations! You have guessed the color! \n\ It took you ${tries} guesses to finish the game! \
        You can see the colour in the background.`);
       

    } else if ( colors.includes(guess_input) && guess_input > target ) {
        alert("Sorry, your guess is not correct! \n\ \n\ \
    Hint: Your color is alphabetically lower than mine \n\ \n\ Please try again.");
    
    } else if ( colors.includes(guess_input) && guess_input < target){
        alert("Sorry, your guess is not correct! \n\ \n\ \
    Hint: Your color is alphabetically higher than mine \n\ \n\ Please try again.");

    } else {
        alert( "Sorry, I don't recognize your color. \n\ \n\ Please try again.")
    } 
}