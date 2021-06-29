( function () {
  let itemAray = [1,2,3,4,5,6,7,8];
  let duplicateArray = (arr) => [...arr, ...arr];
  let newArray = duplicateArray(itemAray);
  let cards = document.querySelectorAll('.game-card');
  const cardCont = document.querySelector('.game-container')
  let subArr = []
  let openCards = []

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const newShuffleArr = shuffle(newArray);

  function disableTrue () {
    for (let i of cards ){
      for (let j of openCards){
        if (i.dataset.path == j){
          i.disabled = true
        }
      }
    }
  }

(function(){
  for (let i = 0; i<newShuffleArr.length; i++){
    cards[i].id = i
    cards[i].textContent = newShuffleArr[i];
    cards[i].dataset.path = newShuffleArr[i]
  }
}) ()

let click = []

  cardCont.addEventListener('click', function (e){
    let el = e.target
    if (el !== cardCont){
      el.disabled = true
      el.classList.toggle('disabled')
      subArr.push(parseInt(el.dataset.path))
      click.push(el)
      if (subArr.length == 2){
        if (subArr[0] == subArr[1]){
          openCards.push(parseInt(el.dataset.path))
          subArr = []
        }
         else if (subArr[0] !== subArr[1]){
          subArr = []
        }
      }
      disableTrue ()
      if (click.length == 2){
        if (click[0].dataset.path !== click[1].dataset.path){
          click[0].disabled = false
          click[1].disabled = false
        }
        click=[]
      }
    }
  })



})()
