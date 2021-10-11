# Godzilla is Hungry
SEI Project One

# Overview
I decided to base my project on the classic 80s arcade game ‘PacMan’. The original game requires the player to move around a maze collecting items while they are chased by four enemy ghosts. To clear a level the player must collect every item in the maze without dying to score points. I felt this would give me a great opportunity to experiment with player and enemy movement via control flow and DOM manipulation.

My interpretation of the classic maze game pays homage to the era and my love for Japanese cinema by using sprites ripped from an MSX game entitled ‘Godzilla vs Three Giant Monsters’ (ゴジラ対３大怪獣) which was a Japan-only release.

![godzilla-is-hungry](https://user-images.githubusercontent.com/71222270/136860982-249b3772-cf0a-43b4-b64c-38d50dd675ff.png)

# Brief
For our first project we were tasked with creating a browser-based HTML5 game of our choice using Vanilla JavaScript and CSS. The timeframe for this project was approximately seven days and it was created entirely solo.

# Link
https://jguppy92.github.io/sei-project-one/

# Instructions
* W - Move Up
* A - Move Left
* S - Move Down
* D - Move Right
* M - Toggle Audio

# Technologies Used
* HTML5
* CSS3
* JavaScript
* Git / GitHub

# Process
Despite being extremely familiar with PacMan (and maze games in general), my first steps towards production were to sketch out a basic game grid and a list of all the game’s functionalities. These were then ranked by their importance to core gameplay required for an MVP to ensure I met the deadline with a working product.

My first steps were to create the gameplay grid. This was done by first setting the width to 10 and then multiplying this by itself to get the desired number of squares. Then using a for-loop, I created and appended div elements in the grid DOM element.
```
  function createGrid(startingPosition) {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    // cell.textContent = i
    grid.appendChild(cell)
    cells.push(cell)
  }
```
To create the walls in and around the playing area, I added a ‘wall’ value to the chosen square’s class list and then did the same for Godzilla’s starting position. Keydown event listeners were used to enable player movement and control flow to prevent the user moving into wall spaces.

Enemy movement follows the same logic however the movement needed to be automated. To do this I implemented a system in which the numbers 1 - 4 represent a specific direction. Using control flow and logic checks, a new random number is chosen every time the space the enemy attempts to move in has the ‘wall’ class.

To experiment with enemy speed I wrapped the enemy movement code in an interval using a ‘game speed’ variable to alter the interval rate depending on the level.
```
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
```
When the player moves into a square with the ‘food’ class, it removes the class and adds points to the player score. Likewise, if an enemy occupies the square then the player loses a life and godzilla’s position is reset to the start.

The player can progress to level two upon collecting all the food in the first level, this works via control flow judging if the ‘remaining food’ variable has hit zero and the level two boolean is false. If so, level two is spawned with an extra enemy and increases in difficulty. Otherwise, the player receives the ‘game complete’ message.
```
function startLevelTwo() {
 if (remainingFood === 0 && !levelTwoExecuted) {
   levelTwoExecuted = true
   alert `Godzilla ate all the food, get ready for dessert!`
   levelTwoFoodSpawn()
   gameSpeed = 200
   remainingFood = 51
   removeGodzilla(godzillaPosition)
   godzillaPosition = 11
   addGodzilla(godzillaPosition)
   removeEnemyOne(enemyOnePosition)
   enemyOnePosition = 88
   addEnemyOne(enemyOnePosition)
   addEnemyTwo(enemyTwoPosition)
   enemyTwoMovement()
 } else if (remainingFood === 0 && levelTwoExecuted) {
   alert `Godzilla is full up. You win!`
   location.reload()
 }
}
```
Finally, the game’s audio was implemented with an event listener on the ‘M’ key and control flow. If the audio is currently playing the ‘M’ key will remove the audio source and vice versa, allowing the player to toggle the audio on and off.

# Known Bugs
* If the enemy is the one moving into Godzilla’s square, rather than the other way round, then this doesn’t currently activate the ‘enemy collision check’ function. Therefore it does not remove a player life or reset the player’s position.
* Some issues with the CSS styling on the page i.e. the game grid may cover up the score and lives counters on a smaller screen.

# Wins
* Successfully implementing a second level with an increase in difficulty was something I was very pleased with as it was initially a bit of a stretch goal that I didn’t think I would be able to achieve.
* This was my first full project just a couple weeks into my studies so being put out of my comfort zone was something I benefited from greatly and massively improved my confidence going forward.

# Challenges
* Initially the game area was not surrounded by walls, instead I planned on the player and enemy characters to not move beyond the defined grid boundary. Unfortunately I could not get the logic for this to work and they would jump from the square at the edge of the grid to the next one in the array.
* Getting the enemies to move with some semblance of ‘thought’ was very difficult at first and they were extremely erratic which was not good for player experience. This was eventually remedied but I’m still not 100% happy with how they move.

# Future Improvements
* I would love to implement more levels as the player progresses, adding more enemies and difficulty and also new game grid layouts.
* A high score leaderboard would also be a good feature to add for user experience and gameplay. 
* The audio toggle would work better as a pause button as it currently restarts the track from the beginning.
* Volume slider.
* Animated character sprites as the player moves across the grid.
* Improved enemy movement with each enemy having different behaviours.
* Tidier, refactored code.

# Key Learnings
As my first project during my intensive software engineering course I feel the biggest learning I gained from this was confidence in my ability and getting to grips with how to develop a project from an initial idea to final deliverable. Overall it was a really fun project to work on. As someone who has always had an interest in video game design and development it was a great opportunity to take some early steps into this.
