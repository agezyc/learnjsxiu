var shenfendata = JSON.parse(localStorage.getItem('shashou1'));
var tempshenfen=1;
console.log(shenfendata);

var vtrow = document.getElementsByClassName('voteboxrow');

for(var i=1;i<=shenfendata.length;i++){
    vtrow[0].innerHTML += "<div class='voteboxbody'>"+"<div class='voteboxchild'>"+"<div class='vbctop'>"+shenfendata[i-1]+"</div>"+
    "<div class='vbcbottom'>"+i+'号'+"</div>"+"</div>"+"<div class='iconrow'>"+"<a href='#'>"+"<img src='img/icon_1.png' alt=''>"+"</a>"+"<a href='#'>"+"<img src='img/icon_2.png' alt=''>"+"</a>"+"<a href='#'>"+"<img src='img/icon_3.png' alt=''>"+"</a>"+"<a href=''>"+"<img src='img/icon_4.png' alt=''>"+"</a>"+"</div>"+"</div>";
    ;
}

function parseDom(arg) {

　　 var objE = document.createElement("div");

　　 objE.innerHTML = arg;

　　 return objE.childNodes;

};

//dom div转换

