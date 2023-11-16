function show_hide_password2(target){
    var input = document.getElementById('usedabun-kasdenum2');
    if (input.getAttribute('type') == 'password') {
      target.classList.add('view2');
      input.setAttribute('type', 'text');
    } else {
      target.classList.remove('view2');
      input.setAttribute('type', 'password');
    }
    return false;
  }