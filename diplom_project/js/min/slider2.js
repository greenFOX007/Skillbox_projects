const slider=document.querySelector('.swiper3')
let mySwiper
function mediaSwiper(){if(window.innerWidth<768&&slider.dataset.mobile=='false'){mySwiper=new Swiper(slider,{slidesPerView:1,slideClass:'cards',spaceBetween:50,loop:!0,pagination:{el:'.swiper-pagination_events',type:'bullets',},})
slider.dataset.mobile='true'
mySwiper.init()}
if(window.innerWidth>=768){slider.dataset.mobile='false'
if(slider.classList.contains('swiper-container-initialized')){console.log('asd')
mySwiper.destroy()}}}
mediaSwiper()
window.addEventListener('resize',()=>{mediaSwiper()})