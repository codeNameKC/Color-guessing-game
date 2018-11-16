// Store random number from between 1 and 10
const target_index = Math.floor((Math.random() * 10) + 1);

// Create array of colors
const colors = [
    'blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'
];

// Sort the colors in the colors array in alphabetical order
colors.sort(); 

// Select a color in the colors array with the randomly generated number
const target = colors[target_index]; 

//Prompt the user to input a color
let guess_input = prompt("I am thinking of one of these colors: \n \n \
blue, cyan, gold, gray, green, magenta, orange, red, white, yellow \n \n\
 What color am I thinking of? "); 