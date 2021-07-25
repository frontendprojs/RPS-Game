const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScissors = document.querySelector('.btn-scissors');
let playField = document.querySelector('#idk-one');
const playFieldOpp = document.querySelector('#idk-two');
let scoreOne = document.querySelector('#score-live-one');
let scoreTwo = document.querySelector('#score-live-two');
let colMid = document.querySelector('.col-mid');
let fit = document.querySelector('.fit');
const btnReset = document.querySelector('.btn-reset');
let winOne = 1;
let winTwo = 1;


btnRock.addEventListener('click', (e) => {
    e = bot();
    playField.innerHTML = "<h2>ROCK</h2>";
    playFieldOpp.innerHTML = `<h2>${e}</h2>`;
    checkRock(e);
    validating();
});

btnScissors.addEventListener('click', (e) => {
    e = bot();
    playField.innerHTML = "<h2>SCISSORS</h2>";
    playFieldOpp.innerHTML = `<h2>${e}</h2>`
    checkScissors(e)
    validating();
});


btnPaper.addEventListener('click', (e) => { 
    e = bot();
    playField.innerHTML = "<h2>PAPER</h2>";
    playFieldOpp.innerHTML = `<h2>${e}</h2>`
    checkPaper(e);
    validating();
});

function bot() {
    let random = Math.floor(Math.random() * 3);
    let arr = ['ROCK', 'SCISSORS', 'PAPER'];
    let rand = arr[random];
    return rand;
}


function checkRock(test) {
    if(test === 'PAPER') {
        colMid.innerHTML = '<h1 class="fit font-weight-bold font-italic">LOSE</h1>';
        return 'lose'; 
    }else if(test === 'SCISSORS') { 
        colMid.innerHTML = '<h1 class="fit font-weight-bold font-italic">WIN</h1>';
        return 'win'; 
    }else { 
        colMid.innerHTML = '<h1 class="fit font-weight-bold font-italic">TIE</h1>';
        return 'tie'; 
    } 
} 
function checkPaper(test) { 
    if(test === 'SCISSORS') { 
        colMid.innerHTML = '<h1 class="fit font-weight-bolder font-italic">LOSE</h1>';
        return 'lose'; 
    }else if(test === 'ROCK') { 
        colMid.innerHTML = '<h1 class="fit font-weight-bolder font-italic">WIN</h1>';
        return 'win'; 
    }else { 
        colMid.innerHTML = '<h1 class="fit font-weight-bolder font-italic">TIE</h1>';
        return 'tie'; 
    } 
} 
function checkScissors(test) { 
    if(test === 'ROCK') { 
        colMid.innerHTML = '<h1 class="fit font-weight-bolder font-italic">LOSE</h1>';
        return 'lose'; 
    }else if(test === 'PAPER') { 
        colMid.innerHTML = '<h1 class="fit font-weight-bolder font-italic">WIN</h1>';
        return 'win'; 
    }else { 
        colMid.innerHTML = '<h1 class="fit font-weight-bolder font-italic">TIE</h1>';
        return 'tie'; 
    } 
}


function validating() {
    if(colMid.textContent === 'LOSE') {
        scoreTwo.textContent = winTwo++;
        if(scoreTwo.textContent === '20') {
            let askOne = confirm('Opponent won, Do you want to restart?');
            if(askOne) {
                let clickEvent = new Event('click');
                btnReset.dispatchEvent(clickEvent);
            }
        }
    }else if(colMid.textContent === 'WIN') {
        scoreOne.textContent = winOne++;
        if(scoreOne.textContent === '20') {
            let askTwo = confirm('You won, Do you want to restart?');
            if(askTwo) {
                let clickEvent = new Event('click');
                btnReset.dispatchEvent(clickEvent);
            }
        }
    }else {
        
    }
}

btnReset.addEventListener('click', () => {
    window.location.href=window.location.href
});