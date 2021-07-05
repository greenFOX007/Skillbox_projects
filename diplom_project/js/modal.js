let lastFocus;
function modalShow () {
  lastFocus = document.activeElement;
}

function modalClose () {
  lastFocus.focus();
}

const notModal = document.querySelector('#not-a-modal');

document.querySelectorAll('.gallery__swiper-slide').forEach(item=>{
  item.addEventListener('click', function(e){
    e.preventDefault()
    let src = this.querySelector('.modal-img-gallery').getAttribute('src')
    let src2 = `url(../${src})`
    let modal = document.querySelector('#modal')
    modalShow()
    notModal.inert = true;
    modal.classList.add('active-modal')
    modal.querySelector('.modal-container-left-block').style.backgroundImage = src2
  })
})
document.querySelector('.close-modal-button').addEventListener('click', function(e){
    elNotModal = e.target
    document.querySelector('#modal').classList.remove('active-modal')
    notModal.inert = false;
    modalClose()
  })
    document.querySelector('#modal').addEventListener('click',function(e){
    elNotModal = e.target
    let modalWin = document.querySelector('.modal-window')
    if (elNotModal == document.querySelector('#modal')){
      document.querySelector('#modal').classList.remove('active-modal')
      notModal.inert = false;
      modalClose()
    }
  })
