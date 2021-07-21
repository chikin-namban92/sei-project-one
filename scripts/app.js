// * DOM Elements
const grid = document.querySelector('.grid')
const cells = []


// * Grid Variables
const width = 10
const cellCount = width * width


// * Game Variable
let godzillaPosition = 11
let score = 0
let enemyOnePosition = 88
let playerLives = 2
let gameSpeed = 500

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
  // cells[11].classList.add('wall')
  // cells[12].classList.add('wall')
  // cells[21].classList.add('wall')
  // cells[17].classList.add('wall')
  // cells[18].classList.add('wall')
  // cells[28].classList.add('wall')
  // cells[4].classList.add('wall')
  // cells[5].classList.add('wall')
  // cells[24].classList.add('wall')
  // cells[34].classList.add('wall')
  // cells[25].classList.add('wall')
  // cells[35].classList.add('wall')
  // cells[78].classList.add('wall')
  // cells[87].classList.add('wall')
  // cells[88].classList.add('wall')
  // cells[71].classList.add('wall')
  // cells[81].classList.add('wall')
  // cells[82].classList.add('wall')
  // cells[94].classList.add('wall')
  // cells[95].classList.add('wall')
  // cells[64].classList.add('wall')
  // cells[74].classList.add('wall')
  // cells[65].classList.add('wall')
  // cells[75].classList.add('wall')
  // cells[50].classList.add('wall')
  // cells[51].classList.add('wall')
  // cells[58].classList.add('wall')
  // cells[59].classList.add('wall')

  // Boundary walls
  cells[0].classList.add('wall')
  cells[1].classList.add('wall')
  cells[2].classList.add('wall')
  cells[3].classList.add('wall')
  cells[4].classList.add('wall')
  cells[5].classList.add('wall')
  cells[6].classList.add('wall')
  cells[7].classList.add('wall')
  cells[8].classList.add('wall')
  cells[9].classList.add('wall')
  cells[90].classList.add('wall')
  cells[91].classList.add('wall')
  cells[92].classList.add('wall')
  cells[93].classList.add('wall')
  cells[94].classList.add('wall')
  cells[95].classList.add('wall')
  cells[96].classList.add('wall')
  cells[97].classList.add('wall')
  cells[98].classList.add('wall')
  cells[99].classList.add('wall')
  cells[10].classList.add('wall')
  cells[20].classList.add('wall')
  cells[30].classList.add('wall')
  cells[40].classList.add('wall')
  cells[50].classList.add('wall')
  cells[60].classList.add('wall')
  cells[70].classList.add('wall')
  cells[80].classList.add('wall')
  cells[19].classList.add('wall')
  cells[29].classList.add('wall')
  cells[39].classList.add('wall')
  cells[49].classList.add('wall')
  cells[59].classList.add('wall')
  cells[69].classList.add('wall')
  cells[79].classList.add('wall')
  cells[89].classList.add('wall')

  // Center walls
  cells[22].classList.add('wall')
  cells[32].classList.add('wall')
  cells[27].classList.add('wall')
  cells[37].classList.add('wall')
  cells[15].classList.add('wall')
  cells[14].classList.add('wall')
  cells[56].classList.add('wall')
  cells[53].classList.add('wall')
  cells[61].classList.add('wall')
  cells[68].classList.add('wall')
  cells[84].classList.add('wall')
  cells[85].classList.add('wall')
  cells[3].classList.add('wall')
  cells[4].classList.add('wall')
  cells[5].classList.add('wall')

  // Food divs
  foodSpawn()
  addGodzilla(startingPosition)
  addEnemyOne(enemyOnePosition)
}

