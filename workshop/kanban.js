const attachCard = (card) => {
  const swimlanes = document.querySelectorAll('.swimlane')
  const randomSwimlane = Math.floor(Math.random() * swimlanes.length)

  swimlanes[randomSwimlane].appendChild(card)
}

const createCard = (index) => {
  const cardElement = document.createElement('div')
  cardElement.className = 'card'
  cardElement.innerText = `Card #${index}`
  cardElement.draggable = 'true'

  cardElement.addEventListener('dragstart', (e) => {
    e.target.id = 'dragged'
  })

  cardElement.addEventListener('dragend', (e) => {
    e.target.id = undefined
  })

  attachCard(cardElement)
}

const addEventListenersToSwimlances = () => {
  const swimlanes = document.querySelectorAll('.swimlane')
  for (let i = 0; i < swimlanes.length; i++) {
    swimlanes[i].addEventListener('dragover', (e) => {
      e.preventDefault()
    })

    swimlanes[i].addEventListener('drop', (e)=>{
      e.preventDefault()
      
      const draggedCard = document.querySelector('#dragged');
      draggedCard.parentNode.removeChild(draggedCard);
      e.currentTarget.appendChild(draggedCard);
    })
  }
}

const createCards = (amount) => {
  for (let i = 0; i <= amount; i++) {
    createCard(i)
  }
}

createCards(10)
addEventListenersToSwimlances()