const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

function marioJump(){
    mario.classList.add('jump')

    setTimeout(()=>{
        mario.classList.remove('jump')
    }, 500)
}


document.addEventListener('keydown', ()=>{
    marioJump()
})

const loop = setInterval(()=>{

    console.log('loop')

    const pipePosition = pipe.offsetLeft
    const marioPosition = Number(window.getComputedStyle(mario).bottom.replace('px', ''))
    
    if(pipePosition <= 120 && pipePosition > 0  && marioPosition < 101){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = 'images/game-over.png'
        mario.style.width = '7.5rem'
        mario.style.marginLeft = '5rem'

        clearInterval(loop)
    }

}, 10)