function foodSpawn() {
  cells[12].classList.add('food')
  cells[13].classList.add('food')
  cells[16].classList.add('food')
  cells[17].classList.add('food')
  cells[18].classList.add('food')
  cells[21].classList.add('food')
  cells[23].classList.add('food')
  cells[24].classList.add('food')
  cells[25].classList.add('food')
  cells[26].classList.add('food')
  cells[28].classList.add('food')
  cells[31].classList.add('food')
  cells[33].classList.add('food')
  cells[34].classList.add('food')
  cells[35].classList.add('food')
  cells[36].classList.add('food')
  cells[38].classList.add('food')
  cells[41].classList.add('food')
  cells[42].classList.add('food')
  cells[43].classList.add('food')
  cells[44].classList.add('food')
  cells[45].classList.add('food')
  cells[46].classList.add('food')
  cells[47].classList.add('food')
  cells[48].classList.add('food')
  cells[51].classList.add('food')
  cells[52].classList.add('food')
  cells[54].classList.add('food')
  cells[55].classList.add('food')
  cells[57].classList.add('food')
  cells[58].classList.add('food')
  cells[62].classList.add('food')
  cells[63].classList.add('food')
  cells[64].classList.add('food')
  cells[65].classList.add('food')
  cells[66].classList.add('food')
  cells[67].classList.add('food')
  cells[71].classList.add('food')
  cells[72].classList.add('food')
  cells[73].classList.add('food')
  cells[74].classList.add('food')
  cells[75].classList.add('food')
  cells[76].classList.add('food')
  cells[77].classList.add('food')
  cells[78].classList.add('food')
  cells[81].classList.add('food')
  cells[82].classList.add('food')
  cells[83].classList.add('food')
  cells[86].classList.add('food')
  cells[87].classList.add('food')
  cells[88].classList.add('food')
}

function enemyOneMovement() {

  let enemyDirection = 0
  const x = enemyOnePosition % width
  const y = Math.floor(enemyOnePosition / width)

  enemyDirection = Math.ceil(Math.random() * 4)

  setInterval(() => {
    if (x < width - 1 && wallCheck(enemyOnePosition + 1) && enemyDirection === 1) {
      removeEnemyOne(enemyOnePosition)
      enemyOnePosition++
      addEnemyOne(enemyOnePosition)
    } else if (x > 0 && wallCheck(enemyOnePosition - 1) && enemyDirection === 2) {
      removeEnemyOne(enemyOnePosition)
      enemyOnePosition--
      addEnemyOne(enemyOnePosition)
    } else if (y > 0 && wallCheck(enemyOnePosition - width) && enemyDirection === 3) {
      removeEnemyOne(enemyOnePosition)
      enemyOnePosition -= width
      addEnemyOne(enemyOnePosition)
    } else if (y < width - 1 && wallCheck(enemyOnePosition + width) && enemyDirection === 4) {
      removeEnemyOne(enemyOnePosition)
      enemyOnePosition += width
      addEnemyOne(enemyOnePosition)
    } else {
      enemyDirection = Math.ceil(Math.random() * 4)
      wallCheck(enemyOnePosition)
    }
  }, gameSpeed)
}

// function enemyBoundaryCheck(position) {
//   const x = position % width
//   const y = Math.floor(position / width)
//   if (x < 1) {
//     return cells[position].classList.add('boundary')
//   } else if (x > 0) {
//     return cells[position].classList.add('boundary')
//   } else if (y > 0) {
//     return cells[position].classList.add('boundary')
//   } else if (y < width - 1) {
//     return cells[position].classList.add('boundary')
//   }
// }



function wallCheck(position) {
  return !cells[position].classList.contains('wall')
}

function foodCheck(position) {
  return cells[position].classList.contains('food')
}

function foodPickUp(position) {
  if (foodCheck(godzillaPosition)) {
    cells[position].classList.remove('food')
    score += 100
    console.log(score)
    return score
  } 
}

function enemyCollisionCheck(position) {
  return cells[position].classList.contains('enemyOne')
}

function removePlayerLife() {
  if (enemyCollisionCheck(godzillaPosition)) {
    playerLives -= 1
    removeGodzilla(godzillaPosition)
    godzillaPosition = 11
    addGodzilla(godzillaPosition)
    // window.alert `Godzilla died. You scored ${score} points!`
    console.log(playerLives)
  } else if (playerLives === 0) {
    alert `Godzilla died. You scored ${score} points!`
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
  foodPickUp(godzillaPosition)
  removePlayerLife()
}


// * Events
createGrid(godzillaPosition)
enemyOneMovement()

document.addEventListener('keyup', handleKeyUp)
