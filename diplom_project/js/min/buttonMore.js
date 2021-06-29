const buttonMore=document.querySelector('.collapse-btn')
const cards=document.querySelectorAll('.events__cards')
function invis(){for(let i=3;i<cards.length;i++){cards[i].classList.add('invisible-cards')}}
invis()
buttonMore.addEventListener('click',function(){for(let i of cards){i.classList.remove('invisible-cards')
buttonMore.classList.add('delete-btn')}})
function media(){let width=window.innerWidth
if(width<1024&&width>=768){cards[2].classList.add('invisible-cards')}else{cards[2].classList.remove('invisible-cards')}
if(width<768){buttonMore.classList.add('delete-btn')
for(i=0;i<cards.length;i++){cards[i].classList.remove('invisible-cards')}}else if(width>=768){buttonMore.classList.remove('delete-btn')
for(i=3;i<cards.length;i++){cards[i].classList.add('invisible-cards')}}}
media()
window.addEventListener('resize',()=>{media()})