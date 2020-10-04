for(var i=0;i<document.querySelectorAll(".drum").length;i++) {
document.querySelectorAll("button")[i].addEventListener("click",function (){
   var innerhtml=this.innerHTML;
    makeSound(innerhtml);
});
}
    document.addEventListener("keypress",function(event){
        makeSound(event.key);
    });
 function makeSound(key){
    switch (key) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3")
            audio.play();
            break;
         
         case "a":
             var audio=new Audio("sounds/tom-2.mp3")
            audio.play();
            break;
         case "s":
             var audio=new Audio("sounds/tom-3.mp3")
            audio.play();
            break;
         case "d":
             var audio=new Audio("sounds/tom-4.mp3")
            audio.play();
            break;
         case "j":
             var audio=new Audio("sounds/crash.mp3")
            audio.play();
            break;
         case "k":
             var audio=new Audio("sounds/kick-bass.mp3")
            audio.play();
            break;
         case "l":
             var audio=new Audio("sounds/snare.mp3")
            audio.play();
            break;
    
        default:
            break;
    }
 }

 function buttonAnimation(currentKey){
     var activeButton= document.querySelector("."+ currentKey);
     activeButton.classList.add("pressed");
 }


