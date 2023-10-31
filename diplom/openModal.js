function openModal() {

// const modalDiv = document.createElement('div');
// modalDiv.classList.add('modal');

// const vhodDiv = document.createElement('div');
// vhodDiv.classList.add('vhod', 'animate');

// var form = document.createElement('form');
// form.action = '';
// form.method = 'post';
// form.classList.add('vhoddiv');

// var label = document.createElement('label');
// label.classList.add('formvhod');
// label.setAttribute('lang', 'ru');
// label.textContent = 'Вход';

// var span = document.createElement('span');
// span.onclick = function() {
//   modalDiv.style.display = 'none';
// };
// var img = document.createElement('img');
// img.src = 'Крестик.png';
// img.classList.add('spanvhod');
// span.appendChild(img);

// var emailInput = document.createElement('input');
// emailInput.type = 'email';
// emailInput.setAttribute('lang', 'ru');
// emailInput.name = 'vhodemail';
// emailInput.placeholder = 'Введите email...';
// emailInput.required = true;
// emailInput.classList.add('inputvhod');

// var passwordInput = document.createElement('input');
// passwordInput.id = 'passwordvhod';
// passwordInput.type = 'password';
// passwordInput.setAttribute('lang', 'ru');
// passwordInput.name = 'vhodparol';
// passwordInput.placeholder = 'Введите пароль...';
// passwordInput.required = true;
// passwordInput.classList.add('inputvhod');

// var passwordToggle = document.createElement('a');
// passwordToggle.href = '#';
// passwordToggle.classList.add('podsanu-gesamilod');
// passwordToggle.onclick = function() {
//   return show_hide_passwordvhod(this);
// };

// var button = document.createElement('button');
// button.type = 'button';
// button.setAttribute('lang', 'ru');
// button.classList.add('buttonvhod');
// button.textContent = 'Войти';

// var accLabel = document.createElement('label');
// accLabel.setAttribute('lang', 'ru');
// accLabel.classList.add('accvhod');
// accLabel.textContent = 'Нет аккаунта?';

// var regButton = document.createElement('button');
// regButton.type = 'button';
// regButton.setAttribute('lang', 'ru');
// regButton.classList.add('buttonvhodreg');
// regButton.onclick = function() {
//   modalDiv.style.display = 'none';
//   document.getElementById('id02').style.display = 'block';
// };
// regButton.textContent = 'Зарегистрироваться';

// // Добавляем элементы в иерархию документа
// vhodDiv.appendChild(label);
// vhodDiv.appendChild(span);
// vhodDiv.appendChild(document.createElement('br'));
// vhodDiv.appendChild(emailInput);
// vhodDiv.appendChild(document.createElement('br'));
// vhodDiv.appendChild(passwordInput);
// vhodDiv.appendChild(passwordToggle);
// vhodDiv.appendChild(button);
// vhodDiv.appendChild(document.createElement('br'));
// vhodDiv.appendChild(accLabel);
// vhodDiv.appendChild(document.createElement('br'));
// vhodDiv.appendChild(regButton);

// form.appendChild(vhodDiv);
// modalDiv.appendChild(form);

// // Добавляем модальное окно в body после его загрузки
// window.addEventListener('load', function() {
//   document.body.appendChild(modalDiv);
// });

  const modal = document.createElement('div'); // Создание элемента div
  modal.classList.add('modal'); // Добавление класса "modal" к созданному элементу

 const modalContent = document.createElement('div'); 
  modalContent.classList.add('vhod', 'animate');
  
  const vhodDiv = document.createElement('div');
  vhodDiv.classList.add('vhoddiv');

  const form = document.createElement('form');
  form.action = '';
  form.method = 'post';

  const label = document.createElement('label');
  label.classList.add('formvhod');
  label.lang = 'ru';
  label.innerHTML = 'Вход';

  var span = document.createElement('span');
  span.onclick = function() {
    document.getElementById('id01').style.display = 'none';
  };

  var img = document.createElement('img');
  img.src = 'Крестик.png';
  img.classList.add('spanvhod');

  span.appendChild(img);

  var closeButton = document.createElement('span'); // Создание элемента span для кнопки закрытия
  closeButton.classList.add('close-modal'); // Добавление класса "close-modal" к созданному элементу
  closeButton.innerHTML = '&times;'; // Добавление текста кнопки закрытия

  modalContent.appendChild(closeButton); // Добавление кнопки закрытия в содержимое модального окна
  modal.appendChild(modalContent); // Добавление содержимого модального окна в модальное окно

  document.body.appendChild(modal); // Добавление модального окна в тело документа

  closeButton.addEventListener('click', closeModal); // Добавление обработчика события на кнопку закрытия
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });
}

function closeModal() {
  var modal = document.querySelector('.modal');
  if (modal) {
    modal.remove();
  }
}
