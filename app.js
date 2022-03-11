// import functions and grab DOM elements
const castleDrop = document.getElementById('castle-dropdown');
const waterDrop = document.getElementById('water-dropdown');
const skyDrop = document.getElementById('sky-dropdown');

const castleImg = document.getElementById('castle-img');
const waterImg = document.getElementById('water-img');
const skyImg = document.getElementById('sky-img');

const sloganInput = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');

/* Commenting out my unused variables for now to pass CI until I complete my assignment

const sloganDisplay = document.getElementById('show-slogans');

// let state
let castleCount = 0;
let waterCount = 0;
let skyCount = 0;
*/

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


waterDrop.addEventListener('change', () => {
  // get the value of the head dropdown
    const waterType = waterDrop.value;

  // increment the head change count state
    waterCount++;
  
  // update the dom for the head (use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    //headEl.style.backgroundImage = `url("./assets/${headType}-head.png")`;
  
    waterImg.src = `./assets/${waterType}.png`;

  // update the stats to show the new count (call displayStats() to do this work)

});


skyDrop.addEventListener('change', () => {
  // get the value of the head dropdown
    const skyType = skyDrop.value;

  // increment the head change count state
    skyCount++;
  
  // update the dom for the head (use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    //headEl.style.backgroundImage = `url("./assets/${headType}-head.png")`;
  
    skyImg.src = `./assets/${skyType}.png`;

  // update the stats to show the new count (call displayStats() to do this work)

});

/* sloganButton.addEventListener('change', () => {
  // get the value of the head dropdown
    const newSlogan = sloganInput.value;

    slogans.push(newSlogan);

    sloganInput.value = '';
  


});

*/