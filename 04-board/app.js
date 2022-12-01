const board = document.querySelector('#board')
const colors = ['#3a6e70', '#204a7b', '#cb5520', '#b9bfd5', '#816320']
const SQUARES_NUMBER = 5000;

for(let i = 0; i < SQUARES_NUMBER; i++) 
{
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
    setColor(square))
    
    square.addEventListener('mouseleave', () => 
    removeColor(square))

    board.append(square)
}

function setColor(element)
{
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 3px ${color}, 0 0 10px ${color}`
}

function removeColor(element)
{
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 3px #000, 0 0 10px #1d1d1d`
}

function getRandomColor()
{
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}