const arrayImg = document.querySelectorAll('[wm-slider] > p')

arrayImg.forEach((e) => {
    e.style.display = 'block'
    let left = 0
    let id = setInterval(frame, 17);
    function frame() {
        if (left == screen.availWidth) {
            e.style.display = 'none'
            clearInterval(id)
        } else {
            left++
            e.style.left = left + 'px'
        }
    }
})