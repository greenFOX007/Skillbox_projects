

( function checkBox () {


const label = document.querySelector('.editions__filter-label_category')
const list = document.querySelector('.list__checkbox')
const items = document.querySelectorAll('.list-item__checkbox')
const listSelected = document.querySelector('.selected_checkbox')
const checkBox = document.querySelectorAll('.check')
let labels = document.querySelectorAll('.label__checkbox ')
let copyItems = []
let closeArr =[]
let newLIs =[]

for (let i =0; i<items.length;i++){
  copyItems[i] = items[i].cloneNode(true)
  copyItems[i].childNodes[1].dataset.flag = 0
}


document.addEventListener('click', function (e) {
  let labelClick = e.target
  if (labelClick.classList.contains('editions__filter-label_category')){
    list.classList.toggle('list__checkbox_closed')
    label.classList.toggle('list-open')
  }
  else if (!labelClick.classList.contains('list-item__checkbox') && !labelClick.classList.contains('label__checkbox') && !labelClick.classList.contains('check') && !labelClick.classList.contains('custom-check') ){
    list.classList.add('list__checkbox_closed')
  }
})

function createElem(i) {
  let li = document.createElement('li')
      li.classList.add('list-item__checkbox-mobile')
      let div = document.createElement('div')
      div.classList.add('label__checkbox')
      div.classList.add('label__checkbox-mobile')
      div.textContent = labels[i].textContent
      let span = document.createElement('span')
      span.classList.add('custom-check-mobile')
      div.append(span)
      let button = document.createElement('button')
      button.classList.add('close-elem')
      li.append(div)
      li.append(button)
      li.dataset.flag = i+1
      listSelected.append(li)
      closeArr.push(button)
      newLIs.push(li)
      button.addEventListener('click', function (){
        li.remove()
        checkBox[i].checked = false
        labels[i].classList.remove('label__checkbox-active')
      })
}



for (let i=0;i<checkBox.length;i++){
  checkBox[i].addEventListener('click', function (e) {
    let newLI = document.querySelectorAll('.list-item__checkbox-mobile')
    elTarget = e.target
    if (checkBox[i].checked == true ) {
      createElem(i)
    }
    else if (checkBox[i].checked == false) {
      for (let j =0; j<newLI.length; j++){
        if (newLI[j].dataset.flag == elTarget.dataset.flag){
          newLI[j].remove()
        }
      }
    }
  })
 }
if (closeArr.length>0){
 for (let j=0;j<closeArr.length;j++){
   items[j].addEventListener('click', function(){
   })
 }}
}


)()





