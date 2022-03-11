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

const cityInput = document.getElementById('city-input');
const cityButton = document.getElementById('city-button');
const cityNameEl = document.getElementById('city-name-here')

const reportChanges = document.getElementById('report');

// let state
let castleCount = 0;
let waterCount = 0;
let skyCount = 0;

let cityName = '';


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
    displayStats();

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
    displayStats();

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
    displayStats();

});



sloganButton.addEventListener('click', () => {

    const newSlogan = sloganInput.value;

    slogans.push(newSlogan);

    sloganInput.value = '';

    showSlogans();

  

});

cityButton.addEventListener('click', () => {
    cityNameEl.textContent = cityInput.value;
  
});



function showSlogans() {

    sloganDisplay.textContent = '';

    for (let slogan of slogans) {
      
        const sloganP = document.createElement('p');
        sloganP.classList.add('slogan');
        sloganP.textContent = slogan;

        sloganDisplay.append(sloganP);
    }

}

function displayStats() {

    reportChanges.textContent = `You have changed your castle ${castleCount} times, your water ${waterCount} times, and your sky ${skyCount} times.`;

}
