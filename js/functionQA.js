
// ОТКРЫТИЕ БУРГЕР МЕНЮ

const btnMenu = document.getElementById('menu-btn');
const menu = document.getElementById('menu-nav');
const menuIcon = document.getElementById("menu-icon")

btnMenu.onclick = function() {
  if (menu.style.display === "none") {
    menu.style.display = "flex";
    menuIcon.classList.add("active")
  } else {
    menu.style.display = "none";
    menuIcon.classList.remove("active")
  }
}

//пароль
function show_hide_password(target){
  var input = document.getElementById('usedabun-kasdenum');
  if (input.getAttribute('type') == 'password') {
  target.classList.add('view');
  input.setAttribute('type', 'text');
  } else {
  target.classList.remove('view');
  input.setAttribute('type', 'password');
  }
  return false;
}

/// ХЗ ЧО ЗА КОД СНИЗУ
var details = document.querySelectorAll("details");
for(i=0;i<details.length;i++) {
  details[i].addEventListener("toggle", accordion);
}
function accordion(event) {
  if (!event.target.open) return;
  var details = event.target.parentNode.children;
  for(i=0;i<details.length;i++) {
    if (details[i].tagName != "DETAILS" || !details[i].hasAttribute('open') || event.target == details[i]) continue;
    details[i].removeAttribute("open");
  }
}



