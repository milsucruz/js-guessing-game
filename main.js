const randomNumber = Math.round(Math.random() * 10)
console.log(randomNumber)
let xAttempts = 1

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

function handleTryClick (event) {
  event.preventDefault()

  const result = document.querySelector("#result")

  if (Number(result.value) == randomNumber) {
    screen1.classList.add('hide')
    screen2.classList.remove('hide')

    document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas!`
  }
  
  result.value = ""
  xAttempts++  
}

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function() {
  screen1.classList.remove('hide')
  screen2.classList.add('hide')

  xAttempts = 1
})
