var shenfendata = JSON.parse(localStorage.getItem('shashou1'));
var tempshenfen=1;

var zhuangtai  = localStorage.b;
console.log(shenfendata);
var vtrow = document.getElementsByClassName('voteboxrow');

console.log(localStorage.state);

console.log(localStorage.current);
var strUrl=window.location.href;
var arrUrl=strUrl.split("/");
var strPage=arrUrl[arrUrl.length-1];
var flag = localStorage.a;


var daysRes = {
    getItem:function(){
        return JSON.parse(window.localStorage.getItem('yongyaofanan'))||{};//取值
    },
    setItem:function(item){
        
        window.localStorage.setItem('yongyaofanan',JSON.stringify(item));//存值
        ObjAll = item;
    },
    update:function(key,value){
        var item = this.getItem();
        item[key] = value;
        this.setItem(item);
    }
}




if(flag == 0){
var sss = {};
    window.localStorage.setItem('alls',JSON.stringify(sss));
for(var i=1;i<=shenfendata.length;i++){
    vtrow[0].innerHTML += "<div class='voteboxbody'>"+"<div class='voteboxchild'>"+"<div class='vbctop' id=  "+i+" >"+shenfendata[i-1]+"</div>"+
    "<div class='vbcbottom'>"+i+'号'+"</div>"+"</div>"+"<div class='iconrow'>"+"<a href='#'>"+"<img src='img/icon_1.png' id = 'killhe' alt=''>"+"</a>"+"</div>"+"</div>";
    ;
}
localStorage.a = 1;
}
else{
    vtrow[0].innerHTML += zhuangtai;
}
function parseDom(arg) {

　　 var objE = document.createElement("div");

　　 objE.innerHTML = arg;

　　 return objE.childNodes;

};

function del() {
    var msg = "确定要杀死此玩家吗？\n\n请确认！";
    if (confirm(msg)==true){
    return true;
    }else{
    return false;
    }
}``
    
console.log("杀手人数"+ localStorage.shashou + "," + "平民人数" + localStorage.pingmin);
var rs = document.getElementById('gameResult');

rs.addEventListener('click',function(e){
    pp = Number(localStorage.pingmin);
    ss = Number(localStorage.shashou);
    if(pp<=0 || ss<=0) {
        if(strPage == 'sharren.html'){
            window.location.href = "result.html";
           
            
   
        
    }}
    else {
        window.location.href = "faguanriji.html";
    }

})


var btn = document.querySelector('body');
var p;
var s;
var pp;
var ss;
var pnum;
var snum;


btn.addEventListener('click',function(e){
    var title = e.target.id;
    var wanjia = e.target;
 
    if(wanjia.className=='vbctop'){    
        if(strPage == 'sharren.html'){
            if(del()){
                wanjia.className = "fb";
                if(wanjia.innerHTML == '平民'){
                    
                    localStorage.removeItem("yongyaofanan"); //不能清除
                    p = localStorage.pingmin;
                    p = Number(p)-1;
                    pnum = wanjia.id;
                    localStorage.pingmin = p;
                    daysRes.update(pnum,wanjia.innerHTML);
                    var resultDay = JSON.parse(window.localStorage.getItem('alls'));
                    var nowdays = Number(localStorage.days);
                    var nowvotte = JSON.parse(window.localStorage.getItem('yongyaofanan'));
                    resultDay[nowdays]=clone(nowvotte);
                    window.localStorage.setItem('alls',JSON.stringify(resultDay));
                }
                else if(wanjia.innerHTML == '杀手'){
                    localStorage.removeItem("yongyaofanan"); //不能清除
                    s = localStorage.shashou;
                    s = Number(s)-1;
                    localStorage.shashou = s;
                    snum = wanjia.id;
                    daysRes.update(snum,wanjia.innerHTML);
                    console.log(localStorage.shashou);
                    var resultDay = JSON.parse(window.localStorage.getItem('alls'));
                    var nowdays = Number(localStorage.days);
                    var nowvotte = JSON.parse(window.localStorage.getItem('yongyaofanan'));
                    resultDay[nowdays]=clone(nowvotte);
                    window.localStorage.setItem('alls',JSON.stringify(resultDay));
                }
                
            }
        }
        
    }
    // var alls = [];
    // var jisons = JSON.parse(window.localStorage.getItem('yongyaofanan'));
    // if(jisons != null){
    // 　　alls.push(jisons);
    // };
    // window.localStorage.setItem('alls',JSON.stringify(alls));
    // console.log(alls);
    // var resultDay = JSON.parse(window.localStorage.getItem('alls'));
    // console.log(resultDay);


    console.log("杀手人数"+ localStorage.shashou + "," + "平民人数" + localStorage.pingmin);

    var faguanchakan = document.getElementById('faguan');
    localStorage.b = faguanchakan.innerHTML;
    console.log(wanjia);
},false)

//dom div转换

function clone(obj) { 
    if(obj === null) return null 
    if(typeof obj !== 'object') return obj;
    if(obj.constructor===Date) return new Date(obj); 
    var newObj = new obj.constructor ();  //保持继承链
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {   //不遍历其原型链上的属性
            var val = obj[key];
            newObj[key] = typeof val === 'object' ? arguments.callee(val) : val; // 使用arguments.callee解除与函数名的耦合
        }
    }  
    return newObj;  
};
