const startBtn = document.querySelector('.btn-start')
const sketchCont = document.getElementById('container')
let divs = document.querySelectorAll('div')

startBtn.addEventListener('click', startSketch)

function startSketch() {
    for (i = 0; i < 16; i++) {
        const newDiv = document.createElement('div')
        newDiv.classList.add('sketchDiv')
        sketchCont.appendChild(newDiv)
    }

}

