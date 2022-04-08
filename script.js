createPixel(5);

const black = document.querySelector('.black');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

function addSelected(event) {
  const selectedItem = document.querySelector('.selected');
  selectedItem.classList.remove('selected');
  event.target.classList.add('selected');
}

black.addEventListener('click', addSelected);
blue.addEventListener('click', addSelected);
green.addEventListener('click', addSelected);
yellow.addEventListener('click', addSelected);

/* let pixelBoard = document.getElementById('pixel-board');

pixelBoard.addEventListener('click', function paintItem (event) {
  let selectedItemColor = document.querySelector(".selected");
  console.log(selectedItemColor);
  event.target.style.backgroundColor = selectedItemColor.style.backgroundColor;
  console.log(selectedItemColor.style.backgroundColor);
  console.log(event.target);

}); */

const pixelBoard = document.querySelector('#pixel-board');
function paintItem(event) {
  const selectedItemColor = document.querySelector('.selected');
  // console.log(selectedItemColor);
  const cor = window.getComputedStyle(selectedItemColor);
  event.target.style.backgroundColor = cor.getPropertyValue('background-color');
  // console.log(selectedItemColor.style.backgroundColor);
  // console.log(event.target);
}
pixelBoard.addEventListener('click', paintItem);

//--
// 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.

const btLimpar = document.querySelector('#clear-board');
function clean() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

btLimpar.addEventListener('click', clean);

// 10 e 11 - Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária. 11 - Limite o tamanho mínimo e máximo do board. Valor menor que 5, considerar 5 como padrão; Valor maior que 50, considerar 50 como padrão.

function createPixel(size) {
  const pixelLine = document.querySelector('#pixel-board');
  pixelLine.innerHTML = '';
  for (let i = 0; i < size; i += 1) {
    const line = document.createElement('div');
    line.classList.add('pixel-line');
    pixelLine.appendChild(line);
    for (let index = 0; index < size; index += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      line.appendChild(pixel);
    }
  }
}

const btVQV = document.querySelector('#generate-board');
const inTamanhoQuadra = document.querySelector('input[name="tamanho"]');
btVQV.addEventListener('click', () => {
  if (inTamanhoQuadra.value === '') {
    alert('Board inválido!');
  }
  if (inTamanhoQuadra.value > 49) {
    inTamanhoQuadra.value = 50;
  }
  if (inTamanhoQuadra.value <= 4) {
    inTamanhoQuadra.value = 5;
  } else {
    createPixel(inTamanhoQuadra.value);
  }
  console.log(inTamanhoQuadra.value);
});

// 12
/* Fonte de Referência para a função de gerar aleatório: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript */

function gerar_cor(opacidade) {
  const r = parseInt(Math.random() * 255);
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
}

function mudaCor() {
  const inputElement = document.querySelectorAll('.aleatorio');
  for (let i = 0; i < inputElement.length; i += 1) {
    inputElement[i].style.backgroundColor = gerar_cor(1);
  }
}
mudaCor();
