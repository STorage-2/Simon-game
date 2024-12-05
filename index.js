var buttonColors = ["red", "blue", "yellow", "green"];
var gamePattern = [];
var randomChosenColour;
var userClickedPattern = [];
var level = 0;
       

function nextSequence(){
  userClickedPattern = [];
    var randNum = Math.floor(Math.random()*4);
  
    level++;
     $("h1").text("level " + level);
    

    randomChosenColour = buttonColors[randNum];
    gamePattern.push(randomChosenColour);

        
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
 
}

$(".btn").on("click", function() { 
    
       
    
       
  var userChosenColour = $(this).attr("id"); 
  

  
  userClickedPattern.push(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
  


  var audio = new Audio("sounds/" + userChosenColour + ".mp3");
  audio.play();
  animatePress(userChosenColour);
});


function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
}, 100);
}

$(document).keydown(function(){
  if (level === 0) { 
    $("h1").text("level " + level); 
    nextSequence();
  }

});

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
      
    }
  } else {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    console.log("wrong");
  }
}

function startOver(){
  
  gamePattern = [];
  level = 0;
  $("body").removeClass("game-over");
  $("h1").text("Level 0");
  nextSequence();
}


