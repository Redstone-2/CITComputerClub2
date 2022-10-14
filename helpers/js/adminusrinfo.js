function loadUser(){  
  var inp = document.getElementById("name").value.toLowerCase();
  var dummy = "";
  
  for (var i = 0; i < res.length; i++){
    dummy = res[i].first_name + " " + res[i].last_name;
    if (inp == dummy.toLowerCase()){
      
      
      document.getElementById("usrform").style.display = "block";
      document.getElementById("alert").style.display = "none";
      
      
       document.getElementById("fname").value = res[i].first_name;
       document.getElementById("lname").value = res[i].last_name;
       document.getElementById("email").value = res[i].email;
       document.getElementById("date").value = new Date(res[i].login_date).toLocaleString();

       if (res[i].cshs == "CSHS_Member"){
       document.getElementById("cshs").checked = true
       }else{document.getElementById("cshs").checked = false}
       if (res[i].user_type == "ADMIN"){
       document.getElementById("adminss").checked = true
       } else{document.getElementById("adminss").checked = false}
      return;
      
    }else {
      document.getElementById("usrform").style.display = "none";
      document.getElementById("alert").style.display = "block";
      document.getElementById("message").innerHTML = "That user does not exist.";
    }
  }
}

document.getElementById("delbtnconf").disabled = true;
  var myHeaders = new Headers();
myHeaders.append("token", getCookie("User"));
 
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
 var res = "";
fetch("https://computerclub.duckdns.org/admin/users", requestOptions)
  .then(async response => {var res = response.headers.get('content-type')?.includes('application/json') ? await response.json() : null;
    res = res.data;
                           
    if (res.error != null){
        alerts(res.error);
        return;
        }
    res = makeNames('YWxleEBnbWFpbC5jb20=', res);
    console.log(res);
    for (var i = 0; i < res.length; i++){
      var elementname = document.createElement("option");
      elementname.value = res[i];
      var card = document.getElementById("names")
      card.appendChild(elementname);
      }
    })
  .catch(error => {console.log('error', error);
      alerts("There has been a connection error. Check console for more info.");
                 });

  
     document.getElementById("loadinfo").addEventListener("click", loadUser);

   document.getElementById("name").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  
      loadUser();
    }
  });
   document.getElementById("delconf").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  
      if (document.getElementById("delconf").value === "DELETE"){
      document.getElementById("delbtnconf").disabled = false;
      }}});

//connectivity code
function makeNames(nulls, res){
    var names = [];
    var dudummm = atob(nulls).split(",");
  console.log(dudummm);
  console.log(res);

    for (var i = 0; i < res.length; i++){
          var tr = 1;
      for (var o=0;o<dudummm.length;o++)
      	{
        if(res[i].email.normalize() == dudummm[o].normalize()){tr = 0}};
      if (tr == 1){
      names.push(res[i].first_name + " " + res[i].last_name);
      }
    };

     return names;
  }
