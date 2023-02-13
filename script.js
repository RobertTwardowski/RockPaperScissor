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

let player2
let player1
let winPlayerOne = 1
let winPlayerTwo = 1

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

const playerChose = e => {
  let player = e.target.className || e.key

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

const whichPlayerWin = (player1, player2) => {
  if (
    (player1 == 'a' && player2 == 'j') ||
    (player1 == 's' && player2 == 'k') ||
    (player1 === 'd' && player2 == 'l')
  ) {
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
    resalutTwo.textContent = `${winPlayerTwo++}`
    fight.textContent = `Player Second Win`
    setTimeout(() => {
      zeroPlayer()
    }, 1500)
    clear(player1, player2)
  } else if (
    (player1 == 'a' && player2 == 'l') ||
    (player1 == 's' && player2 == 'j') ||
    (player1 == 'd' && player2 == 'k')
  ) {
    resalutOne.textContent = `${winPlayerOne++}`
    fight.textContent = `Player First Win`
    setTimeout(() => {
      zeroPlayer()
    }, 1500)
    clear(player1, player2)
  }
}

const timer = e => {
  if (e === 3) {
    const interval = setInterval(timeDown, 1000)
    function timeDown () {
      if (e === -1) {
        fight.textContent = 'Fight'
        document.addEventListener('keypress', playerChose)
        document.addEventListener('click', playerChose)
        clearInterval(interval)
      }
      if (e > -1) {
        fight.textContent = `${e--}`
      }
    }
  }
}

const clear = () => {
  whichKeyClicked(player1, player2)
  choosenRemove()
  document.removeEventListener('keypress', playerChose)
  document.removeEventListener('click', playerChose)
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
