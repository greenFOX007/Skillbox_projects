 (function () {
  const itemAray = [1,2,3,4,5,6,7,8];
  let duplicateArray = (arr) => [...arr, ...arr];
  let newArray = duplicateArray(itemAray);
  const cards = document.querySelectorAll('.game-card');
  const cardCont = document.querySelector('.game-container')
  const restartcont = document.querySelector('.congratulations')
  let subArr = []
  let openCards = []

  function changeLevel (){
    let firstMenuCont = document.createElement('form')
    firstMenuCont.classList.add('firstMenuCont')
    document.body.append(firstMenuCont)

    const labelVert = document.createElement('label')
    labelVert.textContent = 'Колличество карточек по вертикали'

    let levelVertical = document.createElement('input')
    levelVertical.type = 'number'
    levelVertical.max = 10
    levelVertical.classList.add('input')
    labelVert.classList.add('label')
    labelVert.append(levelVertical)

    firstMenuCont.append(labelVert)

    const labelHor = document.createElement('label')
    labelHor.textContent = 'Колличество карточек по горизонтали'

    let levelHorizontal = document.createElement('input')
    levelHorizontal.max = 10
    levelHorizontal.type = 'number'
    levelHorizontal.classList.add('input')
    labelHor.classList.add('label')
    labelHor.append(levelHorizontal)
    firstMenuCont.append(labelHor)

    let startButton =document.createElement('button')
    startButton.classList.add('restart-button')
    startButton.textContent = 'Начать игру'
    firstMenuCont.append(startButton)

    return {
      startButton,
      firstMenuCont,
      levelVertical,
      levelHorizontal
    }
  }

  function firstStart (){

    let change = changeLevel()
    change.startButton.addEventListener('click', function(e){
      e.preventDefault()
      let valueVertical = parseInt(change.levelVertical.value)
      let valueHorizontal = parseInt(change.levelHorizontal.value)
      if (valueVertical%2 == 0 && valueHorizontal%2 == 0) {
        let lvl = valueHorizontal*valueVertical
        createCards(lvl)
      }
      else {
        alert ('введите четное число!')
      }
    })
  }

  firstStart()

  function createCards (n){
    let gameContainer = document.createElement('div')
    gameContainer.classList.add('game-container')
    document.body.append(gameContainer)
    for (let i = 1; i <= n; i++){
      let but = document.createElement('button')
      but.classList.add('game-card')
      gameContainer.append(but)
    }
  }

//   function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   };
//   const newShuffleArr = shuffle(newArray);

//   function disableTrue () {
//     for (let i of cards ){
//       for (let j of openCards){
//         if (i == j){
//           i.disabled = true
//         }
//       }
//     }
//   }
  function createWinElem (){
    let win =document.createElement('h1')
    win.classList.add('title')
    win.textContent = 'Поздравляем, Вы победили!'
    restartcont.append(win)
    let buttonWin = document.createElement('button')
    buttonWin.classList.add('restart-button')
    buttonWin.textContent = 'Сыграть еще раз'
    restartcont.append(buttonWin)
    return {
      buttonWin,
      win
    }
  }

  function restart (){
    let block = createWinElem()
    block.buttonWin.addEventListener('click', function (){

        block.win.remove()
        block.buttonWin.remove()
        shuffle(newArray)
        start()
      })
  }

// function start (){
//   cards.forEach((item,index)=>{
//     item.classList.remove('open-card')
//     item.textContent = newShuffleArr[index]
//     item.dataset.path = newShuffleArr[index]

//     item.disabled= false
//     openCards = []
//     subArr =[]
//   })
// }
// start()

// // let timerID
// // button.addEventListener('click', function (){
// //   clearInterval(timerID)
// //   let number = parseInt(input.value)
// //   div.textContent = number
// //    timerID = setInterval(timer, 1000)
// //     function timer () {
// //       if (number > -1){
// //         number--
// //         div.textContent = number
// //       }
// //       if (number == -1){
// //         div.textContent = null
// //       }
// //     }
// //   })



  cardCont.addEventListener('click', function (e){

    let el = e.target
    if (el !== cardCont ){
      console.log(el)
      el.disabled = true
      subArr.push(el)
      el.classList.add('open-card')
      if (subArr.length == 2){
        if (subArr[0].dataset.path == subArr[1].dataset.path){
          openCards.push(el)
          subArr = []
        }
        else {
          cards.forEach((i)=>{i.disabled = true})
         setTimeout(()=>{
          cards.forEach((i)=>{i.disabled = false})
           subArr.forEach((i)=>{
             i.classList.remove('open-card')
             i.disabled = false
           })
           subArr = []
         },700)
        }
      }
      disableTrue ()
      if (openCards.length == 8){
        restart()
      }
    }
  })
 }

 )()

