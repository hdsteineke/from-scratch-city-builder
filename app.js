
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
const cityNameEl = document.getElementById('city-name-here');

const reportChanges = document.getElementById('report');



let castleCount = 0;
let waterCount = 0;
let skyCount = 0;

let slogans = [];



castleDrop.addEventListener('change', () => {
    const castleType = castleDrop.value;

    castleCount++;

    castleImg.src = `./assets/${castleType}.png`;

    displayStats();

});


waterDrop.addEventListener('change', () => {
    const waterType = waterDrop.value;

    waterCount++;
  
    waterImg.src = `./assets/${waterType}.png`;

    displayStats();

});


skyDrop.addEventListener('change', () => {
    const skyType = skyDrop.value;

    skyCount++;
  
    skyImg.src = `./assets/${skyType}.png`;

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
        sloganP.textContent = cityInput.value + ': ' + slogan; 

        sloganDisplay.append(sloganP);
    }
}

function displayStats() {
    reportChanges.textContent = `You have changed your castle ${castleCount} times, your water ${waterCount} times, and your sky ${skyCount} times.`;

}




