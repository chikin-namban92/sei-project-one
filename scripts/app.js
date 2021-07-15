// * DOM Elements
const grid = document.querySelector('.grid')
const cells = []


// * Grid Variables
const width = 10
const cellCount = width * width


// * Game Variable
let godzillaPosition = 0

// * Functions
function addGodzilla(position) {
  cells[position].classList.add('godzilla')
}

function removeGodzilla(position) {
  cells[position].classList.remove('godzilla')
}

function createGrid(startingPosition) {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    cell.textContent = i
    grid.appendChild(cell)
    cells.push(cell)
  }
  addGodzilla(startingPosition)
}

function handleKeyUp(event) {
  removeGodzilla(godzillaPosition) // * remove pikachu from the current position

  const x = godzillaPosition % width
  const y = Math.floor(godzillaPosition / width)

  switch (event.keyCode) { // * calculate the next position and update it
    case 39:
      if (x < width - 1) godzillaPosition++
      break
    case 37:
      if (x > 0) godzillaPosition--
      break
    case 38:
      if (y > 0) godzillaPosition -= width
      break
    case 40:
      if (y < width - 1) godzillaPosition += width
      break
    default:
      console.log('invalid key do nothing')
  }

  addGodzilla(godzillaPosition) // * add pikachu back at the new position
}


// * Events
createGrid(godzillaPosition)
document.addEventListener('keyup', handleKeyUp)