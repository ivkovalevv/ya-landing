document.addEventListener('DOMContentLoaded', function(){
    let offset = 0;
    const sliderWrapper = document.querySelector('.section-exclusive__wrapper');
    const sliderTrack = document.querySelector('.section-exclusive__list');
    let sliderWidth = sliderWrapper.clientWidth + 2;

    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    btnPrev.disabled = true

    btnNext.addEventListener('click', function() {
        btnPrev.disabled = false
        offset += sliderWidth
        if (offset >= sliderWidth * 3) {
            btnNext.disabled = true
        }
        sliderTrack.style.left = -offset -10 + 'px';
    })

    btnPrev.addEventListener('click', function() {
        btnNext.disabled = false
        offset -= sliderWidth
        if (offset <= 0) {
            btnPrev.disabled = true
        }
        sliderTrack.style.left = -offset - 10 + 'px';
    })
})