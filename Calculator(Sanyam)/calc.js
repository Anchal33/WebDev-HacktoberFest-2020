
//log like history 
// cannot hold data more than once run
let history=[];

function writeinscreen(x){
    
    
    x=String(x);
    if (x!="AC" && x!="="){
        document.getElementById("screen").innerHTML+=x;
       
    }
    if (x=="AC"){
        document.getElementById("screen").innerHTML="";
       
    }

    if (x=="b"){
        let tempcont="";
        let content=document.getElementById("screen").innerText;
        if (content.length!=0){
            for (let i=0;i<(content.length-2);i++){
                tempcont+=content.charAt(i);
                console.log(content.charAt(i))    
            }
        }
        console.log(tempcont);
        document.getElementById("screen").innerHTML=tempcont;           
        tempcont="";
    }

    if (x=="="){

        try{
            let content=document.getElementById("screen").innerText;
            let content_to_put=document.getElementById("screen").innerText;
            content=content.replace("x","*");
            console.log(content);
            
            let processedcontent=eval(content);
            history.push(content_to_put);
            document.getElementById("screen").innerHTML+=" = "+processedcontent;

            setTimeout(function(){
                document.getElementById("screen").innerHTML="";
            },1500);

        }
        catch(err){
            
            document.getElementById("screen").innerHTML="SYNTAX ERROR!"
            console.log(err);
            setTimeout (function(){
                document.getElementById("screen").innerHTML="";
            },1500)

        }
    }
}

//pointer like in database in python 
let pointer=history.length
function showhistory(x){
    
    document.getElementById("screen").innerHTML="";
    if (x=="UP"){
        pointer--;
    }
    if (x=='DOWN'){
        pointer++;
    }
    if (pointer>history.length){
        pointer=0;
    }
    if (pointer<0){
        pointer=history.length;
    }
    if (history[pointer]!=undefined){

        document.getElementById("screen").innerHTML=history[pointer];
    }
    
}