var selector = document.getElementById("telephone");
  var im = new Inputmask("+375 (99)-999-99-99");
  im.mask(selector);
  new JustValidate('.form', {
      colorWrong: 'red',
      rules: {
        name: {
          required: true,
          minLength: 2,
          maxLength: 20,
      },
      tel: {
        required: true,
        function: (names, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 9
        }
      },
      },
      messages: {
        name: {
          required: 'Обязательно для заполнения!',
          minLength: 'Недопустимая длина имени!',
          maxLength: 'Недопустимая длина имени!'
        },
        tel: {
          required: 'Обязательно для заполнения!',
          function: 'Минимальное число цифр - 9 ',
      }
      },

      submitHandler: function (form, values, ajax) {

        ajax({
          url: "../send.php",
          method: 'POST',
          data: values,
          async: true,
          callback: function(response)  {
            document.querySelector('.message-txt').innerHTML = response
            document.querySelector('.mail-message').classList.remove('invisible')
            setTimeout(()=>{
              document.querySelector('.mail-message').classList.add('invisible')
              document.querySelector('.form').reset()
            },3000)
          },
          error: function (response) {
            document.querySelector('.message-txt').innerHTML = response
            document.querySelector('.mail-message').classList.remove('invisible')
            document.querySelector('.mail-message').style.backgroundColor = 'rgba(237, 21, 21, 0.9)'
            setTimeout(()=>{
              document.querySelector('.mail-message').classList.add('invisible')
              document.querySelector('.form').reset()
            },3000)
        }
        });
      },
    });
