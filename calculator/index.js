class Cal{
  constructor(previous, current){
    this.previous = previous
    this.current = current
    this.currentOperand = ''
    this.previousOperand = ''
    this.clear
  }

  clear(){
    this.currentOperand = ''
    this.previousOperand = ''
    this.operand = undefined
  }

  delete(){
    this.currentOperand = this.currentOperand.toString().slice(0,-1)
  }
  
  append(number){
    if(number === '.' && this.currentOperand.includes('.')) return
    // if(typeof currentOperand === 'undefined') this.currentOperand = ''
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  operation(operand){
    if(this.currentOperand === '') return
    if(this.previousOperand !== ''){
      this.compute()
    }
    this.operate = operand
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  compute(){
    let computation
    const prev = parseFloat(this.previousOperand)
    const curr = parseFloat(this.currentOperand)
    if(isNaN(prev) || isNaN(curr)) return
    switch (this.operate) {
      case '+':
        computation = prev + curr
        break
      case '-':
        computation = prev - curr
        break
      case '*':
        computation = prev * curr
        break
      case '/':
        computation = prev / curr
        break
      default:
        return
    }

    this.previousOperand = `${this.previousOperand} ${this.operate} ${this.currentOperand}`
    this.currentOperand = computation
    this.operate = undefined
  }

  getNumber(number){
    const stringn = number.toString()
    const integer = parseInt(number)
    const decimal = stringn.split('.')[1]
    let integerDisplay = ''
    if(!isNaN(integer)){
      integerDisplay = integer.toLocaleString('en')
    }
    if(decimal != null){
      return `${integerDisplay}.${decimal}`
    }
    return integerDisplay
  }

  updateDisplay(){
    this.current.innerText = this.getNumber(this.currentOperand)
    if(this.operate !=null){
      this.previous.innerText = `${this.previousOperand} ${this.operate}`
    }
    else this.previous.innerText = this.previousOperand
  }
}

const numbers = document.querySelectorAll('[number]')
const operations = document.querySelectorAll('[operation')
const equals = document.querySelector('[equals]')
const del = document.querySelector('[del]')
const allClear = document.querySelector('[all-clear')
const previous = document.querySelector('.previous')
const current = document.querySelector('.current')

const cal = new Cal(previous, current)

numbers.forEach(button => {
  button.addEventListener('click', () => {
    cal.append(button.innerText)
    cal.updateDisplay()
  })
})

operations.forEach(button => {
  button.addEventListener('click', () => {
    cal.operation(button.innerText)
    cal.updateDisplay()
  })
})

equals.addEventListener('click', button => {
  cal.compute()
  cal.updateDisplay()
})

allClear.addEventListener('click', button => {
  cal.clear()
  cal.updateDisplay()
})

del.addEventListener('click', button => {
  cal.delete()
  cal.updateDisplay()
})