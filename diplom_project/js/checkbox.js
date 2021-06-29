let buttonCheck = document.querySelectorAll('.label__checkbox')
let check = document.querySelectorAll('.check')
let lol = document.querySelectorAll('.list-item__checkbox')
let customCheck = document.querySelectorAll('.custom-check')
for (let i=0; i<buttonCheck.length;i++) {
  buttonCheck[i].addEventListener('click', function(){
    if (check[i] !== undefined){
    if (check[i].checked == true){
      buttonCheck[i].classList.add('label__checkbox-active')}
    else {
      buttonCheck[i].classList.remove('label__checkbox-active')
    }}
  })}
for (let j=0;j<check.length;j++){
  check[j].addEventListener('focus', () => {
  buttonCheck[j].classList.add('label__checkbox-outline');
  customCheck[j].classList.add('border__fiolet')

});
check[j].addEventListener('blur', () => {
  buttonCheck[j].classList.remove('label__checkbox-outline');
  customCheck[j].classList.remove('border__fiolet')
});}
