const checkTarget = document.querySelector('.grid-container');
const gridContainer = document.querySelector('.grid-container');
const gridBox = document.querySelectorAll('.grid-box');
const iTag = document.querySelector('.fa-solid')
const scoreX = document.getElementById('score-x');
const scoreO = document.getElementById('score-o');
const btnX = document.querySelector('.btn-x');
const btnO = document.querySelector('.btn-o');
let turns = 9;
let xFirst;
let oFirst;

// console.log('X ', xFirst, '; O ', oFirst)
// checkTarget.addEventListener('click', (e) => console.log(e.target.classList));



document.querySelector('h3').title = 'Reset for a new game';


function xIsFirst(e) {
  if (e.target.parentElement.classList.contains('btn-x')) {
    return xFirst = true;
  }
};


function oIsFirst(e) {
  if (e.target.parentElement.classList.contains('btn-o')) {
    return oFirst = true;
  }
};


function addX(e) {
  if (e.target.nodeName === 'I') {
    return alert('There is already a selection here.');
  } if (e.target.classList.contains('grid-container')) {
    return alert('Click inside the play box.');
  } else {
    e.target.innerHTML = `<i class="fa-solid fa-x"></i>`;
  }
}

function addO(e) {
  if (e.target.nodeName === 'I') {
    return alert('There is already a selection here.');
  } if (e.target.classList.contains('grid-container')) {
    return alert('Click inside the play box.');
  } else {
    e.target.innerHTML = `<i class="fa-solid fa-o"></i>`;
  }
}

// function to alternate turns


// Win, Lose Draw logic




btnX.addEventListener('click', xIsFirst);
btnO.addEventListener('click', oIsFirst);
gridContainer.addEventListener('click', addX);
gridContainer.addEventListener('click', addO);