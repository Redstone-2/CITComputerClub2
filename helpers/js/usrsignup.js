document.getElementById("my_button").addEventListener("click", makeUsr);

function makeUsr(ev){
  ev.preventDefault(); 
  ev.stopImmediatePropagation(); 
  
var form = document.getElementById("loginForm");
var fname = document.getElementById("fname").value;
var lname = document.getElementById("lname").value; 
var pswor = document.getElementById("pswor").value;
var email = document.getElementById("emaile").value;
  if (!fname || !lname || !pswor || !email){
    alerts("Please provide all required data");
  }
  
 var checkBox = document.getElementById('cshs');
 if (checkBox.checked == true){
   var cshs = "ADMIN";
 } else {
   var cshs = "USER";
 }
  
var checkBox = document.getElementById('admin');
 if (checkBox.checked == true){
   var admin = "CSHS_Member";
 } else {
   var admin = "Not_CSHS";
 }
 
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
 
var raw = JSON.stringify({
  "First_name": fname,
  "Last_name": lname,
  "Password": pswor,
  "Email": email,
  "User_type": admin,
  "CSHS": cshs
});
 
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
 
fetch("https://computerclub.duckdns.org/admin/signup", requestOptions)
  .then(async response =>  {console.log(response);
       var result = response.headers.get('content-type')?.includes('application/json') ? await response.json() : null;
        if (result.error == null){
          alerts("Success");
        } else {
          alerts(result.error);
        }
   })
  .catch(error => alerts(error))
}
