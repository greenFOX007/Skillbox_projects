( function (){
  let timerID
  function titleMenu (){ //создаем элементы формы

    //форма контейнер
    const firstMenuCont = document.createElement('form')
    firstMenuCont.classList.add('firstMenuCont')
    document.body.append(firstMenuCont)

    //элемент формы 1
    const labelVert = document.createElement('label')
    labelVert.textContent = 'Колличество карточек по вертикали'

    const levelVertical = document.createElement('input')
    levelVertical.type = 'number'
    levelVertical.value = 4
    levelVertical.classList.add('input')
    labelVert.classList.add('label')
    labelVert.append(levelVertical)
    firstMenuCont.append(labelVert)

     //элемент формы 2
    const labelHor = document.createElement('label')
    labelHor.textContent = 'Колличество карточек по горизонтали'

    const levelHorizontal = document.createElement('input')
    levelHorizontal.value = 4
    levelHorizontal.type = 'number'
    levelHorizontal.classList.add('input')
    labelHor.classList.add('label')
    labelHor.append(levelHorizontal)
    firstMenuCont.append(labelHor)

    //кнопка старта
    const startButton =document.createElement('button')
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

//создание дом элементов
  function createCards (itemsHoriz, itemsVer){
    const gameContainer = document.createElement('div')
    gameContainer.classList.add('game-container')
    let width = itemsHoriz*120
    let hight = itemsVer*120
    gameContainer.style.width = width + 'px'
    gameContainer.style.height = hight + 'px'
    document.body.append(gameContainer)
    let allCards =  parseInt(itemsHoriz)*parseInt(itemsVer)
    let cards =[]
    for (let i = 1; i <= allCards; i++){
      const but = document.createElement('button')
      but.classList.add('game-card')
      gameContainer.append(but)
      cards.push(but)
    }
    return {
      cards,
      gameContainer,
    }
  }

  //Функция дает играбельность карточкам
  function play (container, cards){
    let subArr = []
    let openCards = []
    console.log(cards.length)
    container.addEventListener('click', function (e){
      let el = e.target
      if (el !== container ){
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
            },800)
          }
        }
        disableTrue (cards, openCards)
        if (cards.length/2 == openCards.length){
          restart()
          clearInterval(timerID)
         let x = document.querySelector('.timer')
         x.remove()
        }
      }
    })
  }

  function restart (){
   document.querySelector('.game-container').remove()
    let block = createWinElem()
    block.buttonWin.addEventListener('click', function (){
      block.win.remove()
      block.buttonWin.remove()
      asd()
    })
  }


  function createWinElem (){
    const restartcont = document.createElement('div')
    restartcont.classList.add('congratulations')
    document.body.append(restartcont)
    const win =document.createElement('h1')
    win.classList.add('title')
    win.textContent = 'Поздравляем, Вы победили!'
    restartcont.append(win)
    const buttonWin = document.createElement('button')
    buttonWin.classList.add('restart-button')
    buttonWin.textContent = 'Сыграть еще раз'
    restartcont.append(buttonWin)
    return {
      buttonWin,
      win
    }
  }


//Устанавливает disable для открытых карточек
  function disableTrue (cards,openCards) {
    for (let i of cards ){
      for (let j of openCards){
        if (i == j){
          i.disabled = true
        }
      }
    }
  }

function asd (){
//Запускает игру по клику на кнопку начать
    let creatElem = titleMenu()
    creatElem.startButton.addEventListener('click', function (e){
      e.preventDefault()
      // let element = document.querySelector('.game-container')
      creatElem.firstMenuCont.remove()
       startEvent()
       timer()

    })

    //cоздание карточек и добавление им значений рандомных
    function startEvent (){
      let itemHor = creatElem.levelHorizontal.value
      let itemVer = creatElem.levelVertical.value
      if (itemHor%2==0 && itemVer%2 ==0 && itemHor<=10 && itemVer<=10 && itemHor>=2 && itemVer>=2){
      let allItem = itemHor*itemVer
      let createAllCards = createCards(itemHor, itemVer)
      let randomNumber = generateNumber(allItem)
      createAllCards.cards.forEach((item,index) => {
        item.textContent = randomNumber[index]
        item.dataset.path = randomNumber[index]
      })
      play(createAllCards.gameContainer, createAllCards.cards)}
      else {
        alert('Введено некорректное значение, игра будет запучщена 4 на 4')
        itemVer = 4
        itemHor = 4
        let allItem = itemHor*itemVer
      let createAllCards = createCards(itemHor, itemVer)
      let randomNumber = generateNumber(allItem)
      createAllCards.cards.forEach((item,index) => {
        item.textContent = randomNumber[index]
        item.dataset.path = randomNumber[index]
      })
      play(createAllCards.gameContainer, createAllCards.cards)
      }
    }}
    asd()

  //генерация рандомных чисел
    function generateNumber (items){
      items = items/2
      let arr = []
      for (let i = 1; i<=items; i++){
        arr.push(i)
      }
      let newArr = duplicateArray(arr)
      let r = shuffle(newArr)
      return r
    }

    //создание сдвоиного массива
    let duplicateArray = (arr) => [...arr, ...arr];

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };


    function loseFunc (){
      const restartcontLose = document.createElement('div')
      restartcontLose.classList.add('congratulations')
      document.body.append(restartcontLose)
      const lose =document.createElement('h1')
      lose.classList.add('title')
      lose.textContent = 'Вы проиграли('
      restartcontLose.append(lose)
      const buttonLose = document.createElement('button')
      buttonLose.classList.add('restart-button')
      buttonLose.textContent = 'Сыграть еще раз'
      restartcontLose.append(buttonLose)
      return {
        buttonLose,
        lose,
        restartcontLose
      }
     }


    function timer (){
      const div = document.createElement('div')
      div.classList.add('timer')
      document.body.append(div)
      function startTimer(){
        let number = 60
        div.textContent = number
         timerID = setInterval(timer, 1000)
          function timer () {
            if (number > -1){
              number--
              div.textContent = number
            }
            if (number == -1){
              div.textContent = null
              div.remove()
              clearInterval(timerID)

              document.querySelector('.game-container').remove()
              let blockLose = loseFunc()
              blockLose.buttonLose.addEventListener('click', function (){
                blockLose.lose.remove()
                blockLose.buttonLose.remove()
                asd()
              })
            }
         }
      }
      startTimer()
    }

})()
