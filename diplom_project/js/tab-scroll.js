let button = document.querySelectorAll('.artist-list__button')
let artists = document.querySelectorAll('.catalog__tab-content_artist')

    artists.forEach((item,index)=>{
      if (window.innerWidth <=1024){
        item.id = 'artist' + (index+1)
      }
      else if (window.innerWidth >1024){
        item.removeAttribute('id')
      }
     })

button.forEach((item, index)=>{
  item.addEventListener('click', function(){
    if (window.innerWidth<=1024){
      setTimeout(()=>{let x = artists[index].offsetTop - 140
    scrollTo(0, x)},200)
    }
  })
})
