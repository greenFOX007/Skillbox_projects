let buttonCheck=document.querySelectorAll('.label__checkbox')
let check=document.querySelectorAll('.check')
let lol=document.querySelectorAll('.list-item__checkbox')
for(let i=0;i<buttonCheck.length;i++){buttonCheck[i].addEventListener('click',function(){if(check[i]!==undefined){if(check[i].checked==!0){buttonCheck[i].classList.add('label__checkbox-active')}else{buttonCheck[i].classList.remove('label__checkbox-active')}}})}
for(let j=0;j<check.length;j++){check[j].addEventListener('focus',()=>{buttonCheck[j].classList.add('label__checkbox-outline')});check[j].addEventListener('blur',()=>{buttonCheck[j].classList.remove('label__checkbox-outline')})}