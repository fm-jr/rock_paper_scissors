const selectionButtons = document.querySelectorAll('[data-selection]')
const SELECTIONS = [
    {
        name: 'rock' ,
        img.src = 'rock.jpg'
        beats: 'scissors'
    },
    {
        name: 'paper' ,
        img.src = 'paper.jpg'
        beats: 'rock'
    },
    {
        name: 'scissors' ,
        img.src = 'scissors.jpg'
        beats: 'paper'
    }
]


selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        makeSelection(selectionName)
    })
})

function makeSelection(selection) {
    console.log(selection)
}