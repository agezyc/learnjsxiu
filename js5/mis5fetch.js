//发送GET请求

var btn =document.getElementById('btn');

btn.addEventListener("click",function(){
    var loginname = document.getElementById('loginname').value;
    var loginpassword =document.getElementById('loginpassword').value;

    
    fetch('/carrots-admin-ajax/a/login', {
        method: 'POST',
        // body: new FormData(oForm)  //使用FormData HTML必须设置Form
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded' // 指定提交方式为表单提交
          }),
        body:new URLSearchParams([["name", loginname],["pwd", loginpassword]]).toString() 
        

    })
    .then((res)=>{
        console.log(res);
        return res.json()
    })
    .then((res)=>{
        console.log(res);
        if(res.code ===0){
            window.location.href='http://dev.admin.carrots.ptteng.com/#/login';
        }
    })
    // xhr.send(data);


    // alert(loginname + loginpassword);
    


})


