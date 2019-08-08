var btn =document.getElementById('btn');
var error = document.getElementById('errors');

btn.addEventListener("click",function(){
  
  var loginname = document.getElementById('loginname').value;
  var loginpassword =document.getElementById('loginpassword').value;
    // alert(loginname + loginpassword);
  var data = "name=" + loginname + " &pwd=" + loginpassword;
    // var xhr = new XMLHttpRequest(); //定义XMLHTTPREQUEST
    // xhr.open("GET", url, false);    //同步方式请求 

  var xhr = new XMLHttpRequest();
  console.log(data);
  //1、创建创建Ajax对象
  

   
  xhr.onreadystatechange = function(e) {//Call a function when the state changes.
    
      if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
          // 请求结束后,在此处写处理代码
          var resdata = JSON.parse(xhr.responseText);
          var code = resdata.code
            console.log(loginname);
            console.log(loginpassword);
            console.log(resdata);
          if(code === 0) {
            
            window.location.href='http://dev.admin.carrots.ptteng.com';
          }
          else if(code == -5004){
            error.innerHTML ="密码错误";
          }
          else {
            error.innerHTML ="用户名不存在";
          }
      }
  }
  xhr.open("POST", '/carrots-admin-ajax/a/login', true);
  //发送合适的请求头信息
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(data);
    // xhr.open("GET", url, true);     //异步,第三个参数决定是否异步


    // 上面是一个代码，浏览器在发起一个ajax请求，会单开一个线程去发起http请求，这样的话就能把这个
    // 耗时的过程单独去自己跑了，在这个线程的请求过程中，readystate 的值会有个变化的过程，每一次变化就触发一
    // 次 onreadystatechange 函数，进行判断是否正确拿到返回结果。


})


