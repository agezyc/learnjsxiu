var node = document.getElementsByClassName('box');
var arr = [0,1,2,3,4,5,6,7,8]
var result = [];
var total =3;
var flag;
var colors = [];
var dq = null;

function getRandomColor( ) {
    var rand = Math.floor(Math.random( ) * 0xFFFFFF).toString(16);
    if(rand.length == 6){
        return rand;
    }else{
        return getRandomColor();
    }
}


function isRepeat(arr){
    var hash = {};    
    for(var i in arr) {
    if(hash[arr[i]]) //hash 哈希
        return true;
        hash[arr[i]] = true;
}
    return false;
    
}



function s(){
        
        for(var i=0;i<9;i++){
            node[i].style.background = '#ffa500';
            
        }

        for(var i=0; i< total; i++){
            var ran = Math.floor(Math.random() * (arr.length - i));
            result.push(arr[ran]);
            arr[ran] = arr[arr.length-i-1];
        }

        // while (colors.length < 3){
        //     var color = "#";
        //     for (var i = 0; i < 3; i++) {
        //         var n = Math.round((Math.random() * 255));
        //         console.log(n);
        //         if (n <= 16) {
        //             color += "0";
        //             color += n.toString(16);
        //         } else {
        //             color += Math.round((Math.random() * 255)).toString(16);
        //         }
        //     }
        //     colors.push(color);
        // }
     
            while(colors.length<3){
                if(!isRepeat(colors)){
                    var f = "#" + getRandomColor();
                    colors.push(f);
                }
                else {
                    colors = [];
                }
   
            }
           
        console.log(result);
        console.log(colors);
        node[result[0]].style.background = colors[0];
        console.log(result[0] + colors[0]);
        node[result[1]].style.background = colors[1];
        node[result[2]].style.background = colors[2];
        colors =[];
        arr = [0,1,2,3,4,5,6,7,8];
        result=[];
    
    // body
        
    }

    
   
function start(){
    clearInterval(dq);
    dq = setInterval(s,1000);
}

function stop (arguments) {
    // body
    for(var i=0;i<9;i++){
        node[i].style.background = '#ffa500';
        
    }
   clearInterval(dq);  
}