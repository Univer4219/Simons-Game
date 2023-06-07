//Create a new array called button arrays and set it to hold the sequence red,blue,green and yellow
var buttonColors=["red","blue","green","yellow"];
//Create a new array called game pattern
var gamePattern=[];
//Create a new empty array with the name userClickedPattern
var userClickedPattern=[];


//Use jquerry to detect when any of the buttons are clicked and trigger a handler function
$(".btn").on("click",function(){
    //Inside the new function create a new variable called userChosenColor to store the id of the button that got clicked
    let userChosenColor=$(this).attr("id");
    //Add the content of the variable userChosenColor to the end of this new userClickedPattern
    userClickedPattern.push(userChosenColor);
    // console.log(userClickedPattern);//if you log the userClickedPattern you should be able to build up an array in the console by clicking on different buttons.
});

//create a new function called nextSequence()
function nextSequence(){
    //Generate a new random number between 0 & 3 and store in a variable called randomNumber
    let randomNumber=Math.floor(Math.random()*4);  
    //Create a new variable called randomChosenColor and use the randomNumber from the  above step to select a randomColor from the buttonColors array
    let randomChosenColor=buttonColors[randomNumber];
    //Add the new randomChosenColor generated to the end of the gamePattern
    gamePattern.push(randomChosenColor);
    //Use jquerry to select a button with the same id as randomChosenColor,
    //Use Google or Stack Overflow to figure out how you can use Jquerry to animate a flash to the button selected
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeIn(100);
    //Use Google/Stack Overflow to figure out how you can use Javascript to play the Sound for the button selected
    var audio=new Audio('Simon Game Challenge Starting Files/sounds/'+randomChosenColor+'.mp3');
    audio.play();
    // Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
    playSound(randomChosenColor);
}

//U.C CODE nextSequence();


//Create a new function called playSound that takes a single input parameter called name
function playSound(name){
    //Take the code we used to play sound in nextSequence() function and add it to playSound()
    var audio=new Audio('Simon Game Challenge Starting Files/sounds/'+name+'.mp3');
    audio.play();
}

//Create a new function called animatePress() that takes a single input parameter called currentColor
function animatePress(currentColor){
    //Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
    $("#"+currentColor).addClass("pressed");
    //Use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
    setTimeout(function(){
        $("#"+currentColor).removeClass();
    },100);
}

//U.C CODE animatePress();









