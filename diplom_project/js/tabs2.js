document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.artist-list__button').forEach(function(tabsBtnArtist) {
    tabsBtnArtist.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__tab-content_artist').forEach(function(tabContentArtist) {
        tabContentArtist.classList.remove('catalog__tab-content_artist-is-active')
      })
      document.querySelectorAll('.artist-list__button').forEach(function(tabContentArtist1) {
        tabContentArtist1.classList.remove('artist-list__button-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__tab-content_artist-is-active')
      document.querySelector(`[data-path="${path}"]`).classList.add('artist-list__button-active')

    })
  })


})
