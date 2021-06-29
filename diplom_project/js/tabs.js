document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.countries-list__button').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__tab-content_accordion').forEach(function(tabContent) {
        tabContent.classList.remove('catalog__tab-content_accordion-is-active')
      })
      document.querySelectorAll('.countries-list__button').forEach(function(tabContent2) {
        tabContent2.classList.remove('countries-list__button-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__tab-content_accordion-is-active')
      document.querySelector(`[data-path="${path}"]`).classList.add('countries-list__button-active')
    })

  })
})



