$(document).ready(initialState);

var score = 0;
var questionarray = [  
    {
         statement: 'According to Batman Vol.1 #673, how long did Bruce Wayne train with "Ninja shadow masters" in the far east?',
         choices: ["one year","two years","five years","eight years"],
         answer: "two years"
        
    },{
         statement: 'Dick Grayson chose "Robin" as his first superhero alias. What was the original reason for this?',
         choices: ["His mother nicknamed him Robin since he once leaped through the air to save his brother","He intended to emulate Robin Hood","It was his nickname when  he was performing with the circus.","His mother nicknamed him Robin because he was born in the first day of Spring"],
         answer: "He intended to emulate Robin Hood"
        
    },{
         statement: "In Batman: The Animated Series, who became the Clock King?",
         choices: ["Temple Fugate","Templeton Fugit", "William Tockman", "Victor Zasz"],
         answer: "Temple Fugate"
        
    },{
         statement: "Wayne Manor is generally thought to be how far outside of Gotham City?",
         choices: ["5 miles","8 miles","12 miles","20 miles","23 miles"],
         answer: "12 miles"
        
    },{
         statement:'Which anthology contains a Batman Story by Isaac Asimov, who has been called the "grandfather of science fiction"?',
         choices:["Tales of the Batman","The Adventures of the Batman","The Further Adventures of Batman, Vol 3","Legends of the Batman"],
         answer: "Tales of the Batman"
        
    }];


function initialState(){
    $(".question").append("<h2>Welcome to the Batman Quiz App</h2>").append("<p>Click 'Start' to play.</p>");
    $(".btn1").click(loadGame);
};

function loadGame(){
    $('#button_container').empty();
    $(".question").empty().append(questionarray[0].statement);
        for(var i = 0; i < questionarray[0].choices.length;i++)
            {
                $('#choices').append("<li>" + questionarray[0].choices[i] + "</li>");
            }
    $("li").click(loadquestiontwo);
    $("li").click(function(){
        //alert($(this).html()===questionarray[0].answer)
        if($(this).html()===questionarray[0].answer)
        {
            score ++;
        };
    });
}

function loadquestiontwo(){
     $('ul').empty();
     $(".question").empty().append(questionarray[1].statement);
        for(var i = 0; i < questionarray[1].choices.length;i++)
            {
                $('#choices').append("<li>" + questionarray[1].choices[i] + "</li>");
            }
    $("li").click(loadquestionthree);
    $("li").click(function(){
        //alert($(this).html()===questionarray[1].answer)
        if($(this).html()===questionarray[1].answer)
        {
            score ++;
        };
    });
}


function loadquestionthree(){
     $('#button_container').empty();
      $('ul').empty();
      $(".question").empty().append(questionarray[2].statement);
        for(var i = 0; i < questionarray[2].choices.length;i++)
            {
                $('#choices').append("<li>" + questionarray[2].choices[i] + "</li>");
            }
    $("li").click(loadquestionfour);
    $("li").click(function(){
        //alert($(this).html())
        if($(this).html()===questionarray[2].answer)
        {
            score ++;
        };
    });
}

function loadquestionfour(){
     $('#button_container').empty();
      $('ul').empty();
      $(".question").empty().append(questionarray[3].statement);
        for(var i = 0; i < questionarray[3].choices.length;i++)
            {
                $('#choices').append("<li>" + questionarray[3].choices[i] + "</li>");
            }
    $("li").click(loadquestionfive);
    $("li").click(function(){
        //alert($(this).html())
        if($(this).html()===questionarray[3].answer)
        {
            score ++;
        };
    });
}

function loadquestionfive(){
     $('#button_container').empty();
      $('ul').empty();
      $(".question").empty().append(questionarray[4].statement);
        for(var i = 0; i < questionarray[4].choices.length;i++)
            {
                $('#choices').append("<li>" + questionarray[4].choices[i] + "</li>");
            }
    $("li").click(endGame);
    $("li").click(function(){
       // alert($(this).html()===questionarray[4].answer)
        if($(this).html()===questionarray[4].answer)
        {
            score ++;
        };
    });
}

/*function evaluateGuess(input,question){
    if(input === question.answer){
        score ++;
    }
};*/
 
function endGame(){
  $('body').css('background-color','black');
  $('body').css('background-image','url(images/final-background.jpg)');
  $(".question").empty().append("<h2>Thank you for playing!</h2>");
  $("ul").empty();
  $('ul').append("your score is: " + score + "/5");
  $('#button_container').append("<input type='button' class='btn1' value='Play Again'></input>");
  $(".btn1").click(loadGame);
  $(".btn1").click(function(){
      score = 0;
  });
};
//console.log(evaluateGuess("two years",questionarray[0].choices[1]))