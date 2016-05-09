  "use strict";
  var score = 0;
  var currentQuestion = 0;
  var questionarray = [{
  statement: 'According to Batman Vol.1 #673, how long did Bruce Wayne train with "Ninja shadow masters" in the far east?',
  choices: ["one year", "two years", "five years", "eight years"],
  answer: "two years"

}, {
  statement: 'Dick Grayson chose "Robin" as his first superhero alias. What was the original reason for this?',
  choices: ["His mother nicknamed him Robin since he once leaped through the air to save his brother", "He intended to emulate Robin Hood", "It was his nickname when  he was performing with the circus.", "His mother nicknamed him Robin because he was born in the first day of Spring"],
  answer: "He intended to emulate Robin Hood"

}, {
  statement: "In Batman: The Animated Series, who became the Clock King?",
  choices: ["Temple Fugate", "Templeton Fugit", "William Tockman", "Victor Zasz"],
  answer: "Temple Fugate"

}, {
  statement: "Wayne Manor is generally thought to be how far outside of Gotham City?",
  choices: ["5 miles", "8 miles", "12 miles", "20 miles", "23 miles"],
  answer: "12 miles"

}, {
  statement: 'Which anthology contains a Batman Story by Isaac Asimov, who has been called the "grandfather of science fiction"?',
  choices: ["Tales of the Batman", "The Adventures of the Batman", "The Further Adventures of Batman, Vol 3", "Legends of the Batman"],
  answer: "Tales of the Batman"

}, {
  statement: "In the story Infinite Crisis, Batman became so infuriated with a villain that he drew a gun on him, who was this villain?",
  choices: ["William Hand", "Vandal Savage", "Alexander Luthor", "Professor Zoom"],
  answer: "Alexander Luthor"
}, {
  statement: "What had the villain from the above question done that enraged Batman so much?",
  choices: ["Killed Batman's apprentice and ally, Stephanie Brown","Resurrected and corrupted Jason Todd",
  "Injured Jim Gordon, putting him in a coma",
  "The young clone hero Superboy had died while fighting the villain and Batman was enraged by the death of a young hero."],
  answer: "The young clone hero Superboy had died while fighting the villain and Batman was enraged by the death of a young hero."
}, {
  statement: "In one story, Wayne Enterprises bought Garrick Laboritories. Who owned this small scientific research company?",
  choices:["The original Mr. Terrific", "The original Flash", "The original Starman", "Aquaman"],
  answer:"The original Flash"
}, {
  statement: "Batman has temporarily assumed the powers of which superhero?",
  choices: ["Hawkman", "Superman", "Green Lantern", "All of the above"],
  answer: "All of the above"
}, {
  statement: "During his time as Batman, Dick Grayson did not use the prime Batcav beneath Wayne Manor but instead used a similar facility Bruce had once kept in the sub-basement of the Wayne Foundation central building. What did Dick call his secret lair?",
  choices: ["Batcave II", "Neo-Batcave", "The Bat-Bunker", "Batcave Beta"],
  answer: "The Bat-Bunker"
}];

/*--------------------------------------------------------------
opening screen
--------------------------------------------------------------*/
initialState();

function initialState() {
  $(".question").append("<h2>Welcome to the Batman Quiz App</h2>").append("<p>Click 'Start' to play.</p>"); //appends introduction
  $(".btn1").click(question);             //when .btn1 is clicked, it loads the question function.
  $('#choices').on('click', 'li', function () { //when an li element is clicked, 
    validate.apply(this); // Run the validate function on the InitialState
  });
};
/*-----------------------------------------
removes the answer list and the question
-------------------------------------------*/
function clear() {
  $('ul').empty();  //empties the answer list
  $(".question").empty();   //clears the question
}

/*-------------------------------------------
places question into the game
--------------------------------------------*/
function question() {

  $(".btn1") ? $(".btn1").hide() : false;           //ternary operator. if btn1 exists, hide btn1, else, keep it there

  if (currentQuestion < questionarray.length) {     // If the current question's index is less than the number of questions
    $('.question').text(questionarray[currentQuestion].statement);            // changes the question to the next one
    var i = 0                                                                 //iterates through the next loop
    while(i < questionarray[currentQuestion].choices.length)                  //loop through number of questions
    {
      $('#choices').append("<li>" + questionarray[currentQuestion].choices[i] + "</li>"); //choices get listed
      i ++;
    }
  } else {
    endGame();
  }
}
/*------------------------------------------------
checks to see if answer is correct.
------------------------------------------------*/

function validate() {
  if (currentQuestion > questionarray.length) { //If the question number exceeds the number of questions
    return 0;                                     //return 0;
  }else if ($(this).html() === questionarray[currentQuestion].answer) { //If the element represented is equal to the answer
    score++;    // add to the score.
  }
currentQuestion++; //currentQuestion iterates
clear();           //clear all current items from the game
question();        //load next question
}

/*----------------------------------
Posts final screen
---------------------------------*/
function endGame() {
  $('body')
    .css('background-color', 'black')                               //background change
    .css('background-image', 'url(images/final-background.jpg)');   

  $(".question").empty().append("<h2>Thank you for playing!</h2>"); //empty questions
  
  $("ul").append("your score is: " + score + "/" + questionarray.length);

  $('#button_container').append("<input type='button' class='btn1' value='Play Again'></input>");
  $('.btn1').click(newGame);
};

/*---------------------------------------------------------
starts the game over
-----------------------------------------------------------*/

function newGame(){
  $('body').css('background-color','#404040')               //revert background
    .css('background-image','url(images/2016_logo.jpg)');   //revert background
    clear();                                                //clear form, reset score and questions
    score = 0;
    currentQuestion = 0;
    question();                                             //Loads next question (question 1, since currentQuestion has been reset)
};