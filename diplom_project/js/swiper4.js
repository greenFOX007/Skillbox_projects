
const slider4 = document.querySelector('.swiper4')
let mySwiper4
function mediaSwiper2() {
  if (window.innerWidth >= 768 && slider4.dataset.mobile == 'false'){
     mySwiper4 = new Swiper(slider4, {

      slidesPerView: 3,
      spaceBetween: 53,
      direction: 'horizontal',
      slidesPerGroup: 3,
      pagination: {
        el: '.swiper-pagination2',
        type: 'fraction',
      },
      loop: false,
      disabledClass: 'swiper-button-disabled',
      navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
      },
      breakpoints: {
            150: {
               slidesPerView:1,

              slidesPerGroup: 1,
             },
            768: {
              slidesPerView:2,
             spaceBetween: -17,
             slidesPerGroup: 2,
            },
            1024: {
              slidesPerView:2,
             spaceBetween: 46,
             slidesPerGroup: 2,
            },
            1300: {
              slidesPerView:2,

             spaceBetween: 10,
             slidesPerGroup: 2,
            },
            1700: {
              slidesPerView:3,
             spaceBetween: 50,
             slidesPerGroup: 3,
            },
            1920: {
              slidesPerView:3,

             spaceBetween: 50,
             slidesPerGroup: 3,
            }
          }
      });
      slider.dataset.mobile = 'true'

  }
  if (window.innerWidth < 768){
    slider.dataset.mobile = 'false'
    if(slider4.classList.contains('swiper-container-initialized')){
      mySwiper4.destroy()
    }
  }

}
mediaSwiper2()
window.addEventListener('resize', () => {
  mediaSwiper2()

})


