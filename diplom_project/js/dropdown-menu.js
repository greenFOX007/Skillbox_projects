let el1 = document.querySelectorAll('.navigation-dropdown__btn');
  let el2 = document.querySelectorAll('.dropdown__child');
  var el3 = document.querySelector('.body');

  el3.addEventListener('click', function(e)
{

  var has_navigation_dropdown_btn = 0

  for(i = 0; i < e.target.classList.length; i++)
  {
    if (e.target.classList[i] === "navigation-dropdown__btn")
    {
      has_navigation_dropdown_btn = 1
      break;
    }
  }
  if (has_navigation_dropdown_btn == 0)
    {
      for(j = 0; j < el2.length; j++)
      {
        el2[j].classList.remove('dropdown__child_open')
      }
    }
})

  for (let i = 0; i < el.length; i++)
  {
      el1[i].addEventListener('click', function(e){
        const id = e.target.dataset.path;
        for(i = 0; i < el2.length; i++)
        {
          if (el2[i].dataset.path == id)
          {
            el2[i].classList.toggle('dropdown__child_open');
            el1[i].classList.toggle('open');

          }
          else
          {
            el2[i].classList.remove('dropdown__child_open');
            el1[i].classList.remove('open');
          }
        }
      })

      el3.addEventListener('click', function (e){
        const r = e.target.classList
        for (i = 0; i < el1.length; i++){
        if (el1[i].classList !== r){
          el1[i].classList.remove('open')
        }}
      })
  }
