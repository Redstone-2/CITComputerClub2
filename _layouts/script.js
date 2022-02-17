var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function menuExpand() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
};
function loginTest() {
  setCookie("user", "test");
  location.reload();
}
document.addEventListener("DOMContentLoaded", function(){
  var x = document.getElementById("loginbutton");
  var y = document.getElementById("UserOptions");
  var z = document.getElementById("usrname");
  var a = getCookie("user")
  if (a != ""){
    y.style.display = null;
    z.innerHTML = a;
  }else{
    x.style.display = null;
  }
});
window.addEventListener('resize', () => {
  var x = document.getElementById("myTopnav");
  if (window.innerWidth >= 630) {
    x.className = "navbar"
  }
});
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + "; path=/;";
}
function deleteCookie(name) {
 document.cookie = name+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; 
}
function logout() {
  deleteCookie('user')
  location.reload();
}
 
var inputUser = document.getElementById("usrName");
var inputPsw = document.getElementById("psw");
document.getElementById("loginForm").addEventListener('submit', event => {
  event.preventDefault()
  const data = JSON.stringify({usrname: inputUser.value.replace(/<|>|;|"|\\|'|-|{|}|:/gi, ""), pw: inputPsw.value.replace(/<|>|;|"|\\|'|-|{|}|:/gi, "")});
})