//закрыnтие окна входа
var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//закрытие окна входа и открытие окна регистрации
var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//убрать-показать пароль вход
function show_hide_passwordvhod(target){
    var input = document.getElementById('passwordvhod');
    if (input.getAttribute('type') == 'password') {
    target.classList.add('view');
    input.setAttribute('type', 'text');
    } else {
    target.classList.remove('view');
    input.setAttribute('type', 'password');
    }
    return false;
  }

//убрать-показать пароль регисрация
function show_hide_passwordreg(target){
    var input = document.getElementById('passwordreg');
    if (input.getAttribute('type') == 'password') {
    target.classList.add('viewreg');
    input.setAttribute('type', 'text');
    } else {
    target.classList.remove('viewreg');
    input.setAttribute('type', 'password');
    }
    return false;
  }

//Открыть окно входа на разных страницах
document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.login-button');
    button.addEventListener('click', openModal);
  });
  
  function openModal() {
    var modal = document.getElementById('id01');
    modal.style.display = 'block';
  }