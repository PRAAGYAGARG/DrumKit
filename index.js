//Detecting drum button press on website
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i = 0 ; i<numberOfDrumButtons ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//Detecting keyboard ki key press on website if pressed by user
document.addEventListener("keydown",function(event){
    makeSound(event.key); //event.key gives the char on keyboard that was pressed
    buttonAnimation(event.key); 
});

//makeSound functn that runs if key is pressed or drum button on screen is pressed
function makeSound(key){
    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey){
    //The currentKey is a single char like w , a, s, d,etc
    //querySelector is to access class we need "." also so added it
    var activeButton = document.querySelector("."+currentKey); 
    activeButton.classList.add("pressed");
    window.setTimeout(function(){
        activeButton.classList.remove("pressed");
    } , 100);
}


