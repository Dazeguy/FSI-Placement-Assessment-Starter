// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Shane" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const addgb = document.querySelector('#add-gb')
const minusgb = document.querySelector('#minus-gb')
const addcc = document.querySelector('#add-cc')
const minuscc = document.querySelector('#minus-cc')
const addsugar = document.querySelector('#add-sugar')
const minussugar = document.querySelector('#minus-sugar')
// Code to update name display
credit.textContent = `Created by ${yourName}`
// Event listener for clicks on the "+" button for Gingerbread cookies
addgb.addEventListener('click',()=>{
    {
        gb++
        addgb.textContent
    }    
});


// gb minus btn
minusgb.addEventListener('Click',()=>{
    {
        gb++
    }
});
// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked


// TODO: Hook up event listeners for the rest of the buttons