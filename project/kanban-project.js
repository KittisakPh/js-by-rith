const addListenSwimlane = () => {
  const swimlanes = document.querySelectorAll('.swimlane');
  for(let i = 0 ; i < swimlanes.length; i++){
    swimlanes[i].addEventListener('dragover', (e)=>{
      e.preventDefault();

    })

    swimlanes[i].addEventListener('drop', (e)=>{
      e.preventDefault();
      const dragged = document.querySelector('#dragged');
      dragged.parentNode.removeChild(dragged);
      
      e.target.appendChild(dragged)
    })
  }
}

const attachSwimlane = (card) => {
  const swimlanes = document.querySelectorAll('.swimlane');
  let i = Math.floor(Math.random() * swimlanes.length);
  swimlanes[i].appendChild(card);
}

const createCard = (index) => {
  const cardElement = document.createElement('div');
  cardElement.className = 'card';
  cardElement.innerText = `Card #${index}`;
  cardElement.draggable = 'true';

  cardElement.addEventListener('dragstart', (e)=>{
    e.target.id = 'dragged';
  })
  cardElement.addEventListener('dragend', (e)=>{
    e.target.id = undefined;
  })

  attachSwimlane(cardElement)
}

const createCards = (amount) => {
  for (let i = 0; i < amount; i++) {
    createCard(i)
  }
}

createCards(10)
addListenSwimlane()