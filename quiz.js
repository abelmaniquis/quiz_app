(function(){
    "use strict";
    
     var question1 = {statement: 'According to Batman Vol.1 #673, how long did Bruce Wayne train with "Ninja shadow masters" in the far east?',
         choices: ["one year","two years","five years","eight years"],
         answer: 1};
        
     var question2 ={statement: 'Dick Grayson chose "Robin as his first superhero alias. What was the original reason for this?"',
         choices: ["His mother nicknamed him Robin since he once leaped through the air to save his brother","He intended to emulate Robin Hood","It was his nickname when  he was performing with the circus.","His mother nicknamed him Robin because he was born in the first day of Spring"],
         answer: 1};
         
     var question3 = {statement: "In Batman: The Animated Series, who became the Clock King?",
         choices: ["Temple Fugate","Templeton Fugit", "William Tockman", "Victor Zasz"],
         answer: 0};
            
     var question4 = {statement: "Wayne Manor is generally thought to be how far outside of Gotham City?",
         choices: ["5 miles","8 miles","12 miles","20 miles","23 miles"],
         answer: 2}
        
     var question5 = {statement:'Which anthology contains a Batman Story by Isaac Asimov, who has been called the "grandfather of science fiction"?',
         choices:["Tales of the Batman","The Adventures of the Batman","The Further Adventures of Batman, Vol 3","Legends of the Batman"],
         answer: 0}
     
     var question6 = {statement: ''}
        
     var questionarray = [question1,question2,question3,question4,question5];

function feedback(input,question){
    if(input === question.answer){
        return "correct";
    }
    else{
        return "incorrect";
    }
};
 
});