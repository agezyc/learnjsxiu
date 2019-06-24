function getnumber() {
    var a=document.getElementById("renshu").value; 
    alert(a); 
}

function defineProperty(obj, attr){
    var val;
    var doct1;
    var kill1;
    var archive = [];
    
    Object.defineProperty(obj, attr, {
        get: function () {
            return val;
        },
        set: function (newValue) {
            if (newValue === val){
                return;
            }
            val = newValue;
            if(newValue==18){
                doct1 = 5;
                kill1 = 13

            }
            else if(newValue <18 && newValue >3){
                doct1 = parseInt(newValue/3);
                kill1 = newValue - doct1;
            }
            else {
                doct1 = "";
                kill1 = "";
            }
            document.getElementById("renshu").value = newValue;
            
            document.getElementById("doct").innerHTML = doct1;
            document.getElementById("kill").innerHTML = kill1;
            archive.push({doct:doct1},{kill:kill1})
           
        }  
    }
    )
    this.getdefineProperty = function() { return archive; };
    ;
  
    
   
}

function randomstatus(val) {
    var shenfen=[];
    for(var i=1;i<=val; i++) {
        shenfen.push(i);
    }
    var shenfenlen = shenfen.length;
    var shuffled = shenfen.concat();
    for(var i = shenfenlen-1; i > 1; i--)
    {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled [j] = temp;
    }
    return shuffled;
}


var obj = {};
defineProperty(obj, "txt");




function fenpeishenfen(arr,shenfen){
    var fenpei =[];
    var killstatus ='杀手';
    var peoples = '平民';
    for(var key  in arr){
        if(shenfen > 0){
            fenpei[key] = killstatus;
            shenfen--;
        }
        else{
            fenpei[key] = peoples;
            
        }
    }
    return fenpei;
}
// console.log(doctnum.getdefineProperty()); 
document.getElementById("renshu").addEventListener("keyup", function(e){
    obj.txt = e.target.value;
    console.log(fenpeishenfen(randomstatus(obj.txt),document.getElementById("doct").innerHTML));
    console.log(randomstatus(obj.txt));
   
    
});

document.getElementById('gotofa').addEventListener("click",function(e){
    var reg = new RegExp(/^[4-9]|^1[0-8]$/ig);  
    if(!reg.test(document.getElementById('renshu').value)){
        alert("请输入4-18之间的数字");
    }
    else{
        window.location.href="fanpai1.html";
    }
 
    console.log(document.getElementById('renshu').value);
});


