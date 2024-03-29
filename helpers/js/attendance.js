function getAttendance(position){
       
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
     
     
    var user = getCookie("User");
    var cookies = user.split(".");
    var cookiese = atob(cookies[1]);
    cookiese = JSON.parse(cookiese) 
     
    var raw = JSON.stringify({
        "latitude": String(position.coords.latitude),
        "longitude": String(position.coords.longitude),
        "user_id": cookiese.Uid
    });

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
    alerts("Geolocation is not supported by this browser.");
  };
}

  function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      alerts("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alerts("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alerts("The request to get user location timed out.")
      break;
    case error.UNKNOWN_ERROR:
      alerts("An unknown error occurred.");
      break;
  }
  }
  
  var day = new Date();
  if (day.getDay() != 5 || day.getHours() != 16){
      document.getElementById("attendenceButton").disabled = true; 
      alerts("Attandance can only be done during meeting hours!");
  }
  
