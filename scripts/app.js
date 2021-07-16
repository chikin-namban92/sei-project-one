// * DOM Elements
const grid = document.querySelector('.grid')
const cells = []


// * Grid Variables
const width = 10
const cellCount = width * width


// * Game Variable
let godzillaPosition = 0
let score = 0

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
  cells[11].classList.add('wall')
  cells[12].classList.add('wall')
  cells[21].classList.add('wall')
  cells[17].classList.add('wall')
  cells[18].classList.add('wall')
  cells[28].classList.add('wall')
  cells[3].classList.add('item')
  cells[4].classList.add('item')
  cells[5].classList.add('item')
  addGodzilla(startingPosition)
}

function wallCheck(position) {
  return !cells[position].classList.contains('wall')
}

function itemCheck(position) {
  return cells[position].classList.contains('item')
}

function itemPickUp(position) {
  if (itemCheck(godzillaPosition)) {
    cells[position].classList.remove('item')
    score += 100
    console.log(score)
  }
}

function handleKeyUp(event) {
  removeGodzilla(godzillaPosition) // * remove Godzilla from the current position

  const x = godzillaPosition % width
  const y = Math.floor(godzillaPosition / width)

  switch (event.keyCode) { // * calculate the next position and update it
    case 39:
      if (x < width - 1 && wallCheck(godzillaPosition + 1)) {
        godzillaPosition++
      }
      break
    case 37:
      if (x > 0 && wallCheck(godzillaPosition - 1)) {
        godzillaPosition--
      }
      break
    case 38:
      if (y > 0 && wallCheck(godzillaPosition - width)) {
        godzillaPosition -= width
      }
      break
    case 40:
      if (y < width - 1 && wallCheck(godzillaPosition + width)) {
        godzillaPosition += width
      }
      break
    default:
      console.log('invalid key do nothing')
  }
  addGodzilla(godzillaPosition) // * add Godzilla back at the new position
  itemPickUp(godzillaPosition)
}


// * Events
createGrid(godzillaPosition)
document.addEventListener('keyup', handleKeyUp)
