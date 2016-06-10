
var Quiz = [{
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
  statement: "During his time as Batman, Dick Grayson did not use the prime Batcave beneath Wayne Manor but instead used a similar facility Bruce had once kept in the sub-basement of the Wayne Foundation central building. What did Dick call his secret lair?",
  choices: ["Batcave II", "Neo-Batcave", "The Bat-Bunker", "Batcave Beta"],
  answer: "The Bat-Bunker"
}];
/*-----------------------------------------------------
MODEL
-------------------------------------------------------*/

Quiz.Model = function(){
this.score = 0;
this.currentQuestion = 0;
};

Quiz.Model.prototype.validate = function(quiz){ //This is the part to figure out
  if(this.currentQuestion > this.length){
    return 0;
  }
  else if($(this).html() === quiz[this.currentQuestion].answer){
   this.score++;
  }
this.currentQuestion++;
this.clear();
this.question();
};

/*----------------------------------------------
VIEW
-----------------------------------------------*/

Quiz.View = function(){
    this.initialState();
  $(".btn1").click(function()
  { 
    $('.question').empty();
    $('.question').append('<p>' + Quiz[0].statement + '</p>');
  });
    $("#choices").on('click','li', function(){
    this.moveQuestion();
  })
    
};

Quiz.View.prototype.initialState = function(){
  var i = 0;
  console.log(this);
  $(".question").append("<h2>Welcome to the Batman Quiz App</h2>").append("<p>Click 'Start to play.</p>");
  
};


Quiz.View.prototype.startQuiz = function(){
    $('.question').append('<p>' + "OOOOOH" + '</p>');
    console.log(Quiz)
};

/*--------------------------------------------
CONTROLLER
----------------------------------------------*/
Quiz.Controller = function(){
  
};



/*
Quiz.Controller.prototype.question = function(model,view){
  $(".btn1") ? $(".btn1").hide() : false;
  
  if(model.currentQuestion < this.length){
    $('.question').text(this[model.currentQuestion].choices.length)
    var i = 0;
    while(i < Quiz[this.currentQuestion].choices.length){
      $('#choices').append('<li>' + this[this.currentQuestion].choices[i] + "</li>");
      i++;
    }
  }else{
    this.endGame;
  };
};

Quiz.Controller.prototype.newGame = function(model,view){
   $('body').css('background-color','#404040')
   .css('background-image','url(images/2016_logo.jpg)');   //revert background
    this.clear();                                                //clear form, reset score and questions
    this.score = 0;
    this.currentQuestion = 0;
    this.question();                                             
};
*/


document.addEventListener('DOMContentLoaded', function(){
  var model = new Quiz.Model();
  var view = new Quiz.View();
  var controller = new Quiz.Controller(model,view);
});