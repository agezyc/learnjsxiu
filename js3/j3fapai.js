var shenfendata = JSON.parse(localStorage.getItem('shashou1'));
var tempshenfen=1;
console.log(shenfendata);


function fu (arguments) {
    window.location.href = "discuss.html";  // body
}


document.getElementById("looks1").addEventListener("click", function(e){
    if(tempshenfen == shenfendata.length) {
        var shfennum2 = document.getElementById('shenfennum2');
        shfennum2.innerHTML = tempshenfen +1
        document.getElementById('juese').innerHTML = shenfendata[tempshenfen-1];
        document.getElementsByClassName('boxhome')[0].style.display = 'none';
        document.getElementsByClassName('boxhome2')[0].style.display = 'block';
        document.getElementById("looks1").innerHTML = '法官查看';
        document.getElementById("looks1").onclick = fu;
    }
    else
    {
        var obj = document.getElementsByClassName('shenfennum');
        for(i=0;i<3;i++){
            a=obj[i].innerText;
            obj[i].innerHTML = tempshenfen;
        }
        var shfennum2 = document.getElementById('shenfennum2');
        shfennum2.innerHTML = tempshenfen +1
        document.getElementById('juese').innerHTML = shenfendata[tempshenfen-1];
        document.getElementsByClassName('boxhome')[0].style.display = 'none';
        document.getElementsByClassName('boxhome2')[0].style.display = 'block';
        document.getElementById("looks1").style.display = 'none';
        document.getElementById("looks2").style.display = 'block';
    }

});

document.getElementById("looks2").addEventListener("click", function(e){
    tempshenfen++;
    var obj = document.getElementsByClassName('shenfennum');
    for(i=0;i<3;i++){
        a=obj[i].innerText;
        obj[i].innerHTML = tempshenfen;
       }
    var shfennum2 = document.getElementById('shenfennum2');
    shfennum2.innerHTML = tempshenfen +1
    
    document.getElementById('juese').innerHTML = shenfendata[tempshenfen-1];
    document.getElementsByClassName('boxhome')[0].style.display = 'block';
    document.getElementsByClassName('boxhome2')[0].style.display = 'none';
    document.getElementById("looks1").style.display = 'block';
    document.getElementById("looks2").style.display = 'none';

});