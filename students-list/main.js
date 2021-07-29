(function(){

  //Создание элементов формы для внесения студнета

  function addStudentForm (){
    let inputArray = [
      {label:'Имя', type: 'text', placeholder: 'Имя'},
      {label:'Фамилия', type: 'text',placeholder:'Фамилия'},
      {label:'Отчество', type: 'text',placeholder:'Отчество'},
      {label:'Дата рождения', type: 'date',placeholder:'Дата рождения'},
      {label:'Год начала обучения', type: 'date',placeholder:'Год начала обучения'},
      {label:'Факультет', type: 'text',placeholder:'Факультет'}
    ]

    let body = document.body
    let form = document.createElement('form')
    form.classList.add('form-container')
    body.append(form)
    let title = document.createElement('h1')
    title.textContent = 'Добавить нового студента'
    title.classList.add('title')
    form.append(title)
    let inputContainer = document.createElement('div')
    inputContainer.classList.add('input-container')
    form.append(inputContainer)
    for (let i=0; i<inputArray.length;i++){
      let input = document.createElement('input')
      input.setAttribute('type', inputArray[i].type)
      input.setAttribute('placeholder', inputArray[i].placeholder)
      input.classList.add(`input`)
      input.classList.add(`input${i}`)
      input.id = `input${i}`
      input.dataset.target = i
      let labelInput = document.createElement('label')
      labelInput.textContent = inputArray[i].label
      labelInput.classList.add('label-input')
      labelInput.append(input)
      inputContainer.append(labelInput)
    }
    let addButton = document.createElement('button')
    addButton.classList.add('add-btn')
    addButton.textContent = 'Добавить студента'
    form.append(addButton)

    return {
      addButton,
    }
  }

  //Cоздание формы для фильтра
  function createFilterInput (){
    let inputFilterArray = [
      {label:'ФИО', type: 'text', placeholder: 'ФИО'},
      {label:'Факультет', type: 'text',placeholder:'Факультет'},
      {label:'Дата рождения', type: 'date',placeholder:'Дата рождения'},
      {label:'Года начала обучения', type: 'date',placeholder:'Года начала обучения'},
    ]
    let container = document.createElement('div')
    container.classList.add('filter-container')
    let containerTitle = document.createElement('div')
    containerTitle.classList.add('title-container')
    let titleFilter = document.createElement('h2')
    titleFilter.classList.add('title-filter')
    titleFilter.textContent = 'Фильтр по таблице'
    containerTitle.append(titleFilter)
    document.body.append(containerTitle,container)

    for (let i=0;i<inputFilterArray.length;i++){
      let input = document.createElement('input')
      input.setAttribute('type', inputFilterArray[i].type)
      input.setAttribute('placeholder', inputFilterArray[i].placeholder)
      input.classList.add(`input-filter`)
      input.id = `input-filter${i}`
      input.dataset.path = 'filter'
      let labelInput = document.createElement('label')
      labelInput.textContent = inputFilterArray[i].label
      labelInput.classList.add('filter-label')
      labelInput.append(input)
      container.append(labelInput)
    }

    let clearFilter = document.createElement('button')
    clearFilter.classList.add('btn-clear')
    clearFilter.textContent ='Сбросить фильтр'
    container.append(clearFilter)
    return {
      clearFilter
    }
  }


  //создание шапки таблицы

  function table (){
    let tableContainer = document.createElement('table')
    tableContainer.classList.add('table-container')
    tableContainer.style.margin = '0 auto'
    tableContainer.setAttribute('border', '1px', 'cellspacing', '0')
    tableContainer.setAttribute('cellspacing', '0')
    document.body.append(tableContainer)
    let titleRow = document.createElement('tr')
    tableContainer.append(titleRow)
    let nameColumn = document.createElement('th')
    nameColumn.textContent = 'ФИО'
    nameColumn.id = 'FIO'
    nameColumn.classList.add('head')
    let facultecColumn = document.createElement('th')
    facultecColumn.textContent = 'Факультет'
    facultecColumn.id = 'facultet'
    facultecColumn.classList.add('head')
    let birthdayColumn = document.createElement('th')
    birthdayColumn.textContent = 'Дата рождения '
    birthdayColumn.id = 'birthday'
    birthdayColumn.classList.add('head')
    let studyPeriod = document.createElement('th')
    studyPeriod.textContent = 'Годы обучения'
    studyPeriod.id = 'start'
    studyPeriod.classList.add('head')
    titleRow.append(nameColumn,facultecColumn,birthdayColumn,studyPeriod)
    document.querySelectorAll('th').forEach((item)=>{item.setAttribute('width', '400px'); item.setAttribute('bgColor', '#eee')})
    return{
      tableContainer
    }
  }

  // добавление нового студента в таблицу

  function addNewStudent(object,table){

      let newRow = document.createElement('tr')
      let nameStud = document.createElement('td')
      nameStud.textContent = object.FIO
      let facultStud = document.createElement('td')
      facultStud.textContent = object.facultet
      let birthdayStud = document.createElement('td')
      birthdayStud.textContent = object.birthday
      let periodStud = document.createElement('td')
      periodStud.textContent = object.start
      newRow.append(nameStud,facultStud,birthdayStud,periodStud)
      table.append(newRow)

  }

  //Удаление полей таблицы, чтобы перерисовать ее

  function deleteRow (){
    document.querySelectorAll('td').forEach((item)=>{item.remove()})
  }


  //Всплывающее предупреждение

  function important(text){
    let message = document.createElement('div')
    message.classList.add('danger-message')
    message.textContent = text
    return message
  }

//Валидация формы
  function validateAddForm (item1,item2) {
    for (let i=0;i<item1.length;i++){
      if(!item1[i].value){
        let err = important('Обязательно для заполнения')
        item2[i].append(err)
      }
    }
  }
  //Удаление ошибок
function deletError(){
  let error = document.querySelectorAll('.danger-message')
  for (let i=0; i<error.length;i++){
    error[i].remove()
  }
}
//Проверка на пустоту поля ввода
function checkBlank(item){
    let flag =0
    for (let i=0;i<item.length;i++){
      if(item[i].value.trim() !== ''){
        flag++
      }
    }
    if (flag == item.length) {
      flag = 0
      return true
    }
    else{
      flag = 0
      return false
    }
}

// Приведение строки к нормальному виду
function changeString (string){
  if (typeof string == 'string'){
    let a = string.replace(/\s/g, '').toLowerCase()
  return a.charAt(0).toUpperCase() + a.slice(1)
  } else{
  let a = string.value.replace(/\s/g, '').toLowerCase()
  return a.charAt(0).toUpperCase() + a.slice(1)
  }
}


// Проверка диапазона даты
function checkDate1(item1,item2,item3){
  if (item1.value.trim() !== ''){
    let nowDate = Date()
    if (item1.valueAsNumber>=Date.parse(nowDate) || item1.valueAsNumber<=Date.parse(`${item3}`)){
      let mess = important('Неверная дата')
      item2.append(mess)
      return false
    } else if (item1.valueAsNumber<Date.parse(nowDate) || item1.valueAsNumber>Date.parse(`${item3}`)){
      return true}
  }
}

//Определение курса
function namberCourse (item) {
  let actualDate = new Date()
  let actualYear = actualDate.getFullYear()
  let inputValue = item.valueAsDate

  if (item.value){
    let inputValueFullyear = inputValue.getFullYear()
     if(actualYear>=inputValueFullyear && actualYear<=inputValueFullyear + 4){
      if (actualYear - inputValueFullyear == 0) {
        return `${item.value.substr(0,4)} - ${Number(item.value.substr(0,4)) + 4} (1 курс) `
      }
     return `${item.value.substr(0,4)} - ${Number(item.value.substr(0,4)) + 4} (${actualYear - inputValueFullyear} курс) `
    }
    else if(inputValueFullyear + 4 < actualYear){
      return `${item.value.substr(0,4)} - ${Number(item.value.substr(0,4)) + 4} (окончил(а))`
    }
  }
}

//Расчет курса
function birthdayCalc(item){
  let calc = Math.trunc(Math.abs((item.valueAsNumber - Date.parse(Date()))/(24 * 3600 * 365.25 * 1000)))
  return `${changeString(item)} (${calc} лет)`
}

let studentArr = []


//Добавление студента
  function createStudentItem () {
    const checkTime1 = 'Mon Jan 01 1900 01:50:00 GMT+0150 (Москва, стандартное время)'
    const checkTime2 = 'Wed Jan 01 2000 03:00:00 GMT+0300 (Москва, стандартное время)'
    let createForm = addStudentForm()
    let filter = createFilterInput()
    let createTable = table()

    let inputArr = document.querySelectorAll('.input')
    let label = document.querySelectorAll('.label-input')

    let studentArr1 = window.localStorage.getItem('students')
     studentArr = JSON.parse(studentArr1)
    if (studentArr !== null){
      for(let item of studentArr){
        addNewStudent(item,createTable.tableContainer)
       }
    }else{studentArr = []}

    createForm.addButton.addEventListener('click', function(e){
      e.preventDefault()
      deletError()

      validateAddForm(inputArr,label)
      let checkDateValue1 = checkDate1(inputArr[3],label[3],checkTime1)
      let checkDateValue2 = checkDate1(inputArr[4],label[4],checkTime2)
      let obj = {
        FIO: `${changeString(inputArr[1])} ${changeString(inputArr[0])} ${changeString(inputArr[2
        ])}`,
        birthday: birthdayCalc(inputArr[3]),
        start: namberCourse(inputArr[4]),
        facultet: changeString(inputArr[5]),
      }
      if(checkBlank(inputArr) && checkDateValue1 && checkDateValue2) {
        studentArr.push(obj)
        document.querySelector('.form-container').reset()
        window.localStorage.setItem('students',JSON.stringify(studentArr))
      }
       deleteRow()
       for(let item of studentArr){
        addNewStudent(item,createTable.tableContainer)
       }
       renderList()

    })



    // функция сортировки столбцов
    function sort (array){
      document.querySelectorAll('.head').forEach((item)=>{
        let flag = -1
        item.addEventListener('click', (e)=>{
          if (flag == -1){
            let a = array.sort((a,b)=> a[e.target.id] > b[e.target.id] ? 1 : -1)
            deleteRow()
            for(let item of a){
              addNewStudent(item,createTable.tableContainer)
             }
            flag =1
          }else{
            let a = array.sort((a,b)=> a[e.target.id] < b[e.target.id] ? 1 : -1)
            deleteRow()
            for(let item of a){
              addNewStudent(item,createTable.tableContainer)
             }
            flag = -1
          }
        })
      })
    }

    sort(studentArr)


// ф-ия отрисовки таблицы после фильтра
   function renderList (){

    let newStudentList =[]

    let filterFIO = document.querySelector('#input-filter0')
    let filterFac = document.querySelector('#input-filter1')
    let filterBirthday = document.querySelector('#input-filter2')
    let filterStart = document.querySelector('#input-filter3')

    // function checkCondition (item1,item2,item3){

    //   if ((item1.value !== '') && (changeString(item2).includes(changeString(item1)))) {
    //     item3 = true
    //   }else if((item1.value !== '') && (!changeString(item2).includes(changeString(item1)))){
    //      item3=false
    //     continue
    //   }
    // }

    if (newStudentList.length == 0){
      for (let studentsItem of studentArr){
        let studentFlag = false

        // checkCondition(filterFIO,studentsItem.FIO,studentFlag)
        // checkCondition(filterFac,studentsItem.facultet,studentFlag)
        // checkCondition(filterBirthday,studentsItem.birthday,studentFlag)
        // checkCondition(filterStart,studentsItem.start,studentFlag)

        if ((filterFIO.value !== '') && (changeString(studentsItem.FIO).includes(changeString(filterFIO)))) {
          studentFlag = true
        }else if((filterFIO.value !== '') && (!changeString(studentsItem.FIO).includes(changeString(filterFIO)))){
           studentFlag=false
          continue
        }
        if((filterFac.value !== '') && (studentsItem.facultet.includes(changeString(filterFac)))) {
          studentFlag = true
        }else if((filterFac.value !== '') && (!studentsItem.facultet.includes(changeString(filterFac)))){
          studentFlag = false
          continue
        }
        if((filterBirthday.value !== '') && (studentsItem.birthday.includes(changeString(filterBirthday)))) {
          studentFlag = true

        }else if((filterBirthday.value !== '') && (!studentsItem.birthday.includes(changeString(filterBirthday)))){
          studentFlag = false
          continue
        }
        if((filterStart.value !== '') && (studentsItem.start.includes(changeString(filterStart)))) {
          studentFlag = true
        }else if((filterStart.value !== '') && (!studentsItem.start.includes(changeString(filterStart)))){
          studentFlag=false
          continue
        }
        if (studentFlag){
          newStudentList.push(studentsItem)
        }
      }
    }

    if (newStudentList.length !== 0){
      deleteRow()
      for(let item of newStudentList){
        addNewStudent(item,createTable.tableContainer)
       }
       sort(newStudentList)
    }else if ((newStudentList.length == 0) && (filterFIO.value == '' && filterFac.value == '' && filterBirthday.value == '' && filterStart.value == '')){
      deleteRow()
      for(let item of studentArr){
        addNewStudent(item,createTable.tableContainer)
       }
    }

    // очистка полей фильтра
    document.querySelector('.btn-clear').addEventListener('click', (e)=>{
      e.preventDefault()
      document.querySelectorAll('.input-filter').forEach((item)=>{item.value = ''})
        deleteRow()
        for(let item of studentArr){
          addNewStudent(item,createTable.tableContainer)
        }
        newStudentList =[]
        sort(studentArr)
      })
    }

   document.querySelectorAll('.input-filter').forEach((item)=>{
     item.addEventListener('input', ()=>{
       renderList()
     })
   })
  }


  createStudentItem()

})()
