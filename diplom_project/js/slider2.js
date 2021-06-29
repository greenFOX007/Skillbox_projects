
const slider = document.querySelector('.swiper3')
let mySwiper
  function mediaSwiper(){
    if (window.innerWidth < 768 && slider.dataset.mobile == 'false'){

       mySwiper = new Swiper(slider, {
        slidesPerView: 1,
        slideClass: 'cards',
        spaceBetween: 50,
        loop: true,
        disabledClass: 'swiper-button-disabled',
        pagination: {
          el: '.swiper-pagination_events',
          type: 'bullets',
          clickable: true,
        },
      })
      slider.dataset.mobile = 'true'
    }
    if (window.innerWidth >= 768){
      slider.dataset.mobile = 'false'
      if(slider.classList.contains('swiper-container-initialized')){
        mySwiper.destroy()
      }

    }
  }
  mediaSwiper()
window.addEventListener('resize', () => {mediaSwiper()})






