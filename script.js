/* eslint-disable no-extra-semi */
const idPaleta = document.querySelector('#color-palette');
const buttons = document.querySelectorAll('button');


let black = buttons[0].style.backgroundColor = 'black';
let blue = buttons[1].style.backgroundColor = 'blue';
let green = buttons[2].style.backgroundColor = 'green';
let purple = buttons[3].style.backgroundColor = 'purple';

let pixelBoard = document.querySelector('#pixel-board');
function criaQuadro() {
  for (let i = 1; i <= 25; i += 1) {
    let criaDiv = document.createElement('div');
    pixelBoard.appendChild(criaDiv);
    criaDiv.className = 'pixel';
  }
}
criaQuadro();

let pixels = document.querySelectorAll('.pixel');
function quebraLinha() {
  for (let i = 0; i < pixels.length; i += 1) {
    if (i === 5 || i === 10 || i === 15 || i === 20) {
      let criaBr = document.createElement('br');
      pixelBoard.insertBefore(criaBr, pixels[i]);
    }
  }
};
quebraLinha();

// let corSelecionada = ''
// buttons[0].addEventListener('click', function () {
//  corSelecionada =
// })