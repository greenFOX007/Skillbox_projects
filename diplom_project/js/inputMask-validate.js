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
    });
