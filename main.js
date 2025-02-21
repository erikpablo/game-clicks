let button = document.querySelector('button')
let buttonReset = document.querySelector('.buttons :nth-child(2)')
let clicksElement = document.querySelector('.levels h1 span')
let clicks = Number(clicksElement.textContent)


let levels = document.querySelector('.levels p')
levels.textContent = "Level 1"

let secondsElement = document.querySelector('.seconds')
let isCounting = false
let seconds = 0

let totalTime = document.querySelector('.next-level-content span')

let startNextLevel = document.querySelector('.startNextLevel')
let app2 = document.querySelector('.app2')

let victory = document.getElementById('victory')

button.addEventListener('click', () => {
  switch (levels.textContent) {
    case "Level 1":
        clicks++
        if(clicks == 30) {
          levels.textContent = "Level 2"
          clicks = 0
          app2.classList.toggle('close')  
          totalTime.textContent = seconds
        }
        break;
    case "Level 2":
        clicks++
        if(clicks == 60) {
          levels.textContent = "Level 3"
          clicks = 0
          app2.classList.toggle('close')  
          totalTime.textContent = seconds
        }
        break;
    case "Level 3":
        clicks++
        if(clicks == 120) {
          levels.textContent = "Level 4"
          clicks = 0
          app2.classList.toggle('close')  
          totalTime.textContent = seconds
        }
        break;
    case "Level 4":
        clicks++
        if(clicks == 240) {
          levels.textContent = "Level 1"
          clicks = 0
          app2.classList.toggle('close')  
          totalTime.textContent = seconds
          startNextLevel.textContent = "✨ Vamos novamente? ✨"
          victory.textContent = 'Você concluiu o jogo com maestria! Sua dedicação, habilidade e rapidez nos cliques fizeram toda a diferença. 👏💪'
        }
        break;
    default:
}
  clicksElement.textContent = clicks

  if (!isCounting) {
    isCounting = true
    countdown()
  }
})

function countdown() {
    if(clicks == 240) {
        return;
    }
    if(!isCounting)  {
      isCounting == false
      return
    }
    seconds++

    secondsElement.textContent = seconds

    setTimeout(() => countdown(), 1000)
}

startNextLevel.addEventListener('click', () => {
  app2.classList.toggle('close')
  secondsElement.textContent = 0
  clicksElement.textContent = 0
  seconds = 0

  isCounting = false

  if(clicks == 24) {
    reset()
  }
})


buttonReset.addEventListener('click', reset)

function reset() {
  levels.textContent = "Level 1"
  clicksElement.textContent = 0
  secondsElement.textContent = 0
  isCounting = false
  clicks = 0
  seconds = 0
}