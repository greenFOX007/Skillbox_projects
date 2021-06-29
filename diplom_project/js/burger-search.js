document.querySelector('.burger-btn').addEventListener('click', function(event) {
  document.querySelectorAll('.burger-elem').forEach(function(burgAnim) {
    burgAnim.classList.remove('burger-elem2-hov');
    burgAnim.classList.remove('burger-elem3-hov');
    burgAnim.classList.toggle('open-menu');
  });
  document.querySelector('.burger-container').classList.toggle('burger-container-open');
  })
  let link = document.querySelectorAll('.burger__navigation__link')
for (let i=0;i<link.length;i++){
  link[i].addEventListener('click', function(){
    document.querySelector('.burger-container').classList.remove('burger-container-open');
})
}

document.querySelector('.btn-search-open').addEventListener('click',function(){
  document.querySelector('.searc-container-mobile').classList.add('searc-container-mobile-open');
  document.querySelector('.search-form-mobile').classList.toggle('search-form-mobile-open')
  document.querySelector('.btn-search-open').classList.add('btn-search-open-none')
})
document.querySelector('.close-search').addEventListener('click', function () {
  document.querySelector('.searc-container-mobile').classList.remove('searc-container-mobile-open');
})
