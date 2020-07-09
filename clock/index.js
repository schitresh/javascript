setInterval(setClock, 1000)

const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')

function setClock(){
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(second, secondsRatio)
  setRotation(minute, minutesRatio)
  setRotation(hour, hoursRatio)
}

function setRotation(element, rotationRatio){
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()