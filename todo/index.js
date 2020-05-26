const adder = document.querySelector('.adder-btn')
const typer = document.querySelector('.typer')
const items = document.querySelector('.items')
const clear = document.querySelector('.del-btn')

function createItem(text){
  let item = document.createElement('li')
  item.className = 'item'
  item.innerHTML = `
    <div class="item-name">${text}</div>
    <button class="btn item-btn item-done">Done</button>
    <button class="btn item-btn item-del danger">Delete</button>
  `
  return item
}

function addEventItem(item){
  done = item.querySelector('.item-done')
  del = item.querySelector('.item-del')

  done.addEventListener('click', () => {
    let item_name = item.querySelector('.item-name')
    let text = item_name.textContent
    item_name.innerHTML = `<s> ${text} </s>`
  })

  del.addEventListener('click', () => {
    item.remove()
  })
}

adder.addEventListener('click', () => {
  let text = typer.value
  if(text === '') return alert('empty text')

  let item = createItem(text)
  items.appendChild(item)
  typer.value = ''

  addEventItem(item)
})

clear.addEventListener('click', () => {
  items.innerHTML = ''
})