var shenfendata = JSON.parse(localStorage.getItem('shashou1'));
var tempshenfen=1;
var flag = localStorage.a;
var zhuangtai  = localStorage.b;
console.log(shenfendata);
var vtrow = document.getElementsByClassName('voteboxrow');
console.log(localStorage.state);
console.log(localStorage.current);
var strUrl=window.location.href;
var arrUrl=strUrl.split("/");
var strPage=arrUrl[arrUrl.length-1];
var ff = {};



if(flag == 0){
 

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
    var msg = "确定要投此玩家吗？\n\n请确认！";
    if (confirm(msg)==true){
    havekill =1;
    return true;
    }else{
    return false;
    }
}
    
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

var btn = document.querySelector('body');
var rs = document.getElementById('gameResult');

rs.addEventListener('click',function(e){
    pp = Number(localStorage.pingmin);
    ss = Number(localStorage.shashou);
    if(pp<=0 || ss<=0) {
        window.location.href = "result.html";
    }
    else if(havekill==1) {
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
var havekill;

btn.addEventListener('click',function(e){
    var title = e.target.id;
    var wanjia = e.target;
    if(wanjia.className=='vbctop'){    
        if(strPage == 'kill-vote.html'){
            if(del()){
                wanjia.className = "fb";
                if(wanjia.innerHTML == '平民'){
                    p = localStorage.pingmin;
                    p = Number(p)-1;
                    pnum = wanjia.id;
                    localStorage.pingmin = p;
                    console.log(localStorage.pingmin);
                    daysRes.update(pnum,wanjia.innerHTML);
                }
                else if(wanjia.innerHTML == '杀手'){
                    s = localStorage.shashou;
                    s = Number(s)-1;
                    snum = wanjia.id;
                    localStorage.pingmin = s;
                    console.log(localStorage.shashou);
                    daysRes.update(snum,wanjia.innerHTML);
                    console.log(localStorage.shashou);
                }

            }
        }
    }
    
    
    //第2天再组合一个数组对象，然后再和前一天连接起来，最后再存储起来
    // var alls =[];                
    // var nowdays = Number(localStorage.days) -1;
    // console.log(nowdays);
    // var jisons = JSON.parse(window.localStorage.getItem('yongyaofanan'));
    
    var nowvotte = JSON.parse(window.localStorage.getItem('yongyaofanan'));
    
    // if(jisons != null){
    //     alls.push(nowvotte);
    // };
    // window.localStorage.setItem('alls',JSON.stringify(alls));
    // window.localStorage.setItem('yongyaofanan',JSON.stringify(ff));
    //     console.log(jisons);
    // var medications = JSON.parse(window.localStorage.getItem('yongyaofanan'));
    // console.log(medications);
    var resultDay = JSON.parse(window.localStorage.getItem('alls'));
    
    var nowdays = Number(localStorage.days);
    resultDay[nowdays]=clone(nowvotte);
    var deepCopy = clone(resultDay);
    console.log(deepCopy);
    console.log(resultDay);
    window.localStorage.setItem('alls',JSON.stringify(deepCopy));
   
    var faguanchakan = document.getElementById('faguan');
    localStorage.b = faguanchakan.innerHTML;
    console.log(wanjia);
},false)
console.log("杀手人数"+ localStorage.shashou + "," + "平民人数" + localStorage.pingmin);

 // 深拷贝
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
