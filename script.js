/* eslint-disable no-undef */
/* eslint-disable no-extra-semi */
const idPaleta = document.querySelector('#color-palette');
const buttons = document.querySelectorAll('button');

const r = Math.floor(Math.random() * 255);
const g = Math.floor(Math.random() * 255);
const b = Math.floor(Math.random() * 255);

const r1 = Math.floor(Math.random() * 255);
const g1 = Math.floor(Math.random() * 255);
const b1 = Math.floor(Math.random() * 255);

const r2 = Math.floor(Math.random() * 255);
const g2 = Math.floor(Math.random() * 255);
const b2 = Math.floor(Math.random() * 255);
const black = buttons[0].style.backgroundColor = 'black';
const blue = buttons[1].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
const green = buttons[2].style.backgroundColor = `rgb(${r1}, ${g1}, ${b1})`;
const purple = buttons[3].style.backgroundColor = `rgb(${r2}, ${g2}, ${b2})`;

const pixelBoard = document.querySelector('#pixel-board');
function criaQuadro() {
  for (let i = 1; i <= 25; i += 1) {
    const criaDiv = document.createElement('div');
    pixelBoard.appendChild(criaDiv);
    criaDiv.className = 'pixel';
  }
  pixelBoard.style.width = '225px';
  pixelBoard.style.height = '225px';
}
criaQuadro();

const pixels = document.querySelectorAll('.pixel');

const corInicial = document.getElementsByTagName('button')[0];
corInicial.classList.add('selected');

function addRemoveSelected(elemento, cor) {
  for (let index = 0; index < buttons.length; index += 1) {
    buttons[index].classList.remove('selected');
  }
  corSelecionada = cor;
  elemento.classList.add('selected');
}

buttons[0].addEventListener('click', (event) => {
  addRemoveSelected(event.target, black);
});

buttons[1].addEventListener('click', (event) => {
  addRemoveSelected(event.target, blue);
});

buttons[2].addEventListener('click', (event) => {
  addRemoveSelected(event.target, green);
});

buttons[3].addEventListener('click', (event) => {
  addRemoveSelected(event.target, purple);
  console.log(event);
});

for (let index = 0; index < pixels.length; index += 1) {
  // let corPixel = pixels[index].style.backgroundColor = 'white';
  pixels[index].addEventListener('click', (event) => {
    const selectedCor = document.querySelector('#color-palette .selected').style.backgroundColor;
    event.target.style.backgroundColor = selectedCor;
  });
}

const body = document.getElementsByTagName('body')[0];
const addBtnLimpar = document.createElement('button');
const text = document.createTextNode('Limpar');
addBtnLimpar.appendChild(text);
addBtnLimpar.id = 'clear-board';
body.insertBefore(addBtnLimpar, pixelBoard);

const buttonClear = document.querySelector('#clear-board');
for (let count = 0; count < pixels.length; count += 1) {
  buttonClear.addEventListener('click', () => {
    pixels[count].style.backgroundColor = 'white';
  });
}

const btnInput = document.querySelector('#generate-board');

btnInput.addEventListener('click', (e) => {
  const input = document.querySelector('#board-size');
  const { value } = input;
  if (value > 0) {
    console.log(value);
  } else if (value <= 0 || undefined) {
    alert('Board inválido!');
  }
});

