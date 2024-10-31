let newX = 0, newY = 0, startX = 0, startY = 0;

const addCard = document.getElementById('addCard')
const container = document.getElementById('container')

addCard.addEventListener('click', createCard)


function createCard(){
    const card = document.createElement('div')
    card.classList.add('card')
    card.style.position = 'absolute'

    const textarea = document.createElement('textarea')
    textarea.classList.add('note-textarea')
    textarea.placeholder = 'Kirjoita muistiinpano'
    textarea.spellcheck = false

    textarea.addEventListener('input', autoResize)

    function autoResize() {
        textarea.style.height = 'auto'
        textarea.style.height = textarea.scrollHeight + 'px'
        card.style.height = textarea.scrollHeight + 20 + 'px' 
    }

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-button')
    deleteButton.textContent = 'X'

    deleteButton.addEventListener('click', () => {
        card.remove()
    })

    card.appendChild(deleteButton)
    card.appendChild(textarea)

    container.appendChild(card)

    card.addEventListener('mousedown', mouseDown)

    function mouseDown(e) {
        startX = e.clientX
        startY = e.clientY

        document.addEventListener('mousemove', mouseMove)
        document.addEventListener('mouseup', mouseUp)
    }

    function mouseMove(e) {
        newX = startX - e.clientX
        newY = startY - e.clientY

        startX = e.clientX
        startY = e.clientY

        card.style.top = (card.offsetTop - newY) + 'px'
        card.style.left = (card.offsetLeft - newX) + 'px'
    }

    function mouseUp(e) {
        document.removeEventListener('mousemove', mouseMove)
    }
}

