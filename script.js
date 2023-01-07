let color = 'black'
let click = false

document.addEventListener('DOMContentLoaded', function () {
    createSketch(16)

    document.querySelector('body').addEventListener('click', function (e) {
        if (e.target.tagName != 'BUTTON') {
            click = !click
            let draw = document.querySelector('#draw')
            if (click) {
                draw.innerHTML = 'Draw!!!'
            } else {
                draw.innerHTML = 'Cannot sketch!!!'
            }
        }
    })

    let popBTN = document.querySelector('#popup')
    popBTN.addEventListener('click', function () {
        let size = adjustSize()
        createSketch(size)
    })
})

function createSketch(size) {
    let board = document.querySelector('.divcontainer')

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRow = `repeat(${size}, 1fr)`

    let divNum = size * size
    for (i = 0; i < divNum; i++) {
        let div = document.createElement('div')
        div.addEventListener('mouseover', colorDiv)
        board.insertAdjacentElement('beforeend', div)
    }
}

function adjustSize() {
    let choice = prompt('Select your size of sketch')
    let message = document.querySelector('#message')
    if (choice === '') {
        message.innerHTML = 'Provide a number to play'
    } else if (choice < 0 || choice > 100) {
        message.innerHTML = 'Select a number from 1 - 100'
    } else {
        message.innerHTML = 'Let us play!!'
        return choice
    }
}

function colorDiv() {
    if (click) {
        if (color == 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        } else {
            this.style.backgroundColor = 'black'
        }
    }
}

function setColour(colourSelect) {
    color = colourSelect
}

function resetSketch() {
    let divs = document.querySelectorAll('div')
    divs.forEach((div) => div.style.backgroundColor = 'white')
}