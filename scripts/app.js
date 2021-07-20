// * DOM Elements
const grid = document.querySelector('.grid')
const cells = []


// * Grid Variables
const width = 10
const cellCount = width * width


// * Game Variable
let godzillaPosition = 0
let score = 0
let enemyOnePosition = 99

// * Functions
function addGodzilla(position) {
  cells[position].classList.add('godzilla')
}

function removeGodzilla(position) {
  cells[position].classList.remove('godzilla')
}

function addEnemyOne(position) {
  cells[position].classList.add('enemyOne')
}

function removeEnemyOne(position) {
  cells[position].classList.remove('enemyOne')
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
  cells[4].classList.add('wall')
  cells[5].classList.add('wall')
  cells[24].classList.add('wall')
  cells[34].classList.add('wall')
  cells[25].classList.add('wall')
  cells[35].classList.add('wall')
  cells[78].classList.add('wall')
  cells[87].classList.add('wall')
  cells[88].classList.add('wall')
  cells[71].classList.add('wall')
  cells[81].classList.add('wall')
  cells[82].classList.add('wall')
  cells[94].classList.add('wall')
  cells[95].classList.add('wall')
  cells[64].classList.add('wall')
  cells[74].classList.add('wall')
  cells[65].classList.add('wall')
  cells[75].classList.add('wall')
  cells[50].classList.add('wall')
  cells[51].classList.add('wall')
  cells[58].classList.add('wall')
  cells[59].classList.add('wall')
  addGodzilla(startingPosition)
  addEnemyOne(enemyOnePosition)
}

function enemyOneMovement() {
  

  let enemyDirection = 0
  const x = enemyOnePosition % width
  const y = Math.floor(enemyOnePosition / width)

  enemyDirection = Math.floor(Math.random() * 4)
  console.log(enemyDirection)
  setInterval(() => {
    console.log(enemyOnePosition)
    console.log(enemyDirection)
    if (!wallCheck(enemyOnePosition + 1)) {
      enemyDirection = Math.floor(Math.random() * 4)
    } else if (x < width - 1 && wallCheck(enemyOnePosition + 1) && enemyDirection === 1) {
      console.log('I am here')
      removeEnemyOne(enemyOnePosition)
      enemyOnePosition++
      addEnemyOne(enemyOnePosition)
    } else if (x > 0 && wallCheck(enemyOnePosition - 1) && enemyDirection === 2) {
      console.log('I am here')
      removeEnemyOne(enemyOnePosition)
      enemyOnePosition--
      addEnemyOne(enemyOnePosition)
    } else if (y > 0 && wallCheck(enemyOnePosition - width) && enemyDirection === 3) {
      console.log('I am here')
      removeEnemyOne(enemyOnePosition)
      enemyOnePosition -= width
      addEnemyOne(enemyOnePosition)
    } else if (y < width - 1 && wallCheck(enemyOnePosition + width) && enemyDirection === 4) {
      console.log('I am here')
      removeEnemyOne(enemyOnePosition)
      enemyOnePosition += width
      addEnemyOne(enemyOnePosition)
    }
  }, 500)

}

// function enemyOneInterval() {  
//   setInterval(() => {
//     enemyOneMovement()
//   }, 500)
// }


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

function enemyCollisionCheck(position) {
  return cells[position].classList.contains('enemyOne')
}

function removePlayerLife() {
  if (enemyCollisionCheck(godzillaPosition)) {
    removeGodzilla(godzillaPosition)
    godzillaPosition = 0
    addGodzilla(godzillaPosition)
  } return
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
      // console.log('invalid key do nothing')
  }
  addGodzilla(godzillaPosition) // * add Godzilla back at the new position
  itemPickUp(godzillaPosition)
  removePlayerLife()
}




// * Events
createGrid(godzillaPosition)
enemyOneMovement()

document.addEventListener('keyup', handleKeyUp)
