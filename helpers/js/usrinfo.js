 var user = getCookie("User");
        var cookies = user.split(".");
        var cookie = atob(cookies[1]);
        var userid = JSON.parse(cookie).Uid;
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
 
 
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
 var data = "";
fetch("https://computerclub.duckdns.org/userdata/"+userid, requestOptions)
  .then(response => response.text())
  .then(result => {
 
 
 data = JSON.parse(result);
 
 document.getElementById("fname").value = data.first_name;
 document.getElementById("lname").value = data.last_name;
 document.getElementById("emailid").value = data.email;
 
 console.log(data.email+";"+data.CSHS+";"+data.user_type);
 console.log(document.getElementById("fname").value +";"+ document.getElementById("lname").value +";"+ document.getElementById("emailid").value);
 
 if (data.CSHS == "CSHS_Member"){
 document.getElementById("cshs").checked = true
 }else{document.getElementById("cshs").checked = false}
 if (data.user_type == "ADMIN"){
 document.getElementById("adminss").checked = true
 } else{document.getElementById("adminss").checked = false}
 })
 .catch(error => console.log('error', error));
