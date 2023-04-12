const container = document.getElementById('container');
const redButton = document.getElementById('redButton');
const blueButton = document.getElementById('blueButton');
const blackButton = document.getElementById('blackButton');
const eraser = document.getElementById('eraser');




for (let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    container.appendChild(gridItem);
  
    gridItem.addEventListener('mouseover', () => {
      gridItem.style.backgroundColor = 'black';
    });
  }



 

  redButton.addEventListener('click', () => {
    container.addEventListener('mouseover', (event) => {
      if (event.target.classList.contains('grid-item')) {
        event.target.style.backgroundColor = 'red';
      }
    });
  });

  blueButton.addEventListener('click', () => {
    container.addEventListener('mouseover', (event) => {
      if (event.target.classList.contains('grid-item')) {
        event.target.style.backgroundColor = 'blue';
      }
    });
  });


  blackButton.addEventListener('click', () => {
    container.addEventListener('mouseover', (event) => {
      if (event.target.classList.contains('grid-item')) {
        event.target.style.backgroundColor = 'black';
      }
    });
  });

  eraser.addEventListener('click', () => {
    container.addEventListener('mouseover', (event) => {
      if (event.target.classList.contains('grid-item')) {
        event.target.style.backgroundColor = '';
      }
    });
  });



  const newGridBtn = document.getElementById('new-grid-btn');

function createGrid(numSquares) {

  container.innerHTML = '';

 
  container.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`;

  
  for (let i = 0; i < numSquares * numSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-item');
    container.appendChild(square);

 
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'red';
    });
  }
}


createGrid(16);


newGridBtn.addEventListener('click', () => {
  const numSquares = prompt('Enter number of squares per side:');
  if (numSquares) {
    createGrid(numSquares);
  }
});