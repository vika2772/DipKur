function show_hide_password3(target){
    var input = document.getElementById('usedabun-kasdenum3');
    if (input.getAttribute('type') == 'password') {
      target.classList.add('view3');
      input.setAttribute('type', 'text');
    } else {
      target.classList.remove('view3');
      input.setAttribute('type', 'password');
    }
    return false;
  }