function mover(elem, inicio, fim, passo, callback){
    const proxPosicao = inicio - passo
    if(proxPosicao >= fim){
        elem.style.left = proxPosicao + 'px'
        setTimeout(() => mover(elem, proxPosicao, fim, passo, callback), 7)
    } else {
        callback()
    }
}

// const elem = document.querySelector('[wm-slider] > p')
// elem.style.display = 'block'
// mover(elem, 1500, -520, 5, () => console.log('Terminou!!!'))

function slider() {
    const elem = document.querySelectorAll('[wm-slider] > p')
    const slides = Array.from(elem)
    exibirSlide(slides, slides[0])
}

function exibirSlide(slides, atual) {
    atual.style.display = 'block'
    const inicio = innerWidth
    const fim = -atual.clientWidth
    atual.style.left = `${inicio}px`

    mover(atual, inicio, fim, 5, () => {
        atual.style.display = 'none'
        exibirSlide(slides, proximoSlide(slides, atual))
    })
}

function proximoSlide(slides, atual){
    const i = slides.indexOf(atual) + 1
    return i < slides.length ? slides[i] : slides[0] 
}

slider()