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
   function getAttendance(position){
       
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
     
     
    var user = getCookie("User");
     console.log(user);
    var cookies = user.split(".");
     console.log(cookies);
    var cookiese = atob(cookies[1]);
     console.log(cookiese);
    cookiese = JSON.parse(cookiese) 
     console.log(cookiese.Uid);
     
      var raw = JSON.stringify({
        "latitude": String(position.coords.latitude),
        "longitude": String(position.coords.longitude),
        "user_id": cookiese.Uid
      });
     console.log(raw);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
            var res = "";
      fetch("https://computerclub.duckdns.org/attendance", requestOptions)
        .then(async response => {res = response.headers.get('content-type')?.includes('application/json') ? await response.json() : null;
       console.log(res);
        if (res.error == null){
          alerts("Success");
        } else {
          alerts(res.error);
        }
                  })
     .catch(error => alerts(error));
     
     
  }
  var x = document.getElementById("message");
  var popup = document.getElementById("alert");
  function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getAttendance, showError);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  };
  popup.style.display='block';
}

  function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
  }
  
  var day = new Date();
  if (day.getDay() != 5 || day.getHours() != 16){
      document.getElementById("attendenceButton").disabled = true; 
      alerts("Attandance can only be done during meeting hours!");
  }
  
  function alerts(message){
   var x = document.getElementById("message");
  var popup = document.getElementById("alert");
  popup.style.display='block';
  x.innerHTML = message;
}
