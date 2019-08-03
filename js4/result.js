console.log(localStorage.days);
var suc = document.getElementById('ruc'); 
var days = localStorage.days;
var medications = JSON.parse(window.localStorage.getItem('yongyaofanan'));

var resultAll = JSON.parse(window.localStorage.getItem('alls'));
console.log(resultAll);
// var weekArray ;
// //localStorage 连续存对象，累加对象等；
// //存：
// localStorage.setItem('weekDay',JSON.stringify(weekArray));
// //取：
//  weekArray = JSON.parse(localStorage.getItem('fff'));
// var items = '周一';

// var fff = {
//     getItem:function(){
//         return JSON.parse(window.localStorage.getItem('all'))||{};//取值
//     },
//     setItem:function(item){
//         window.localStorage.setItem('all',JSON.stringify(item));//存值
//         ObjAll = item;
//     },
//     update:function(key,value){
//         var item = this.getItem();
//         item[key] = value;
//         this.setItem(item);
//     }
// }
// /*
// * 存值
// */
// fff.update(0,items);
// fff.update(3,items);
// fff.update(4,items);
// /*
// * 累加存值
// */
// var alls = [];
// var jisons = JSON.parse(window.localStorage.getItem('fff'));
// if(jisons != null){
// 　　alls.push(jisons);
// };
// fff.update(2,items);
// fff.update(5,items);
// fff.update(8,items);
// /*
// * 取值
// */

// window.localStorage.setItem('all',JSON.stringify(alls));

// var medications = JSON.parse(window.localStorage.getItem('all'));
// console.log(medications);

// var jisons = JSON.parse(window.localStorage.getItem('fff'));

console.log(resultAll[1]);
console.log(Number(days));
console.log(Object.keys(resultAll[1]))
console.log(Object.values(resultAll[1]))

var playerNo;
var playerName;

function outNull(obj){
    
    for(let i=0;i<=Number(days);i++)
        {
            if(obj[i] == null)
            {
                obj[i] = "无";
            }
        }
    return obj;
}


for(var i=1;i<=Number(days);i++) {
    var playerNo1 = Object.keys(resultAll[i]);
    var playerName1 = Object.values(resultAll[i]);
    playerNo = outNull(playerNo1);
    playerName = outNull(playerName1);

    var res ="<div class='resbotrowbody'>" +
    "<div>" +
    "<div class='resbotrow1'>"+ "<span>" + '第' +i+ '天' +"</span><span></span></div>"+
    "<div class='resbotrow2'>" + "<span>晚上:"+playerNo[0]+"号被杀手杀死," + playerNo[0]+ "号身份是" + playerName[0]+ "</span></div>"+
    "<div class='resbotrow2'><span>白天:"+playerNo[1]+"号被全民投票" + playerNo[1]+ "号身份是" + playerName[1]+ "</span></div></div>"+
    "</div>"
    suc.innerHTML += res;
}