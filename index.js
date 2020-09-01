 var number=document.querySelectorAll(".drum").length;
;
for(var i=0;i<number;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
      var buttonInnerHtml=this.innerHTML
      makeSound(buttonInnerHtml);
      buttonAnimation(buttonInnerHtml);
    });  
}
document.addEventListener("keydown",function(event){
    makeSound(event.key);/*the property key for event tells us which key was pressed*/
    buttonAnimation(event.key);
});
/*main function */ 
function makeSound(key){
    switch(key){
        case"w":
           var audioTom1=new Audio("tom-1.mp3");
           audioTom1.play();
           break;
        case"a":
           var audioTom2=new Audio("tom-2.mp3");
           audioTom2.play();
           break;
        case"s":
           var audioTom3=new Audio("tom-3.mp3");
           audioTom3.play();
        break;
        case"d":
           var audioTom4=new Audio("tom-4.mp3");
           audioTom4.play();
        break;
        case"j":
           var audioSnare=new Audio("snare.mp3");
           audioSnare.play();
        break;
        case"k":
           var audioCrash=new Audio("crash.mp3");
           audioCrash.play();
        break;
        case"l":
           var audioKick=new Audio("kick-bass.mp3");
           audioKick.play();
        break;
        default:
            console.log(key);
    }
}
function buttonAnimation(currentKey){
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
     activeButton.classList.remove("pressed");
  },100)
}