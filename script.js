const btnPvp = document.querySelector('.pvp')
const btnReset = document.querySelector('.back')
const game = document.querySelector('.button2')
const btnGamePvp = document.querySelector('.back')
const pvp = document.querySelector('.button1')
const resalut = document.querySelector('.resalut')
const fight = document.querySelector('.fight')
const resalutOne = document.querySelector('.resalut1')
const resalutTwo = document.querySelector('.resalut2')
const iconShow = document.querySelectorAll('.pvp-game i')
const playerFirstChoosen = document.querySelectorAll('.player1 button')
const playerSecondChoosen = document.querySelectorAll('.player2 button')
const header = document.querySelector('.header')
const btns = document.querySelector('.button')

let player2
let player1
let winPlayerOne = 0
let winPlayerTwo = 0

//Adding Classes
const startGamePvp = () => {
  btnReset.classList.remove('hidden')
  game.classList.add('hidden')
  pvp.classList.remove('hidden')
  resalut.classList.remove('hidden')
  fight.classList.remove('hidden')
  header.innerHTML = `Rock <i class="fa-solid fa-hand-back-fist"></i> Paper <i class="fa-solid fa-hand"></i> Scissor <i class="fa-solid fa-hand-scissors fa-flip-horizontal"></i>`
  timer(3)
}

const resetGame = () => {
  location.reload()
}

const playerChoose = e => {
  let player = e.target.className.slice(0, 1) || e.key

  if (player == 'a' || player == 's' || player == 'd') {
    player1 = player
    choosenAddOne()
  }
  if (player == 'j' || player == 'k' || player == 'l') {
    player2 = player
    choosenAddTwo()
  }
  whichPlayerWin(player1, player2)
}

const zeroPlayer = () => {
  player1 = ''
  player2 = ''
  timer(3)
}
const ChangeColor = e => {
  if (e === undefined) {
    iconShow.forEach(iconFirst => (iconFirst.style.color = '#000'))
  }

  fight.style.color = '#000'
  playerFirstChoosen.forEach(player1 => {
    if (e === player1.className.slice(0, 1)) {
      iconShow.forEach(iconFirst => {
        if (e === iconFirst.id) {
          iconFirst.style.color = '#006400'
        } else {
          iconFirst.style.color = '#BA0021'
        }
      })
    }
  })
  playerSecondChoosen.forEach(player2 => {
    if (e === player2.className.slice(0, 1)) {
      iconShow.forEach(iconFirst => {
        if (e === iconFirst.id) {
          iconFirst.style.color = '#006400'
        } else {
          iconFirst.style.color = '#BA0021'
        }
      })
    }
  })
}

const whichPlayerWin = (player1, player2) => {
  if (
    (player1 == 'a' && player2 == 'j') ||
    (player1 == 's' && player2 == 'k') ||
    (player1 === 'd' && player2 == 'l')
  ) {
    ChangeColor()
    fight.textContent = `Draw`

    setTimeout(() => {
      zeroPlayer()
    }, 1500)

    clear(player1, player2)
  }
  if (
    (player1 == 'a' && player2 == 'k') ||
    (player1 == 's' && player2 == 'l') ||
    (player1 == 'd' && player2 == 'j')
  ) {
    resalutTwo.textContent = `${winPlayerTwo++ + 1}`
    fight.textContent = `Player Second Win`
    ChangeColor(player2)
    setTimeout(() => {
      zeroPlayer()
    }, 1500)
    clear(player1, player2)
  } else if (
    (player1 == 'a' && player2 == 'l') ||
    (player1 == 's' && player2 == 'j') ||
    (player1 == 'd' && player2 == 'k')
  ) {
    fight.textContent = `Player First Win`
    resalutOne.textContent = `${winPlayerOne++ + 1}`
    ChangeColor(player1)
    setTimeout(() => {
      zeroPlayer()
    }, 1500)
    clear(player1, player2)
  }
}

const timer = e => {
  if (e === 3) {setTimeout(() =>{if (winPlayerOne === 3) {
      header.innerHTML = `Player First Win`
      header.style.color = '#006400'
      fight.textContent = 'Reset The Game'
      btns.classList.add('hidden')
    } else if (winPlayerTwo === 3) {
      header.innerHTML = `Player Second Win`
      header.style.color = '#006400'
      fight.textContent = 'Reset The Game'
      btns.classList.add('hidden')
    } else {
      const interval = setInterval(timeDown, 1000)
      function timeDown () {
        if (e === -1) {
          fight.textContent = 'Fight'
          fight.style.color = '#006400'
          document.addEventListener('keypress', playerChoose)
          document.addEventListener('click', playerChoose)
          clearInterval(interval)
        }
        if (e > -1) {
          fight.textContent = `${e--}`
          fight.style.color = '#BA0021'
        }
      }
    }},1000)
    
  }
}

const clear = () => {
  whichKeyClicked(player1, player2)
  choosenRemove()
  document.removeEventListener('keypress', playerChoose)
  document.removeEventListener('click', playerChoose)
}

//showing which icon
const whichKeyClicked = (player1, player2) => {
  iconShow.forEach(iconFirst => {
    if (iconFirst.id === player1) {
      iconFirst.classList.remove('hidden')
      iconFirst.classList.add('first-player')
      setTimeout(() => {
        iconFirst.classList.add('hidden')
        iconFirst.classList.remove('first-player')
      }, 2500)
    }
  })
  iconShow.forEach(iconSecond => {
    if (iconSecond.id === player2) {
      iconSecond.classList.remove('hidden')
      iconSecond.classList.add('second-player')
      setTimeout(() => {
        iconSecond.classList.add('hidden')
        iconSecond.classList.remove('second-player')
      }, 2500)
    }
  })
}
//add and remove class button hover
const choosenRemove = () => {
  setTimeout(() => {
    playerFirstChoosen.forEach(player1 => {
      player1.classList.remove('choosen')
    })
    playerSecondChoosen.forEach(player2 => {
      player2.classList.remove('choosen')
    })
  }, 1000)
}

const choosenAddOne = () => {
  playerFirstChoosen.forEach(player1 => {
    player1.classList.add('choosen')
  })
}
const choosenAddTwo = () => {
  playerSecondChoosen.forEach(player2 => {
    player2.classList.add('choosen')
  })
}

btnPvp.addEventListener('click', startGamePvp)
btnGamePvp.addEventListener('click', resetGame)
