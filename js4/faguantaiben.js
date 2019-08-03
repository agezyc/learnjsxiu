var dayf = localStorage.days;


var dayspanduan = localStorage.d;
console.log('当前天数记录标记' + dayspanduan);

var fsm = StateMachine.create({
    error: function(eventName, from, to, args, errorCode, errorMessage) {
        　　　　　　alert('请按照顺序执行参数');
        　　　　},
    initial: 'nonediscuss',
    events: [
        {name: 'disucuss', from: 'nonediscuss', to: 'discussfinish'},
        {name: 'havefinish', from: 'discussfinish', to: 'votekill'},
        {name: 'votekill', from: 'votekill', to: 'votekillfinish'},
        {name: 'haveday', from: 'votekillfinish', to: 'alldays' }],
    callbacks: {
        onafterdisucuss: function(event, from, to) {
            console.log('杀手杀人');
            window.location.href = "sharren.html";
            localStorage.current = fsm.current;
            
        },
        
        onafterhavefinish: function(event, from, to) {
            alert('亡者发表遗言');
          
            localStorage.current = fsm.current;
              
        },
        onaftervotekill: function(event, from, to) {
            alert('玩家发表遗言');
          
        localStorage.current = fsm.current;
           
        },
        onbeforehaveday:function(event,from,to){
            dayspanduan=Number(dayspanduan) +1;
            localStorage.d = 5;
            localStorage.c = 0;
        },
        onafterhaveday: function(event, from, to) {
            console.log('投票谁是杀手');
            
            localStorage.current = 'nonediscuss';
            window.location.href = "kill-vote.html";
            
        }
        
    }
});



console.log('fsm初始化完毕！');
// var btn = document.getElementById('btndays');
// var sha = document.getElementById('killsren');
// var talkTalk = document.getElementById('talkTalk');
// var playerTalk = document.getElementById('playerTalk');
// var allVote = document.getElementById('allVote');
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

let body = document.querySelector('body');
selectUi(localStorage.days);
body.addEventListener('click',function(e){
    var f = e.target.innerHTML;
    
    
    // console.log(f.innerHTML[1]);
    if(isNaN(f[1]) == false) {
        var resultAll = JSON.parse(window.localStorage.getItem('alls'));
        var playerNo1 = Object.keys(resultAll[f[1]]);
        var playerName1 = Object.values(resultAll[f[1]]);
        var playerNo = outNull(playerNo1);
        var playerName = outNull(playerName1);
        console.log("晚上" + playerNo[0] + "号被杀手杀死" + "身份是" + playerName[0]);
        console.log("白天" + playerNo[1] + "号被全民投票投死" + "身份是" + playerName[1]);
    }
    
});


sha.addEventListener('click',function(e){
    fsm.disucuss();
    
  
//    fsm.current = localStorage.state;
//     console.log(localStorage.state);
dayspanduan=Number(dayspanduan) +1;
console.log(dayspanduan);

})
talkTalk.addEventListener('click',function(e){
    fsm.havefinish();
   
    dayspanduan=Number(dayspanduan) +1;
    console.log(dayspanduan);
 
 })

playerTalk.addEventListener('click',function(e){
    fsm.votekill();  
    dayspanduan=Number(dayspanduan) +1;
    localStorage.d = dayspanduan;
    console.log(dayspanduan);
 })

allVote.addEventListener('click',function(e){

    fsm.haveday();
    

    ;
 })
  

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

