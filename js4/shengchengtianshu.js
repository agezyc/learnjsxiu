var days =document.getElementsByClassName('votebootom');
var i = 1;
var flag = localStorage.c;
var numdays;
console.log(flag);
// localStorage.c= 1;
var sha;
var talkTalk;
var playerTalk; 
var allVote;


if(flag==1) {
 
    console.log("杀手人数"+ localStorage.shashou + "," + "平民人数" + localStorage.pingmin);
   
    localStorage.days = 1;
    days[0].innerHTML =   
           
    '<div class="tagtaiben">' +			
    '<div class="coltaiben">'+
    '<p id= "nowdays">第1天</p>'+
    '</div>'+
    '<div class="dicusskuai" id="btndays">'+
    '<div class="arrowcenter">'+
    '<div class="arrow-top"> <em></em><span></span></div>'+
    '</div>'+
    '<div class="votevoteboxrowtaiben">'+
    '<div class="talkbalen">'+
    '<div class="circle1"><div class="sun"><img src="img/no2_03.png" alt=""></div></div>'+
    '<div class="arrow-left"></div><div class="taldis" id = "killsren"><span>杀手杀人</span></div>'+
    '</div>'+
    '</div>'+
    '<div class="votevoteboxrowtaiben">'+
    '<div class="talkbalen">'+
    '<div class="circle1"><div class="sun"><img src="img/no2_07.png" alt=""></div></div>'+
    '<div class="arrow-left"></div><div class="taldis" id = "talkTalk"><span>亡灵发表遗言</span></div>'+
    '</div>'+
    '</div>'+
    '<div class="votevoteboxrowtaiben">'+
    '<div class="talkbalen">'+
    '<div class="circle1"><div class="sun"><img src="img/no2_07.png" alt=""></div></div>'+
    '<div class="arrow-left"></div><div class="taldis" id = "playerTalk"><span>玩家依次发言</span></div>'+
    '</div>'+
    '</div>'+
    '<div class="votevoteboxrowtaiben">'+
    '<div class="talkbalen">'+
    '<div class="circle1"><div class="sun"><img src="img/no2_07.png" alt=""></div></div>'+
    '<div class="arrow-left"></div><div class="taldis" id = "allVote"><span>全民投票</span></div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>';
    sha = document.getElementById('killsren');
    talkTalk = document.getElementById('talkTalk');
    playerTalk = document.getElementById('playerTalk');
    allVote = document.getElementById('allVote');
    localStorage.d =0;   
    localStorage.page = days[0].innerHTML;

}
else {
    if(localStorage.d == '5'){ 
        localStorage.d = 0; 
        console.log('当天结束' +localStorage.d);
        numdays = Number(localStorage.days) +1;
        localStorage.days = numdays;
        pageZeng(localStorage.page,localStorage.days);
        selectUi (Number(localStorage.days))
        
    // Number(localStorage.d) +=1;
    }
    else {
        days[0].innerHTML += localStorage.page;
        selectUi (Number(localStorage.days));
    }
}

var kuai =  document.getElementsByClassName('dicusskuai');
// console.log(kuai);


for(let i=0;i<kuai.length-1;i++){
    kuai[i].className+=' misdislay';
}

console.log('local days '+localStorage.days);

var nowday = document.getElementsByClassName('tagtaiben').length;

localStorage.days = nowday;


function pageZeng(local,i){
    var days =document.getElementsByClassName('votebootom');

local +=           
'<div class="tagtaiben">' +			
'<div class="coltaiben">'+
'<p id ="nowdays">第'+ i + '天</p>'+
'</div>'+
'<div class="dicusskuai" id="btndays">'+
'<div class="arrowcenter">'+
'<div class="arrow-top"> <em></em><span></span></div>'+
'</div>'+
'<div class="votevoteboxrowtaiben">'+
'<div class="talkbalen">'+
'<div class="circle1"><div class="sun"><img src="img/no2_03.png" alt=""></div></div>'+
'<div class="arrow-left"></div><div class="taldis" id = "killsren'+ i + '"><span>杀手杀人</span></div>'+
'</div>'+
'</div>'+
'<div class="votevoteboxrowtaiben">'+
'<div class="talkbalen">'+
'<div class="circle1"><div class="sun"><img src="img/no2_07.png" alt=""></div></div>'+
'<div class="arrow-left"></div><div class="taldis" id = "talkTalk'+ i + '"><span>亡灵发表遗言</span></div>'+
'</div>'+
'</div>'+
'<div class="votevoteboxrowtaiben">'+
'<div class="talkbalen">'+
'<div class="circle1"><div class="sun"><img src="img/no2_07.png" alt=""></div></div>'+
'<div class="arrow-left"></div><div class="taldis" id = "playerTalk'+ i + '"><span>玩家依次发言</span></div>'+
'</div>'+
'</div>'+
'<div class="votevoteboxrowtaiben">'+
'<div class="talkbalen">'+
'<div class="circle1"><div class="sun"><img src="img/no2_07.png" alt=""></div></div>'+
'<div class="arrow-left"></div><div class="taldis" id = "allVote'+ i + '"><span>全民投票</span></div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>';
   
    days[0].innerHTML +=local;
    localStorage.page = local;
}



function selectUi (i) {
    switch(i){
        case 1:
            sha = document.getElementById('killsren');
            talkTalk = document.getElementById('talkTalk');
            playerTalk = document.getElementById('playerTalk');
            allVote = document.getElementById('allVote');
            break;
        case 2:
            sha = document.getElementById('killsren2');
            talkTalk = document.getElementById('talkTalk2');
            playerTalk = document.getElementById('playerTalk2');
            allVote = document.getElementById('allVote2');
            break;
        case 3:
            sha = document.getElementById('killsren3');
            talkTalk = document.getElementById('talkTalk3');
            playerTalk = document.getElementById('playerTalk3');
            allVote = document.getElementById('allVote3');
            break;
        case 4:
            sha = document.getElementById('killsren4');
            talkTalk = document.getElementById('talkTalk4');
            playerTalk = document.getElementById('playerTalk4');
            allVote = document.getElementById('allVote4');
            break;
        case 5:
            sha = document.getElementById('killsren5');
            talkTalk = document.getElementById('talkTalk5');
            playerTalk = document.getElementById('playerTalk5');
            allVote = document.getElementById('allVote5');
            break;
        case 6:
            sha = document.getElementById('killsren6');
            talkTalk = document.getElementById('talkTalk6');
            playerTalk = document.getElementById('playerTalk6');
            allVote = document.getElementById('allVote6');
            break;
        case 7:
            sha = document.getElementById('killsren7');
            talkTalk = document.getElementById('talkTalk7');
            playerTalk = document.getElementById('playerTalk7');
            allVote = document.getElementById('allVote7');
            break;
        case 8:
            sha = document.getElementById('killsren8');
            talkTalk = document.getElementById('talkTalk8');
            playerTalk = document.getElementById('playerTalk8');
            allVote = document.getElementById('allVote8');
            break;
        case 9:
            sha = document.getElementById('killsren9');
            talkTalk = document.getElementById('talkTalk9');
            playerTalk = document.getElementById('playerTalk9');
            allVote = document.getElementById('allVote9');
            break;
    }
    // body
}

