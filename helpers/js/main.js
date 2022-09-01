window.onclick = function(event) {
  var modal = document.getElementById('id01');
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
}

function load(){
    try{
  var x = document.getElementById("loginbutton");
  var y = document.getElementById("UserOptions");
  var z = document.getElementById("usrname");
  var b = document.getElementById("adminlink");

    var user = getCookie("User");
    var cookies = user.split(".");
    var cookie = atob(cookies[1]);
      
    y.style.display = null;
    var name = JSON.parse(cookie)["First_name"];
    z.innerHTML = name;
      
    if (JSON.parse(cookie)["User_type"] =="ADMIN"){  
      b.style.display = null;
   }else if (window.location.href.indexOf("admin") > -1){
     window.location.replace("https://mrredstone2.github.io/CITComputerClub2/home");
   }
    }
  catch(err){
    x.style.display = null;
    if (window.location.href.indexOf("admin") > -1) {
    window.location.replace("https://mrredstone2.github.io/CITComputerClub2/home");
          }  
      }
  }

window.addEventListener('resize', () => {
  var x = document.getElementById("calander-dropdown");
  if (window.innerWidth < 1000) {
    x.style.display= "none";
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

function deleteCookie(name) {
 document.cookie = name+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/CITComputerClub2;";
}

function logout() {
  deleteCookie("User");
  window.location.href = 'https://mrredstone2.github.io/CITComputerClub2/home';
}

function calclick(){
  var x = document.getElementById("calander-dropdown");
  if (window.innerWidth < 1000) {
    window.location.href = "https://mrredstone2.github.io/CITComputerClub2/calender";
  } else if (x.style.display == "none"){
    x.style.display = "block";
  } else{
    x.style.display= "none";
  }
}

function usrLogin() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
   
  var email = document.getElementById("emailogin").value;
  var pass = document.getElementById("psw").value;

  var raw = JSON.stringify({
    "email": email,
    "password": pass
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://computerclub.duckdns.org/login", requestOptions)
    .then(async response => {
      var result = response.headers.get('content-type')?.includes('application/json') ? await response.json() : null;
            if (result.error == null){
              document.cookie = "User="+result.token+"; path=/CITComputerClub2;";
              location.reload();
            } else {
              alerts(result.error);
            }
     })
    .catch(error => console.log('error', error));
   }

function alerts(message, extra){
  var x = document.getElementById("message"+extra);
  var popup = document.getElementById("alert"+extra);
  popup.style.display='block';
  x.innerHTML = message;
}
  
console.log("loaded main");
