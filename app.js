// import functions and grab DOM elements
const castleDrop = document.getElementById('castle-dropdown');
const waterDrop = document.getElementById('water-dropdown');
const skyDrop = document.getElementById('sky-dropdown');

const castleImg = document.getElementById('castle-img');
const waterImg = document.getElementById('water-img');
const skyImg = document.getElementById('sky-img');

const sloganInput = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');
const sloganDisplay = document.getElementById('show-slogans');

// let state
let castleCount = 0;
let waterCount = 0;
let skyCount = 0;

let slogans = [];

// set event listeners 
castleDrop.addEventListener('change', () => {
  // get the value of the head dropdown
    const castleType = castleDrop.value;

  // increment the head change count state
    castleCount++;
  
  // update the dom for the head (use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    //headEl.style.backgroundImage = `url("./assets/${headType}-head.png")`;
  
    castleImg.src = `./assets/${castleType}.png`;

  // update the stats to show the new count (call displayStats() to do this work)

});


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
